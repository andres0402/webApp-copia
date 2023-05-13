import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { EventCardExtendedComponent } from './components/event-card-extended/event-card-extended.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    EventCardExtendedComponent,
    EventCardComponent,
    ServiceCardComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductCardComponent,
    EventCardComponent,
    EventCardExtendedComponent,
    ServiceCardComponent,
    ProjectCardComponent
  ]
})

export class SharedModule { }
