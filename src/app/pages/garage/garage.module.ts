import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GarageRoutingModule } from './garage-routing.module';
import { GarageComponent } from './garage.component';


@NgModule({
  declarations: [
    GarageComponent
  ],
  imports: [
    CommonModule,
    GarageRoutingModule
  ]
})
export class GarageModule { }
