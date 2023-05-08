import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SparepartsComponent } from './components/spareparts/spareparts.component';
import { VehiclesViewComponent } from './components/vehicles-view/vehicles-view.component';
import { SparepartViewComponent } from './components/sparepart-view/sparepart-view.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/products/vehicles'},
  {path: 'products', children:[
    {path: 'vehicles', component: VehiclesComponent},
    {path: 'vehicles/:id', component: VehiclesViewComponent},
    {path: 'spareparts', component: SparepartsComponent},
    {path: 'spareparts/:id', component: SparepartViewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }


