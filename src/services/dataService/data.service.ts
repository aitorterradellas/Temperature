import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../../entities/City';
import { ConstantsService } from '../constantsService/constants.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) { }

    getTemperature(city: City) {
        return this.http.get(`http://${ConstantsService.URL}?q=${city}&appid=${ConstantsService.API_ID}`)
            .pipe(data => data);
    }
}
