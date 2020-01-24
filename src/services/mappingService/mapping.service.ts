import { Injectable } from '@angular/core';
import { TemperatureResult, Temperature } from '../../entities/Temperature';
import { City } from '../../entities/City';

@Injectable({
  providedIn: 'root'
})
export class MappingService {

    constructor() { }

    private getCity(name: string): City {
        const values = Object.values(City);

        for (const value of values) {
            if (name === value) {
                return value;
            }
        }

        return null;
    }

    private convertKelvinToCelsius(kelvin: number): number {
        if (kelvin < (0)) {
            return null;
        } else {
            return parseFloat((kelvin - 273.15).toFixed(2));
        }
    }
 
    mapTemperature(temperatureResult: TemperatureResult): Temperature {
        let temperature = new Temperature();
        temperature.setCity(this.getCity(temperatureResult.name));
        temperature.setDate(new Date());
        temperature.setValue(this.convertKelvinToCelsius(temperatureResult.main.temp));

        return temperature;
    }
}
