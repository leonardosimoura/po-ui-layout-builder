import { Component, Type, ViewChild, ComponentFactoryResolver, Injector, NgModule, NgModuleRef, ElementRef, AfterViewInit } from '@angular/core';
import { ComponentLayoutModel } from 'src/models/component.layout.model';
import { PoPageDefaultComponent, PoTableComponent, PoComponentsModule, PoModalAction, PoNotificationService, PoModalComponent, PoComboOption, PoPageAction, PoButtonComponent, PoTreeViewItem, PoSelectOption, PoListViewAction, PoModule } from '@po-ui/ng-components';
import { NgForm } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { PoRowComponent } from './porow/porow.component';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { PoListViewFakeComponent } from './po-list-view-fake/po-list-view-fake.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  components: ComponentLayoutModel[] = environment.componentesIniciais;

  listaComponents: Type<any>[] = [];

  constructor(
    private poNotification: PoNotificationService,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private sanitizer: DomSanitizer) {
    this.listaComponents = this.obterComponentes(PoComponentsModule);
    this.listaComponents.push(PoRowComponent); //Verificar melhor como fazer
    //this.listaComponents.push(PoListViewFakeComponent); //Verificar melhor como fazer
    this.componentsOptions = this.listaComponents.map<PoComboOption>((item) => {
      return { label: item.name, value: item } as unknown as PoComboOption;
    });
  }

  ngAfterViewInit(): void {

  }

  readFiles(event) {
    const fileList = event.target.files;
    console.log(fileList);
    if (fileList.length == 1) {
      this.readJsonFile(fileList[0]);
    }
  }

  @ViewChild("jsonFile") jsonFile: ElementRef;

  nomeFileDownload = 'componente.txt';

  private obterComponentes(type: Type<any>) {

    let components: Type<any>[] = [];

    const _ngModule = type as any
    for (let index = 0; index < _ngModule.decorators[0].args[0].exports.length; index++) {
      const element = _ngModule.decorators[0].args[0].exports[index];

      if (element.name.endsWith('Module')) {
        components = [...components, ...this.obterComponentes(element)];
      } else if (element.name.endsWith('Component')) {
        components.push(element);
      }
    }
    return components;
  }

  actions: PoPageAction[] = [
    {
      label: "Configuração",
      icon: 'po-icon po-icon-settings',
      action: this.openConfig.bind(this)
    },
    {
      label: "Exportar HTML*",
      action: this.exportarComponentes.bind(this)
    },
    {
      label: "Exportar JSON*",
      action: this.exportarJson.bind(this)
    },
    {
      label: "Importar JSON*",
      action: this.importarJson.bind(this)
    }
  ]

  exportarJson() {
    const mapper = (component: ComponentLayoutModel) => {

      const _temp = {
        component: component.component.name,
        data: component.data,
        id: component.id,
        subComponent: []
      }

      if (component.subComponent && component.subComponent.length > 0) {
        for (let i = 0; i < component.subComponent.length; i++) {
          const element = mapper(component.subComponent[i]);
          _temp.subComponent.push(element);
        }
      }
      return _temp;
    };

    try {
      const data = JSON.stringify(this.components.map(item => mapper(item)));

      const blob = new Blob([data], { type: 'application/octet-stream' });
      this.nomeFileDownload = 'componentes.json';
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
      setTimeout(() => {
        this.componentDownloader.nativeElement.click();
      }, 500);
    } catch (error) {
      this.poNotification.error('Ocorreu um erro ao exportar o Json');
    }
  }

  readJsonFile(file) {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const jsonData = event.target.result as string;

      const mapper = (json) => {

        const subComponent: ComponentLayoutModel[] = [];

        if (json.subComponent) {
          for (let i = 0; i < json.subComponent.length; i++) {
            const element = mapper(json.subComponent[i]);
            subComponent.push(element);
          }
        }
        const item: ComponentLayoutModel = {
          component: this.listaComponents.find(a => a.name == json.component),
          id: json.id,
          componentRef: null,
          data: json.data,
          subComponent: subComponent
        }
        return item
      };


      try {
        const _tempListaComponentes: ComponentLayoutModel[] = [];
        const jsonObject = JSON.parse(jsonData);
        for (let i = 0; i < jsonObject.length; i++) {
          _tempListaComponentes.push(mapper(jsonObject[i]));
        }

        this.components = [..._tempListaComponentes];
      } catch (error) {
        this.poNotification.error('Ocorreu um erro ao importar o Json');
      }


    });
    reader.readAsText(file, 'UTF-8');
  }


  importarJson() {
    this.jsonFile.nativeElement.click();
  }

  //Edição
  private componentesEdicao: ComponentLayoutModel[] = [];

  treeViewData: PoTreeViewItem[] = [];

  confirmarAlteracoes() {
    this.confirmarAlteracoesComponentes();
    this.closeModal();
  }

  fileUrl;
  @ViewChild("componentDownloader") componentDownloader: ElementRef;
  exportarComponentes() {
    try {
      let finalStr = '';

      for (let i = 0; i < this.components.length; i++) {
        const element = this.components[i];
        finalStr = finalStr + this.gerarArquivoComponente(element);
      }
      const blob = new Blob([finalStr], { type: 'application/octet-stream' });
      this.nomeFileDownload = 'componentes.txt';
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
      setTimeout(() => {
        this.componentDownloader.nativeElement.click();
      }, 500);
    } catch (error) {
      this.poNotification.error('Ocorreu um erro ao exportar o HTML');
    }
  }

  private gerarArquivoComponente(componente: ComponentLayoutModel) {

    let str = '';
    let strInputs = '';
    const selector = componente.componentRef.componentType['decorators'][0].args[0].selector;

    for (const key in componente.componentRef.componentType["ɵcmp"].declaredInputs) {
      const element = componente.componentRef.componentType["ɵcmp"].declaredInputs[key];
      let tempValue = '';
      if (componente.data[key.substr(2)]) {

        try {
          if (componente.data[key.substr(2)]) {
            if (componente.data[key.substr(2)] instanceof Object) {
              tempValue = "'" + JSON.stringify(componente.data[key.substr(2)]) + "'";
            }
            else if (!isNaN(componente.data[key.substr(2)])) {
              tempValue = '"' + ((componente.data[key.substr(2)]) ? componente.data[key.substr(2)] : '').toString() + '"';
            }
            else {
              tempValue = '"' + "'" + ((componente.data[key.substr(2)]) ? componente.data[key.substr(2)] : '').toString() + "'" + '"';
            }
          }
        } catch (error) {
          tempValue = '"' + "'" + ((componente.data[key.substr(2)]) ? componente.data[key.substr(2)] : '').toString() + "'" + '"';
        }

        strInputs = strInputs + ' [' + key + ']=' + tempValue;

      }
    }

    if (componente.data.class) {
      strInputs = strInputs + ' class="' + componente.data.class + '" ';
    }

    let strSubComponentes = '';

    for (let i = 0; i < componente.subComponent.length; i++) {
      const element = componente.subComponent[i];
      strSubComponentes = strSubComponentes + this.gerarArquivoComponente(element);
    }

    if (componente.component == PoRowComponent) {
      str = '<div class="po-row">' + strSubComponentes + ' </div>';
    } else {
      str = '<' + selector + strInputs + '> ' + strSubComponentes + ' </' + selector + '>';
    }

    return str;
  }

  adicionarComponente() {
    this.componentesEdicao.push({
      id: uuidv4(),
      component: null,
      data: {},
      subComponent: [],
      componentRef: null
    });
    this.atualizarTreeView();
  }
  confirmarAlteracoesComponentes() {

    const removerNaoConfigurados = (itens: ComponentLayoutModel[]): ComponentLayoutModel[] => {

      for (let i = 0; i < itens.length; i++) {
        const element = itens[i];
        element.subComponent = removerNaoConfigurados(element.subComponent);
      }
      return itens.filter(f => f.component != null);
    }
    this.componentesEdicao = removerNaoConfigurados(this.componentesEdicao);
    this.components = [];
    setTimeout(() => {
      this.components = [...this.componentesEdicao];
    }, 500);
  }

  atualizarTreeView() {
    this.treeViewData = [];

    const mapper = (item: ComponentLayoutModel, expanded: boolean = true) => {
      const poTreeViewModel: PoTreeViewItem = {
        label: (item.component != null) ? item.component.name : "Novo Componente",
        value: item.id
      };

      if (poTreeViewModel.value == this.componentEdicao?.id) {
        poTreeViewModel.expanded = true;
      }

      const subItems: PoTreeViewItem[] = [];

      for (let i = 0; i < item.subComponent.length; i++) {
        const element = item.subComponent[i];
        subItems.push(mapper(element, poTreeViewModel.expanded));
      }
      poTreeViewModel.subItems = subItems;

      return poTreeViewModel;
    };

    for (let i = 0; i < this.componentesEdicao.length; i++) {
      const element = this.componentesEdicao[i];
      this.treeViewData.push(mapper(element))
    }
  }

  limparTela() {
    this.componentEdicao = null;
    this.components = [];
    this.componentesEdicao = [];
    this.treeViewData = [];
  }

  buscarComponentPorId(id: string) {
    const finder = (id: string, parents: ComponentLayoutModel[]): ComponentLayoutModel => {

      const firstTry = parents.find(p => p.id == id);

      if (firstTry)
        return firstTry as ComponentLayoutModel;

      for (let i = 0; i < parents.length; i++) {
        const element = parents[i];
        const secondTry = finder(id, element.subComponent);
        if (secondTry)
          return secondTry as ComponentLayoutModel;
      }
      return null as ComponentLayoutModel
    }

    return finder(id, this.componentesEdicao);
  }

  treeViewItemSelecionado(treeViewItem: PoTreeViewItem) {

    // const unmark = (dismarkItem: PoTreeViewItem) => {
    //   dismarkItem.selected = true;
    //   dismarkItem.expanded = true;
    //   if (dismarkItem.subItems != undefined || dismarkItem.subItems != null) {
    //     for (let i = 0; i < dismarkItem.subItems.length; i++) {
    //       const element = dismarkItem.subItems[i];
    //       unmark(element);
    //     }
    //   }
    // }
    // unmark(treeViewItem);
    const search = this.buscarComponentPorId(treeViewItem.value as string);
    //this.treeViewData = [...this.treeViewData];
    this.componentEdicao = search;
  }

  closeModal() {
    this.exibirConfig = false;
  }

  openConfig() {
    this.exibirConfig = true;
    this.componentesEdicao = [...this.components];
    this.atualizarTreeView();
  }

  exibirConfig = false;

  public componentsOptions: Array<PoComboOption> = [];

  _componentEdicao: ComponentLayoutModel = null;
  public get componentEdicao() {
    return this._componentEdicao;
    ;
  }
  public set componentEdicao(value: ComponentLayoutModel) {
    this._componentEdicao = value;
    this.atualizarProriedadesComponente(value);
  }

  changeComponentCombo() {
    this.atualizarProriedadesComponente(this.componentEdicao);
    this.confirmarEdicaoComponente(false);
  }


  obterItemTreeListPorId(id: string) {
    const finder = (id: string, parents: PoTreeViewItem[]): PoTreeViewItem => {

      const firstTry = parents.find(p => p.value == id);

      if (firstTry)
        return firstTry as PoTreeViewItem;

      for (let i = 0; i < parents.length; i++) {
        const element = parents[i];
        const secondTry = finder(id, element.subItems);
        if (secondTry)
          return secondTry as PoTreeViewItem;
      }
      return null as PoTreeViewItem
    }

    return finder(id, this.treeViewData);
  }


  confirmarEdicaoComponente(finalizarEdicao: boolean) {

    this.componentEdicao.data = {};

    for (let i = 0; i < this.componentProperties.length; i++) {
      const element = this.componentProperties[i];
      if (element.value != undefined && element.value != null && element.value != '') {
        try {
          this.componentEdicao.data[element.name] = JSON.parse(element.value);
        } catch (error) {
          this.componentEdicao.data[element.name] = element.value;
        }
      }
    }
    const treeViewItem = this.obterItemTreeListPorId(this.componentEdicao.id);
    treeViewItem.label = (this.componentEdicao.component != null) ? this.componentEdicao.component.name : 'Novo Componente';
    treeViewItem.expanded = true;
    this.treeViewData = [...this.treeViewData];
    if (finalizarEdicao == true) {

      this.componentEdicao = null;
    }
  }


  adicionarSubComponentes() {
    if (this.componentEdicao) {
      this.componentEdicao.subComponent.push({
        id: uuidv4(),
        component: null,
        data: {},
        subComponent: [],
        componentRef: null
      });
      this.confirmarEdicaoComponente(false);
      this.atualizarTreeView();
    }
  }

  atualizarProriedadesComponente(value: ComponentLayoutModel) {
    this.componentProperties = [];
    if (value == null || value == undefined) {
      return;
    }

    if (value.component == null || value.component == undefined) {
      return;
    }

    // const componentRef = this.resolver
    //   .resolveComponentFactory(this.componentEdicao.component)
    //   .create(this.injector);


    let descriptor = {};

    // let descriptor = { ...Object.getOwnPropertyDescriptors(componentRef.instance) };
    // descriptor = { ...descriptor, ...Object.getOwnPropertyDescriptors(componentRef.instance.__proto__) };
    // descriptor = { ...descriptor, ...Object.getOwnPropertyDescriptors(componentRef.instance.__proto__.__proto__) };

    // let tempInstance: any = componentRef.instance;

    // while (tempInstance) {
    //   descriptor = { ...descriptor, ...Object.getOwnPropertyDescriptors(componentRef.instance) }
    //   tempInstance = tempInstance.__proto__;
    // }


    for (const key in this.componentEdicao.component["ɵcmp"].declaredInputs) {
      const element = this.componentEdicao.component["ɵcmp"].declaredInputs[key];
      let elementkey = (element.startsWith('set') ? element.substr(3) : element);

      elementkey = elementkey.substr(0, 1).toLowerCase() + elementkey.substr(1);

      descriptor[elementkey] = null;
    }

    if (this.componentEdicao.component['__proto__']
      && this.componentEdicao.component['__proto__'].ɵdir
      && this.componentEdicao.component['__proto__'].ɵdir.outputs) {
      for (const key in this.componentEdicao.component['__proto__'].ɵdir.outputs) {
        const element = this.componentEdicao.component['__proto__'].ɵdir.outputs[key];
        let elementkey = (element.startsWith('set') ? element.substr(3) : element);

        elementkey = 'z OutPut - ' + elementkey.substr(0, 1).toLowerCase() + elementkey.substr(1);

        //Descomentar para usar os outputs
        //descriptor[elementkey] = null;
      }
    }


    for (const key in descriptor) {
      const element = descriptor[key];
      if (element == null || element.set) {
        const propriedade = {
          name: key,
          value: ''
        }

        try {

          if (value.data[key]) {
            if (value.data[key] instanceof Object) {
              propriedade.value = JSON.stringify(value.data[key]);
            }
            else {
              propriedade.value = (value.data[key]) ? value.data[key] : '';
            }
          }


        } catch (error) {
          propriedade.value = (value.data[key]) ? value.data[key] : '';
        }

        this.componentProperties.push(propriedade);
      }
    }

    this.componentProperties.push({
      name: 'class',
      value: value.data.class
    });

    this.componentProperties = this.componentProperties.sort((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) { return -1; }
      if (a.name.toUpperCase() > b.name.toUpperCase()) { return 1; }
      return 0;
    })
  }
  componentProperties: any[] = [];


  windowSize: number = window.innerHeight - 125;

  onResize(evt) {
    this.windowSize = window.innerHeight - 125;
  }

  //CodeEditor


}
