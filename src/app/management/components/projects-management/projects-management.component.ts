import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project/project';
import { ProjectService } from 'src/app/shared/services/projectService/project.service';

@Component({
  selector: 'app-projects-management',
  templateUrl: './projects-management.component.html',
  styleUrls: ['./projects-management.component.sass']
})
export class ProjectsManagementComponent {

  labels: string[] = ['ID', 'Título', 'Fecha inicio', 'Fecha finalización', 'Tipo', 'Estado', 'Acciones']
  createLayoutActivate: boolean = false;
  createLayoutUpdate: boolean = false;
  hide: boolean = false;
  ind: Number = -1;
  currentState: String = "";
  currentType: String = "";
  listProjects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
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
      },
        error => {
          console.error(error);
        }
    );
  }

  createProject(title: HTMLInputElement, description: HTMLTextAreaElement, initial: HTMLInputElement, final: HTMLInputElement, status: HTMLSelectElement, type: HTMLSelectElement, user: HTMLInputElement){
    this.projectService.createProject(title, description, initial, final, status, type, user).subscribe(
      data => {
        console.log(data);
      },
        error => {
          console.error(error);
        }
    );

    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


  updateProject(id: HTMLParagraphElement, title: HTMLInputElement, description: HTMLTextAreaElement, initial: HTMLInputElement, final: HTMLInputElement, status: HTMLSelectElement, type: HTMLSelectElement, user: HTMLInputElement){
    this.projectService.updateProject(parseInt(id.innerText), title, description, initial, final, status, type, user).subscribe(
      data => {
        console.log(data);
      },
        error => {
          console.error(error);
        }
    );

    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }



  deleteProject(input: HTMLParagraphElement){
    this.projectService.deleteProjectById(parseInt(input.innerText)).subscribe(
      data => {
        console.log(data);
      },
        error => {
          console.error(error);
        }
    );

    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  
  }

  launchCreateFormLayout(){
    this.createLayoutActivate = true;
  }

  closeInputFormLayout(){
    this.createLayoutActivate = false;
  }

  setCurrentIndex(index: Number, state: string, type: string, idProject: HTMLParagraphElement, titleProject: HTMLParagraphElement, idateProject: HTMLParagraphElement, fdateProject: HTMLParagraphElement, typeProject: HTMLParagraphElement, statusProject: HTMLParagraphElement){
    this.ind = index;

    this.createLayoutUpdate = true;
    this.currentState = state;
    this.currentType = type;
    idProject.style.color = "white";
    titleProject.style.color = "white";
    idateProject.style.color = "white";
    fdateProject.style.color = "white";
    typeProject.style.color = "white";
    statusProject.style.color = "white";
  }

  closeUpdate(idProject: HTMLParagraphElement, titleProject: HTMLParagraphElement, idateProject: HTMLParagraphElement, fdateProject: HTMLParagraphElement, typeProject: HTMLParagraphElement, statusProject: HTMLParagraphElement){
    this.createLayoutUpdate = false;
    idProject.style.color = "black";
    titleProject.style.color = "black";
    idateProject.style.color = "black";
    fdateProject.style.color = "black";
    typeProject.style.color = "black";
    statusProject.style.color = "black";
  }

  setAtributes(idProject: HTMLParagraphElement, titleProject: HTMLParagraphElement, idateProject: HTMLParagraphElement, fdateProject: HTMLParagraphElement, typeProject: HTMLParagraphElement, statusProject: HTMLParagraphElement){
    idProject.style.color = "black";
    titleProject.style.color = "black";
    idateProject.style.color = "black";
    fdateProject.style.color = "black";
    typeProject.style.color = "black";
    statusProject.style.color = "black";
    return "";

  }


}
