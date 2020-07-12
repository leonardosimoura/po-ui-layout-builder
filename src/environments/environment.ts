// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { ComponentLayoutModel } from 'src/models/component.layout.model';
import { PoWidgetComponent, PoInfoComponent } from '@po-ui/ng-components';

const componentes: ComponentLayoutModel[] = [
  {
    component: PoWidgetComponent,
    componentRef: null,
    data: {
      title: 'Mais informações sobre o projeto'
    },
    id: '1',
    subComponent: [
      {
        id: "2",
        component: PoInfoComponent,
        data: {
          label: "GitHub",
          url: 'https://github.com/leonardosimoura/po-ui-layout-builder',
          value: 'https://github.com/leonardosimoura/po-ui-layout-builder'
        },
        subComponent: [],
        componentRef: null
      },
      {
        id: "3",
        component: PoInfoComponent,
        data: {
          label: "PO-UI",
          url: 'https://po-ui.io/',
          value: 'https://po-ui.io/'
        },
        subComponent: [],
        componentRef: null
      }
    ]
  }
]

export const environment = {
  production: false,
  componentesIniciais: componentes
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
