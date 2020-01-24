import { Component, OnInit } from '@angular/core';
import { City } from '../../entities/City';
import { StoreService } from '../../services/storeService/store.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    cities: City[] = Object.keys(City).map(key => City[key]);

    constructor(private storeService: StoreService) { }

    ngOnInit() {
        //this.storeService.resetStore();
    }
}
