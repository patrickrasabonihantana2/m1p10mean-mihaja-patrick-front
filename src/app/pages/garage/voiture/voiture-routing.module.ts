import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureAddComponent } from './voiture-add/voiture-add.component';

const routes: Routes = [
  {
    path: '',
    component: VoitureListComponent
  },
  {
    path: 'add',
    component: VoitureAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoitureRoutingModule { }
