import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/projects-list'},
  {path: 'projects-list', component: ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectsRoutingModule { }
