import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type, Input, NgModule } from '@angular/core';
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

  constructor(private resolver: ComponentFactoryResolver) {
    //component = PoPageDefaultComponent;
  }

  @ViewChild('viewContainer', { read: ViewContainerRef }) viewContainer: ViewContainerRef;

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

      const componentRef = this.viewContainer.createComponent(componentFactory);

      for (const dataKey in this.componentData.data) {
        componentRef.instance[dataKey] = this.componentData.data[dataKey];
      }
    }, 500);
  }
}
