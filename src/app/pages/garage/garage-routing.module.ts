import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarageComponent } from './garage.component';

const routes: Routes = [
  {
    path: '',
    component: GarageComponent,
    children: [
      {
        path:'voiture',
        loadChildren: () => import('./voiture/voiture.module').then( m => m.VoitureModule )
      },
      {
        path: '',
        redirectTo: 'voiture',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarageRoutingModule { }
