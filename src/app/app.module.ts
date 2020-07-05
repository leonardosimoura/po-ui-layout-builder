import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { ComponentLayoutComponent } from './component-layout/component-layout.component';
import { FormsModule } from '@angular/forms';
import { PorowComponent } from './porow/porow.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentLayoutComponent,
    PorowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
