import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {SightseeingsModule} from "../sightseeings/sightseeings.module";
import {SightseeingChoiceModule} from "../sightseeing-choice/sightseeing-choice.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SightseeingsModule,
    SightseeingChoiceModule
  ],
  providers: [],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
