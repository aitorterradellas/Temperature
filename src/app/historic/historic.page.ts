import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../entities/City';
import { StoreService } from '../../services/storeService/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Temperature } from '../../entities/Temperature';
import { PAGES } from '../app-routing.module';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.page.html',
  styleUrls: ['./historic.page.scss'],
})
export class HistoricPage implements OnInit {
    city: City;  
    list: Temperature[];

    constructor(private storeService: StoreService,
        private route: ActivatedRoute,
        private router: Router) {
        this.route.params.subscribe(params => {
            this.city = params.city;
        });
    }

    ngOnInit() {
       this.list = this.storeService.getByCity(this.city).list;
    }

    goBack() {
        this.router.navigate([PAGES.HOME]);
    }

}
