import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/benefits/service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/shared/services/servicesService/services.service';

@Component({
  selector: 'app-services-management',
  templateUrl: './services-management.component.html',
  styleUrls: ['./services-management.component.sass'],
})
export class ServicesManagementComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private serviceService: ServicesService
  ) {}

  labels: string[] = [];
  serviceList: Service[] = [];
  serviceInfo: Service = new Service(0, 0, '', 0, 0, '', '');
  createLayoutActivate: boolean = false;
  updateLayoutActivate: boolean = false;
  formButtonLayoutTitle: string = '';

  createServiceForm = this.formBuilder.group({
    sucursal: 0,
    name: '',
    duration: 0,
    price: 0,
    type: '',
    photoUrl: '',
  });

  ngOnInit(): void {
    this.labels = Service.describe();
    this.serviceService.getAllService().subscribe((data) => {
      this.serviceList = data;
    });
  }

  launchCreateFormLayout() {
    this.createLayoutActivate = true;
    this.formButtonLayoutTitle = 'Crear servicio';
  }

  closeInputFormLayout() {
    this.createLayoutActivate = false;
    this.updateLayoutActivate = false;
    this.serviceInfo = new Service(0, 0, '', 0, 0, '', '');
    this.createServiceForm.reset();
  }

  selectedService(service: Service): void {
    this.updateLayoutActivate = true;
    this.formButtonLayoutTitle = 'Actualizar servicio';
    this.serviceInfo = service;
  }
  
  updateService(id: Number,service: Service): void {

    this.serviceService.updateService(id, service);
  }

  createService(service: Service){
    this.serviceService.createService(service);
  }

  deleteService(id: Number){
    this.serviceList = this.serviceList.filter((service) => service.id != id);
    this.serviceService.deleteService(id).subscribe((data) => console.log(data))
  }

  onSubmit(): void {
    let id_sucursal: Number = <Number>this.createServiceForm.value.sucursal;
    let name: string = <string>this.createServiceForm.value.name;
    let duration: Number = <Number>this.createServiceForm.value.duration;
    let price: Number = <Number>this.createServiceForm.value.price;
    let type: string = <string>this.createServiceForm.value.type;
    let photoUrl: string = <string>this.createServiceForm.value.photoUrl;

    if(this.updateLayoutActivate) {
      let service = new Service(
        this.serviceInfo.id,
        id_sucursal,
        name,
        duration,
        price,
        photoUrl,
        type
      );
      this.updateService(this.serviceInfo.id, service);
    }

    if(this.createLayoutActivate) {
      let service = new Service(
        0,
        id_sucursal,
        name,
        duration,
        price,
        photoUrl,
        type
      );
      this.createService(service);
    }
  }
}
