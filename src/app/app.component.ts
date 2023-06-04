import { Component, OnInit } from '@angular/core';
import { WeatherService } from './Services/weather.service';
import { myWeather } from './models/weather.model';

@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

     constructor(private weatherService: WeatherService) { }

     public weatherData?: myWeather;
     public city: string = 'Begusarai';
     public myWeather: any;
     public temperature: number = 0;
     public minTemp: number = 0;
     public maxTemp: number = 0;



     ngOnInit(): void {
          this.searchFeild(this.city);
          this.weatherService.getWeatherData(this.city).subscribe({
               next: (res) => {
                    this.myWeather = res;
                    let tempInFahrenheit: any = this.myWeather.main.temp;
                    let minTempF: any = this.myWeather.main.temp_min;
                    let maxTempF: any = this.myWeather.main.temp_max;
                    this.temperature = this.convertFtoC(tempInFahrenheit);
                    this.minTemp = this.convertFtoC(minTempF);
                    this.maxTemp = this.convertFtoC(maxTempF);
               },
               error: (error) => {
                    // console.log(error)
               },
               // complete: () => console.info("API call complete!")
          })
     }
     public convertFtoC(fahrenheit: any) {
          let celsius = (fahrenheit - 32) * 5 / 9;
          return celsius;
     }


     public searchFeild = (cityname: string) => {
          this.city = cityname;
          this.weatherService.getWeatherData(this.city);
          return this.city;
     }
}
