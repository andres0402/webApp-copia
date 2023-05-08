import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementScreenComponent } from './components/management-screen/management-screen.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { VehiclesManagementComponent } from './components/vehicles-management/vehicles-management.component';
import { SparepartsManagementComponent } from './components/spareparts-management/spareparts-management.component';
import { ServicesManagementComponent } from './components/services-management/services-management.component';
import { EventsManagementComponent } from './components/events-management/events-management.component';
import { ProjectsManagementComponent } from './components/projects-management/projects-management.component';
import { AppointmentManagementComponent } from './components/appointment-management/appointment-management.component';
import { BranchesManagementComponent } from './components/branches-management/branches-management.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagementScreenComponent,
    UserManagementComponent,
    VehiclesManagementComponent,
    SparepartsManagementComponent,
    ServicesManagementComponent,
    EventsManagementComponent,
    ProjectsManagementComponent,
    AppointmentManagementComponent,
    BranchesManagementComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManagementModule { }
