import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SightseeingsComponent} from "../sightseeings/sightseeings.component";
import {SightseeingChoiceComponent} from "../sightseeing-choice/sightseeing-choice.component";

const routes: Routes = [
  { path: '', component: SightseeingsComponent },
  { path: 'cart', component: SightseeingChoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
