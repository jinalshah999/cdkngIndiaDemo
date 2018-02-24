import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { A11yModule  } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FontdialogComponent } from './fontdialog/fontdialog.component';




@NgModule({
  declarations: [
    AppComponent,
    FontdialogComponent

  ],
  imports: [
    BrowserModule,
    CommonModule
    A11yModule,
    OverlayModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
