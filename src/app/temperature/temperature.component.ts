import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../entities/City';
import { Temperature, TemperatureResult } from '../../entities/Temperature';
import { DataService } from '../../services/dataService/data.service';
import { MappingService } from '../../services/mappingService/mapping.service';
import { StoreService } from '../../services/storeService/store.service';
import { ConstantsService } from '../../services/constantsService/constants.service';
import { Router } from '@angular/router';
import { PAGES } from '../app-routing.module';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {
    @Input()
    city: City;

    @Input()
    historic: boolean;

    @Input()
    tempValues: Temperature;

    temperature: Temperature;

    loading: boolean;

    constructor(private dataService: DataService,
        private mappingService: MappingService,
        private storeService: StoreService,
        private router: Router) {
    }

    getTemperature() {
        this.loading = true;
        this.dataService.getTemperature(this.city).subscribe((data) => {
            this.temperature = this.mappingService.mapTemperature(data as TemperatureResult);
            this.storeService.addTemperature(this.temperature);
            console.log("store", this.storeService.getStore());
            setTimeout(() => {
                this.loading = false;
            }, ConstantsService.TIMEOUT);
        }, (err) => {
            console.log("error", err);
            this.loading = false;
        });
    }

    ngOnInit() {
        this.temperature = new Temperature();
        if (!this.historic) {
            this.getTemperature();
            setInterval(this.getTemperature.bind(this), ConstantsService.INTERVAL);
        } else {
            this.temperature.copyTemperature(this.tempValues);
        }
    }

    goToHistoric() {
        this.router.navigate([PAGES.HISTORIC + `/${this.city}`]);
    }
}
