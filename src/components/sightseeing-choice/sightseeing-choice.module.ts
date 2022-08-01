import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SightseeingChoiceComponent } from './sightseeing-choice.component';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    SightseeingChoiceComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  exports: [
    SightseeingChoiceComponent
  ],
  bootstrap: [SightseeingChoiceComponent]
})
export class SightseeingChoiceModule { }
