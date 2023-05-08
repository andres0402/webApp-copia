import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  projectURL =  'http://localhost:8080/proyectos/';

  public getAllProjects(): Observable<any>{
      return this.httpClient.get<any>(this.projectURL + 'lista-proyectos')
  }

  public createProject(title: HTMLInputElement,  project_description: HTMLTextAreaElement, initial_date: HTMLInputElement, final_date: HTMLInputElement, project_status: HTMLSelectElement, project_type: HTMLSelectElement, user_id: HTMLInputElement){
    let dateI = new Date(initial_date.value);
    let dateFormatI = dateI.toISOString().slice(0,10);
    let dateF = new Date(final_date.value);
    let dateFormatF = dateF.toISOString().slice(0,10);

    const project = {
      title: title.value,
      project_description: project_description.value,
      initial_date: dateFormatI,
      final_date: dateFormatF,
      project_status: project_status.value.toString(),
      project_type: project_type.value.toString(),
      user_id: parseInt(user_id.value)
    }

    return this.httpClient.post(this.projectURL + 'crear-proyecto', project);
  }

  public updateProject(id: Number, title: HTMLInputElement,  project_description: HTMLTextAreaElement, initial_date: HTMLInputElement, final_date: HTMLInputElement, project_status: HTMLSelectElement, project_type: HTMLSelectElement, user_id: HTMLInputElement){
    let dateI = new Date(initial_date.value);
    let dateFormatI = dateI.toISOString().slice(0,10);
    let dateF = new Date(final_date.value);
    let dateFormatF = dateF.toISOString().slice(0,10);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const project = {
      title: title.value,
      project_description: project_description.value,
      initial_date: dateFormatI,
      final_date: dateFormatF,
      project_status: project_status.value.toString(),
      project_type: project_type.value.toString(),
      user_id: parseInt(user_id.value)
    }

    return this.httpClient.put(this.projectURL + id.toString() + '/editar', project, httpOptions);
  }

  public deleteProjectById(id: Number){
    return this.httpClient.delete(this.projectURL + id.toString() + '/eliminar')
}
}
