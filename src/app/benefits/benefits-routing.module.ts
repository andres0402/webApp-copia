import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentComponent } from './components/treatment/treatment.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/services'},
  {path: 'services', component: TreatmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BenefitsRoutingModule { }
