import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { ComponentLayoutComponent } from './component-layout/component-layout.component';
import { FormsModule } from '@angular/forms';
import { PoRowComponent } from './porow/porow.component';
import { PoCodeEditorModule } from '@po-ui/ng-code-editor';

@NgModule({
  declarations: [
    AppComponent,
    ComponentLayoutComponent,
    PoRowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PoModule,
    PoCodeEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
