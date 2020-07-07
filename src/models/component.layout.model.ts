import { ViewContainerRef, Type, ComponentRef } from '@angular/core';

export class ComponentLayoutModel {

    constructor(public id: string, public component: Type<any>, public data: any) {
    }

    public subComponent: ComponentLayoutModel[] = [];
}