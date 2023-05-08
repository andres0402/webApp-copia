import { Component } from '@angular/core';

@Component({
  selector: 'app-services-management',
  templateUrl: './services-management.component.html',
  styleUrls: ['./services-management.component.sass'],
})
export class ServicesManagementComponent {
  labels: string[] = [
    'ID',
    'Sucursal',
    'Nombre',
    'Duracion (mins)',
    'Precio',
    'Tipo de servico',
    'Acciones'
  ];

  createLayoutActivate: boolean = false;

  launchCreateFormLayout() {
    this.createLayoutActivate = true;
  }

  closeInputFormLayout() {
    this.createLayoutActivate = false;
  }

}
