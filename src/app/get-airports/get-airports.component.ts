import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AirportService} from '../services/airport.service';

@Component({
  selector: 'app-get-airports',
  templateUrl: './get-airports.component.html',
  styleUrls: ['./get-airports.component.css']
})
export class GetAirportsComponent implements OnInit {
  public airport: string[];

  constructor( private airportService: AirportService) { }

  ngOnInit(): void {
    this.airportService.getAirports().subscribe(
      (airport: string[]) => {
        this.airport = airport;
      },
      () => {},
      () => {}
    );
  }


























}
/*serwis zwraca observable, subscribe dodaje funkcje z kontekstem*/
