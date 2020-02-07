import { Component, OnInit } from '@angular/core';
import { WeatherService }  from './weather.service';
import { Coord } from './Models/Coord';
import { WeatherData } from './Models/WeatherData';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  filterText:String;
  weatherData:WeatherData;
  geo: Coord;

  constructor(private weatherSrv: WeatherService){}

  ngOnInit(): void
  {
    this.getGeoLocation();
  }
  clickSubmit()
  {
    // this.weatherSrv.getWeather(this.filterText).subscribe
    // (
    //   data => { this.weatherData = JSON.parse(data) },
    // );
  }
  getGeoLocation()
  {    
    if (navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(
        (position)=>
        {
          this.geo = { lon: Math.round(position.coords.longitude), lat : Math.round(position.coords.latitude) };
            this.weatherSrv.getWeatherOnCoords(this.geo)
              .subscribe( data => 
                {
                   this.weatherData = data; 
                   document.getElementById('location').innerText = this.weatherData.name +', '+ this.weatherData.sys.country
                }, 
                error => { console.log(error); }
              );
        });
    }
    else
    {
      console.log('Browser not support');
    }
  }
  
}
