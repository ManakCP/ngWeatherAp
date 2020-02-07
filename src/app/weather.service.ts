import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coord } from '/Models/Coord';
import { WeatherData } from '/Models/WeatherData';

@Injectable({
  providedIn:'root'
})
export class WeatherService {
  private url:string;
  constructor(private http: HttpClient) { }

  getWeatherByCity(filterText: String) : Observable<WeatherData>
  {
    this.url = 'https://api.openweathermap.org/data/2.5/weather?q='+filterText+'&APPID=88dc251c19359890486549fc1a7f4bc7';
    return this.http.get(this.url).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }
  getWeatherByCoords(coord: Coord) : Observable<WeatherData>
  {    
     this.url = 'https://api.openweathermap.org/data/2.5/weather?lat='+coord.lat+'&lon='+coord.lon+'&APPID=88dc251c19359890486549fc1a7f4bc7';

    //this.url = `${this.URL}?lat=${coord.lat}&lon=${coord.lon}&APPID=${this.Key}`;


    return this.http.get(this.url).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }
}