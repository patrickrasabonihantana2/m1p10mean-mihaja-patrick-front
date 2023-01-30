import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoitureRoutingModule } from './voiture-routing.module';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureAddComponent } from './voiture-add/voiture-add.component';


@NgModule({
  declarations: [
    VoitureListComponent,
    VoitureAddComponent
  ],
  imports: [
    CommonModule,
    VoitureRoutingModule
  ]
})
export class VoitureModule { }
