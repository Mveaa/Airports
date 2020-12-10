import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GetAirportsComponent} from './components/get-airports/get-airports.component';


const routes: Routes = [
  {
    path: '',
    component: GetAirportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportsRoutingModule { }
