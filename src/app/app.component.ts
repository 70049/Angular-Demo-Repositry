import { Component, OnInit } from '@angular/core';
import { WeatherService } from './Services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

     constructor(public weatherService: WeatherService) { }

     public weatherData?: WeatherData;
     public cityName: string = "newyork";


     ngOnInit(): void {
          this.getWeatherInfo(this.cityName);
          this.cityName = '';

     }

     public searchFeild = () => {
          this.getWeatherInfo(this.cityName);
          this.cityName = '';
     }

     private getWeatherInfo = (cityName: string) => {
          this.weatherService.getWeatherData(cityName)
               .subscribe({
                    next: (res) => {
                         this.weatherData = res;
                         console.log(res);
                    },
                    error: (error) => {
                         console.log(error);
                    }
               });
     }

}
