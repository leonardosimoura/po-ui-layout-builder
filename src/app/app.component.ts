import { Component, Type, ViewChild, ComponentFactoryResolver, Injector } from '@angular/core';
import { ComponentLayoutModel } from 'src/models/component.layout.model';
import { PoPageDefaultComponent, PoTableComponent, PoComponentsModule, PoModalAction, PoNotificationService, PoModalComponent, PoComboOption, PoPageAction, PoButtonComponent } from '@po-ui/ng-components';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  components: ComponentLayoutModel[] = [
    // {
    //   component: PoTableComponent,
    //   data: {
    //     items: [
    //       {
    //         nome: "nome",
    //         sobrenome: "sobrenome"
    //       }
    //     ]
    //   },
    //   subComponent: []
    // }
  ]

  listaComponents: Type<any>[] = [];


  constructor(private poNotification: PoNotificationService, private resolver: ComponentFactoryResolver, private injector: Injector) {
    this.listaComponents = this.obterComponentes(PoComponentsModule);
    this.componentsOptions = this.listaComponents.map<PoComboOption>((item) => {
      return { label: item.name, value: item } as unknown as PoComboOption;
    });
  }


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

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Fechar',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.adicionarNovoComponent();
    },
    label: 'Confirmar'
  };

  adicionarNovoComponent() {

    let data = {};

    for (let i = 0; i < this.componentProperties.length; i++) {
      const element = this.componentProperties[i];
      data[element.name] = element.value;
    }

    this.components.push({
      component: this.componentParaAdd,
      data: data,
      subComponent: [{
        component: PoButtonComponent,
        data: { label: '2' },
        subComponent: []
      }]
    })
    this.closeModal();
  }

  closeModal() {
    this.poModal.close();
  }

  openModalComponente() {
    this.poModal.open();
  }

  actions: PoPageAction[] = [
    {
      label: "Novo Componente",
      action: this.openModalComponente.bind(this)
    }
  ]


  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  public componentsOptions: Array<PoComboOption> = [];

  _componentParaAdd: Type<any> = null;
  public get componentParaAdd() {
    return this._componentParaAdd;
  }
  public set componentParaAdd(value: Type<any>) {
    this._componentParaAdd = value;

    this.componentProperties = [];

    const componentRef = this.resolver
      .resolveComponentFactory(this.componentParaAdd)
      .create(this.injector);

    let descriptor = { ...Object.getOwnPropertyDescriptors(componentRef.instance) };
    descriptor = { ...descriptor, ...Object.getOwnPropertyDescriptors(componentRef.instance.__proto__) };
    descriptor = { ...descriptor, ...Object.getOwnPropertyDescriptors(componentRef.instance.__proto__.__proto__) };


    for (const key in componentRef.componentType["ɵcmp"].declaredInputs) {
      const element = componentRef.componentType["ɵcmp"].declaredInputs[key];
      descriptor[element] = null;
    }

    for (const key in descriptor) {
      const element = descriptor[key];
      if (element == null || element.set) {
        this.componentProperties.push({
          name: key,
          value: null
        });
      }
    }



    const teste = '';
  }

  componentProperties: any[] = [];
}
