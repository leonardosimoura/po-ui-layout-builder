import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type, Input, NgModule, Inject, Injector, ApplicationRef, ComponentRef, QueryList } from '@angular/core';
import { PoPageDefaultComponent, PoTableComponent, PoModule, PoComponentsModule, PoTabsComponent, PoTabComponent, PoChartComponent, PoStepperComponent, PoStepComponent } from '@po-ui/ng-components';
import { ComponentLayoutModel } from 'src/models/component.layout.model';

@Component({
  selector: 'app-component-layout',
  templateUrl: './component-layout.component.html',
  styleUrls: ['./component-layout.component.css']
})
export class ComponentLayoutComponent implements OnInit {

  @Input()
  public componentData: ComponentLayoutModel;

  constructor(private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private viewContainer: ViewContainerRef) {
    //component = PoPageDefaultComponent;
  }


  decoratorOfType<T>(decoratedType: Type<any>, decoratorType: Type<T>): T {
    // get all decorators off of the provided type
    return Reflect.getOwnPropertyDescriptor(decoratedType, '__annotations__').value.find((annotation: any) =>
      // get the decorator that matches the requested type
      annotation instanceof decoratorType
    );
  }

  gerarSubComponents(componente: ComponentLayoutModel) {
    const subComponentesGerados = [];
    const subComponentesNativeElementsGerados = [];

    for (let i = 0; i < componente.subComponent.length; i++) {
      const element = componente.subComponent[i];
      const subComponentFactory = this.resolver.resolveComponentFactory(
        element.component
      );

      const segundoNivel = this.gerarSubComponents(element);
      const subcomp = subComponentFactory.create(this.injector, segundoNivel.subComponentesNativeElementsGerados);
      for (const dataKey in element.data) {
        subcomp.instance[dataKey] = element.data[dataKey];
      }
      subcomp.hostView.detectChanges();
      subComponentesNativeElementsGerados.push(subcomp.location.nativeElement);
      subComponentesGerados.push(subcomp.instance);
    }
    return { subComponentesGerados: [subComponentesGerados], subComponentesNativeElementsGerados: [subComponentesNativeElementsGerados], };
    //return [...subComponentesGerados];
  }

  ngOnInit(): void {
    setTimeout(() => {

      this.viewContainer.clear(); // clear all views
      const componentFactory = this.resolver.resolveComponentFactory(
        this.componentData.component
      );

      const subComponentes = this.gerarSubComponents(this.componentData);

      let componentRef: ComponentRef<any> = null;
      componentRef = this.viewContainer.createComponent(componentFactory, 0, this.injector, subComponentes.subComponentesNativeElementsGerados);

      for (const dataKey in this.componentData.data) {
        componentRef.instance[dataKey] = this.componentData.data[dataKey];
      }

      //PoTabsComponent não esta gerando os tabs header
      if (this.componentData.component == PoTabsComponent) {

        setTimeout(() => {
          const t = new QueryList<PoTabComponent>();
          t.reset([...subComponentes.subComponentesGerados]);
          componentRef.instance.tabs = t;
          componentRef.hostView.detectChanges();
        }, 100);
      }

      if (this.componentData.component == PoStepperComponent) {
        setTimeout(() => {
          const t = new QueryList<PoStepComponent>();
          t.reset([...subComponentes.subComponentesGerados]);
          componentRef.instance.poSteps = t;
          componentRef.hostView.detectChanges();
          componentRef.instance.ngAfterContentInit();
        }, 500);
      }

      if (this.componentData.component == PoChartComponent) {
        setTimeout(() => {
          componentRef.instance.rebuildComponent();
        }, 500);
      }

    }, 500);
  }
}
