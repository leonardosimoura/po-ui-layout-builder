import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type, Input, NgModule, Inject, Injector, ApplicationRef } from '@angular/core';
import { PoPageDefaultComponent, PoTableComponent, PoModule, PoComponentsModule } from '@po-ui/ng-components';
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

  ngOnInit(): void {
    setTimeout(() => {

      this.viewContainer.clear(); // clear all views
      const componentFactory = this.resolver.resolveComponentFactory(
        this.componentData.component
      );

      const subComponents = [];

      for (let i = 0; i < this.componentData.subComponent.length; i++) {
        const element = this.componentData.subComponent[i];
        const subComponentFactory = this.resolver.resolveComponentFactory(
          element.component
        );
        const subcomp = subComponentFactory.create(this.injector);
        for (const dataKey in element.data) {
          subcomp.instance[dataKey] = element.data[dataKey];
        }
        subcomp.hostView.detectChanges();
        subComponents.push(
          [subcomp.location.nativeElement]
        );
      }
      const componentRef = this.viewContainer.createComponent(componentFactory, 0, this.injector, subComponents);
      for (const dataKey in this.componentData.data) {
        componentRef.instance[dataKey] = this.componentData.data[dataKey];
      }


    }, 500);
  }
}
