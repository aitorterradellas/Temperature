import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureComponent } from '../temperature/temperature.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TemperatureComponent],
  imports: [
      CommonModule,
      IonicModule
    ],
    exports: [
        TemperatureComponent
    ]
})
export class ComponentsModule { }
