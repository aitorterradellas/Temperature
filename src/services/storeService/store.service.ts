import { Injectable } from '@angular/core';
import { Temperature } from '../../entities/Temperature';
import { City } from '../../entities/City';

export class TemperatureList {
    list: Temperature[];
    city: City;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
    store: TemperatureList[];

    constructor() {
    }

    getStore(): TemperatureList[] {
        const str = sessionStorage.getItem('Store');
        if (str) {
            return JSON.parse(str);
        }

        return null;
    }

    setStore(store: TemperatureList[]) {
        const obj = JSON.stringify(store);
        sessionStorage.setItem('Store', obj);
    }

    resetStore() {
        sessionStorage.removeItem('Store');
    }

    addTemperatureList(temperature: Temperature, store: TemperatureList[]) {
        const tempList = new TemperatureList();
        tempList.city = temperature.getCity();
        tempList.list = [temperature];
        store.push(tempList)
    }

    addTemperature(temperature: Temperature) {
        let store = this.getStore();
        if (store) {
            let found = false;
            for (let item of store) {
                if (item.city === temperature.getCity()) {
                    item.list.push(temperature);
                    found = true;
                    break;
                }
            }

            if (!found) {
                this.addTemperatureList(temperature, store);
            }
        } else {
            store = [];
            this.addTemperatureList(temperature, store);
        }

        this.setStore(store);
    }

    getByCity(city: City): TemperatureList {
        let store = this.getStore();
        if (store) {
            for (let item of store) {
                if (item.city === city) {
                    return item;
                }
            }
        }

        return null;
    }

}
