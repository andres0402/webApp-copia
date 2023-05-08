import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementScreenComponent } from './components/management-screen/management-screen.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { VehiclesManagementComponent } from './components/vehicles-management/vehicles-management.component';
import { SparepartsManagementComponent } from './components/spareparts-management/spareparts-management.component';
import { ServicesManagementComponent } from './components/services-management/services-management.component';
import { EventsManagementComponent } from './components/events-management/events-management.component';
import { AppointmentManagementComponent } from './components/appointment-management/appointment-management.component';
import { ProjectsManagementComponent } from './components/projects-management/projects-management.component';
import { BranchesManagementComponent } from './components/branches-management/branches-management.component';

const routes: Routes = [
  {path: '', component: ManagementScreenComponent, children:[
    {path: 'userManagement', component: UserManagementComponent},
    {path: 'vehiclesManagement', component: VehiclesManagementComponent},
    {path: 'sparepartsManagement', component: SparepartsManagementComponent},
    {path: 'servicesManagement', component: ServicesManagementComponent},
    {path: 'eventsManagement', component: EventsManagementComponent},
    {path: 'appointmentManagement', component: AppointmentManagementComponent},
    {path: 'projectsManagement', component: ProjectsManagementComponent},
    {path: 'branchesManagement', component: BranchesManagementComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
