import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { myWeather } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }



  public getWeatherData(cityName: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=76c425f83d3dd4a696721e5d4d4cc3fe&units=imperial');
  }
}
