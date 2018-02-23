import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule} from'@angular/forms' ; // <--- ngModel esta aqui
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule //<----importa el formsmodule antes del enlace con [(ngmodel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
