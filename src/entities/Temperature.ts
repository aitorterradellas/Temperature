import { City } from './City';

export class Temperature {
    private city: City;
    private value: number;
    private date: Date;

    constructor() {}

    getCity(): City {
        return this.city
    }

    setCity(city: City) {
        this.city = city;
    }

    getValue(): number {
        return this.value;
    }

    setValue(value: number) {
        this.value = value;
    }

    getDate(): Date {
        return this.date;
    }

    setDate(date: Date) {
        this.date = date;
    }

    private addZeroes(num: number): string {
        let s = num.toString();
        if (num < 10) {
            s = "0" + num;
        }
        return s;
    }

    displayDate(): string {
        const d = this.date;
        if (d) {
            const dformat =
            [
                this.addZeroes(d.getMonth() + 1),
                this.addZeroes(d.getDate()),
                d.getFullYear()
            ].join('/') + ' ' +
            [
                this.addZeroes(d.getHours()),
                    this.addZeroes(d.getMinutes()),
                    this.addZeroes(d.getSeconds())
            ].join(':');
            return dformat;
        }

        return null;
    }

    copyTemperature(temperature: Temperature) {
        this.city = temperature.city;
        this.value = temperature.value;
        this.date = new Date(temperature.date);
    }
}

export class TemperatureResult {
    coord: {
        lon: string,
        lat: string
    };
    weather: object[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    }
    visibility: number;
    dt: number;
    sys: object;
    timezone: number;
    id: number;
    cod: number;
    base: string;
    name: string;
}