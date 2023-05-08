import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenefitsRoutingModule } from './benefits-routing.module';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TreatmentComponent
  ],
  imports: [
    CommonModule,
    BenefitsRoutingModule,
    SharedModule
  ]
})
export class BenefitsModule { }
