import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from 'src/app/models/products/vehicle/car';
import { InventoryService } from 'src/app/shared/services/inventoryService/inventory.service';

@Component({
  selector: 'app-vehicles-management',
  templateUrl: './vehicles-management.component.html',
  styleUrls: ['./vehicles-management.component.sass'],
})
export class VehiclesManagementComponent implements OnInit {

  constructor(private inventoryService: InventoryService,
    private formBuilder: FormBuilder) { }

  carList: Car[] = [];
  carInfo: Car = new Car(0, "", "", "", "", "", 0, "", 0, "", "", 0);
  labels: string[] = [];
  createLayoutActivate: boolean = false;
  updateLayoutActivate: boolean = false;
  formButtonLayoutTitle: string = '';

  createCarForm = this.formBuilder.group({
    exemplar: "",
    type: "",
    brand: "",
    color: "",
    plate: "",
    price: 0,
    model: "",
    kilometers: 0,
    description: "",
    photoUrl: "",
    doors: 0
  });


  ngOnInit(): void {
    this.labels = Car.describe();
    let car: Car = new Car(1, "Audi Q4", "Camioneta", "Audi", "Rojo", "UET-508", 10000000, "2020", 70000, "Audi A4 es una serie de automóviles de turismo de lujo del segmento D producido por el fabricante alemán Audi desde el año 1994.", "", 2);
    let car2: Car = new Car(2, "Mercedes", "Camioneta", "Mercedes", "Verde", "UET-473", 15000000, "2023", 1000, " de lujo del segmento D producido por el fabricante alemán Audi desde el año 1994.", "", 4);
    this.carList.push(car);
    this.carList.push(car2);
    this.carList.push(car);
    this.carList.push(car);
    //this.inventoryService.getAllCar().subscribe(data => { this.carList = data })
  }

  launchCreateFormLayout() {
    this.createLayoutActivate = true;
    this.formButtonLayoutTitle = "Crear vehiculo"
  }

  closeInputFormLayout() {
    this.createLayoutActivate = false;
    this.updateLayoutActivate = false;
    this.carInfo = new Car(0, "", "", "", "", "", 0, "", 0, "", "", 0);
    this.createCarForm.reset();
  }

  selectedCar(car: Car): void {
    this.updateLayoutActivate = true;
    this.formButtonLayoutTitle = "Actualizar vehiculo"
    this.carInfo = car;
  }

  onSumbit(): void {

    console.log("hola")
    let exemplar: string = '' + this.createCarForm.value.exemplar;
    let type: string = '' + this.createCarForm.value.type;
    let brand: string = '' + this.createCarForm.value.brand;
    let color: string = '' + this.createCarForm.value.color;
    let plate: string = '' + this.createCarForm.value.plate;
    let price: Number = <Number>this.createCarForm.value.price;
    let model: string = '' + this.createCarForm.value.model;
    let kilometers: Number = <Number>this.createCarForm.value.kilometers;
    let description: string = '' + this.createCarForm.value.description;
    let photoUrl: string = '' + this.createCarForm.value.photoUrl;
    let doors: Number = <Number>this.createCarForm.value.doors;


    if (this.updateLayoutActivate) {
      let car = new Car(this.carInfo.id, exemplar, type, brand, color, plate, price, model, kilometers, description, photoUrl, doors);
      this.updateCar(car);
    }
    if (this.createLayoutActivate) {
      let car: Car = new Car(0, exemplar, type, brand, color, plate, price, model, kilometers, description, photoUrl, doors);
      this.createCar(car);
    }
  }


  createCar(car: Car): void {
    console.log("si")
  }

  updateCar(car: Car): void {
    this.inventoryService.updateCar(car);
  }

  deleteCar(id: Number): void {
    this.carList = this.carList.filter(car => car.id != id);
    this.inventoryService.deleteCar(id).subscribe(data => console.log(data));
  }








}
