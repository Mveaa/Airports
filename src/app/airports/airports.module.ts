import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AirportsRoutingModule} from './airports-routing.module';
import {AirportComponent} from './components/airport/airport.component';
import {GetAirportsComponent} from './components/get-airports/get-airports.component';



@NgModule({
  declarations: [
    GetAirportsComponent,
    AirportComponent
  ],
  imports: [
    CommonModule,
    AirportsRoutingModule,

  ]
})
export class AirportsModule { }
