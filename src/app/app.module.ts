import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAirportsComponent } from './get-airports/get-airports.component';
import {AirportService} from './services/airport.service';
import { AirportComponent } from './get-airports/airport/airport.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAirportsComponent,
    AirportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AirportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
