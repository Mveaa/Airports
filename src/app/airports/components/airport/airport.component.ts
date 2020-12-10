import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {

  @Input() public airport: string;

  constructor() { }

  ngOnInit(): void {
  }

}
