import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project/project';
import { ProjectService } from 'src/app/shared/services/projectService/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})

export class ProjectsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private projectService: ProjectService) { }

  listProjects: Project[] = [];
  projects: Project[] = [];
  types: string[] = ["modificacion", "reparacion"];
  status: string[] = ["iniciado", "en desarrollo", "finalizado"];

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      
      data => {
        this.listProjects = data.projects.map((project: any) => ({
         
          id: project.id,
          title: project.title,
          project_description: project.project_description,
          initial_date: project.initial_date,
          final_date: project.final_date,
          project_status: project.project_status,
          project_type: project.project_type,
          user_id: project.user_id,
        }));

        this.projects = data.projects.map((project: any) => ({
         
          id: project.id,
          title: project.title,
          project_description: project.project_description,
          initial_date: project.initial_date,
          final_date: project.final_date,
          project_status: project.project_status,
          project_type: project.project_type,
          user_id: project.user_id,
        }));
      },
        error => {
          console.error(error);
        }
    );

    this.routeParamsListener();

  }

  routeParamsListener() {
    this.route.queryParams.subscribe(params => {
      this.listProjects = this.projects;
      if (params["type"]) this.filterByType(params["type"]);
      if (params["status"]) this.filterByStatus(params["status"]);
    });
  }


  filterByStatus(status: string): void {
    this.listProjects = this.listProjects.filter(project => project.project_status == status.toLowerCase());
  }

  filterByType(type: string): void {
    this.listProjects = this.listProjects.filter(project => project.project_type == type.toLowerCase());
  }

  filterByDates(iDate: HTMLInputElement, fDate: HTMLInputElement): void {
    this.listProjects = this.projects;
    const date1 = new Date(iDate.value);
    const date2 = new Date(fDate.value);
    this.listProjects = this.listProjects.filter(project => new Date(project.initial_date) >= date1 && new Date(project.final_date) <= date2);
  }

  filterByTitle(title: HTMLInputElement): void {
    this.listProjects = this.projects;
    this.listProjects = this.listProjects.filter(project => project.title.toLowerCase().includes(title.value.toLowerCase()));
  }

  filterById(id: HTMLInputElement): void {
    this.listProjects = this.projects;
    this.listProjects = this.listProjects.filter(project => project.user_id == parseInt(id.value));
  }
}