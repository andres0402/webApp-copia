import { Component } from '@angular/core';

@Component({
  selector: 'app-branches-management',
  templateUrl: './branches-management.component.html',
  styleUrls: ['./branches-management.component.sass']
})
export class BranchesManagementComponent {
  labels: string[] = ['ID Taller', 'Nombre', 'Ciudad', 'Tipo', 'Acciones']
  createLayoutActivate: boolean = false;


  launchCreateFormLayout(){
    this.createLayoutActivate = true;
  }

  closeInputFormLayout(){
    this.createLayoutActivate = false;
  }

}
