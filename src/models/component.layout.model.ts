import { ViewContainerRef, Type } from '@angular/core';

export class ComponentLayoutModel {

    constructor(public component: Type<any>, public data: any) {


    }

    public subComponent: ComponentLayoutModel[] = [];
}