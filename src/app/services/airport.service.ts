import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AirportService {
  constructor(private http: HttpClient) {}

  getAirports(): Observable<Array<string>> {
    return this.http.get<string[]>('http://www.angular.at/api/airport');
  }

}








/*
serwis zwracajacy observable(promise) array of string*/
