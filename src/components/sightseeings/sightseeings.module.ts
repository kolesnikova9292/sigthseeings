import { NgModule } from '@angular/core';

import { SightseeingsComponent } from './sightseeings.component';
import {SightseeingCardModule} from "../sightseeing-card/sightseeing-card.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SightseeingsComponent
  ],
  imports: [
    CommonModule,
    SightseeingCardModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    SightseeingsComponent
  ],
  bootstrap: [SightseeingsComponent]
})
export class SightseeingsModule { }
