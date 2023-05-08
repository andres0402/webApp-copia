import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/benefits/service';
import { ServicesService } from 'src/app/shared/services/servicesService/services.service';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.sass'],
})
export class TreatmentComponent implements OnInit {
  // servicios: Array<Map<string, any>> = [];
  constructor(private benefitService: ServicesService) { }

  treatmentList: Service[] = [];
  selectedTreatmen: Service[] = [];
  serviceType: string[] = [];
  map = new Map();

  ngOnInit() {
    this.benefitService.getAllService().subscribe(data => {
      this.treatmentList = data;
      this.filtertypes()
    })
  }

  filtertypes(): void {
    console.log(this.treatmentList)
    this.serviceType = [...new Set(this.treatmentList.map((x) => x.servicioType))]

    let map = new Map();
    let services = this.treatmentList;

    console.log("tipos: ", this.serviceType);

    this.serviceType.forEach(function (value) {
      let type: Service[] = services.filter(x => x.servicioType == value);
      map.set(value, type);
    })

    this.map = map;
    console.log(this.map)
  }


  addSelectedService(service: Service): void {
    this.selectedTreatmen.push(service);
  }

  removeSelectedService(service: Service): void {
    this.benefitService.deleteService(service.id).subscribe();
    this.selectedTreatmen = this.selectedTreatmen.filter(x => x != service);
  }
}
