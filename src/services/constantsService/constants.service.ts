import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

    constructor() { }

    static API_ID = '2259bf874a8d711166b5aa0d77bec5b9';
    static URL = 'api.openweathermap.org/data/2.5/weather';
    static INTERVAL = 3 * 60 * 1000;
    static TIMEOUT = 1 * 1000;
}
