import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SightseeingCardComponent } from './sightseeing-card.component';



@NgModule({
  declarations: [
    SightseeingCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    SightseeingCardComponent
  ],
  bootstrap: [SightseeingCardComponent]
})
export class SightseeingCardModule { }
