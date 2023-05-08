import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles-management',
  templateUrl: './vehicles-management.component.html',
  styleUrls: ['./vehicles-management.component.sass']
})
export class VehiclesManagementComponent {

  labels: string[] = ['ID', 'Nombre', 'Valor', 'Ejemplar', 'Marca', 'Color', 'Parametro A', 'Acciones']
  createLayoutActivate: boolean = false;

  


  launchCreateFormLayout(){
    this.createLayoutActivate = true;
  }

  closeInputFormLayout(){
    this.createLayoutActivate = false;
  }



}
