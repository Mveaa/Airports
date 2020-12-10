import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ErrorPageComponent} from './error-page/error-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'airports',
    loadChildren: () => import('./airports/airports.module').then(m => m.AirportsModule)
  },
  // lazy loading
  {
    path: 'welcome',
    component: LandingPageComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
