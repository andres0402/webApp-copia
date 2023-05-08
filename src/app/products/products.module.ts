import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SparepartsComponent } from './components/spareparts/spareparts.component';
import { VehiclesViewComponent } from './components/vehicles-view/vehicles-view.component';
import { SparepartViewComponent } from './components/sparepart-view/sparepart-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VehiclesComponent,
    SparepartsComponent,
    VehiclesViewComponent,
    SparepartViewComponent,

  ],

  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})

export class ProductsModule { }
