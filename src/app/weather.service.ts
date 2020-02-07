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

  constructor(private http: HttpClient) { }

  getWeather(filterText: String)
  {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+filterText+'&APPID=88dc251c19359890486549fc1a7f4bc7');
  }
  getWeatherOnCoords(coord: Coord) : Observable<WeatherData>
  {
    let url: string;
    url = 'https://api.openweathermap.org/data/2.5/weather?lat='+coord.lat+'&lon='+coord.lon+'&APPID=88dc251c19359890486549fc1a7f4bc7';
    return this.http.get(url).pipe(map(res => JSON.parse(JSON.stringify(res))));
  }


}