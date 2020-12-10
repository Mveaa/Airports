import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {GetAirportsComponent} from './get-airports/get-airports.component';
import {LandingPageComponent} from './landing-page/landing-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'airports',
    component: GetAirportsComponent
  },
  {
    path: 'welcome',
    component: LandingPageComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
