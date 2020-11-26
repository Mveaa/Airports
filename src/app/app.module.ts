import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAirportsComponent } from './get-airports/get-airports.component';
import {AirportService} from './services/airport.service';

@NgModule({
  declarations: [
    AppComponent,
    GetAirportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AirportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
