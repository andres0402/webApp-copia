import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Sparepart } from 'src/app/models/products/sparepart/sparepart';
import { InventoryService } from 'src/app/shared/services/inventoryService/inventory.service';

@Component({
  selector: 'app-spareparts-management',
  templateUrl: './spareparts-management.component.html',
  styleUrls: ['./spareparts-management.component.sass']
})
export class SparepartsManagementComponent {
  constructor(private inventoryService: InventoryService,
    private formBuilder: FormBuilder) { }

  sparePartsList: Sparepart[] = [];
  sparePartInfo: Sparepart = new Sparepart(0, "", "", "", 0, 0, 0, "", "");
  labels: string[] = [];


  createLayoutActivate: boolean = false;
  updateLayoutActivate: boolean = false;
  formButtonLayoutTitle: string = '';

  createSparePartForm = this.formBuilder.group({
    name: "",
    brand: "",
    description: "",
    serial: 0,
    price: 0,
    stock: 0,
    photoUrl: "",
    state: ""
  });


  ngOnInit(): void {
    this.labels = Sparepart.describe();
    this.inventoryService.getAllSpare().subscribe(data => { this.sparePartsList = data })
  }

  launchCreateFormLayout() {
    this.createLayoutActivate = true;
    this.formButtonLayoutTitle = "Crear repuesto"
  }

  closeInputFormLayout() {
    this.createLayoutActivate = false;
    this.updateLayoutActivate = false;
    this.sparePartInfo = new Sparepart(0, "", "", "", 0, 0, 0, "", "");
    this.createSparePartForm.reset();
  }

  selectedSparePart(sparepart: Sparepart): void {
    this.updateLayoutActivate = true;
    this.formButtonLayoutTitle = "Actualizar repuesto"
    this.sparePartInfo = sparepart;
  }

  onSumbit(): void {
    let name: string = '' + this.createSparePartForm.value.name;
    let brand: string = '' + this.createSparePartForm.value.brand;
    let description: string = '' + this.createSparePartForm.value.description;
    let serial: Number = <Number>this.createSparePartForm.value.serial;
    let price: Number = <Number>this.createSparePartForm.value.price;
    let stock: Number = <Number>this.createSparePartForm.value.stock;
    let photoUrl: string = '' + this.createSparePartForm.value.photoUrl;
    let state: string = '' + this.createSparePartForm.value.state;



    if (this.updateLayoutActivate) {
      let sparepart = new Sparepart(this.sparePartInfo.id, name, brand, description, serial, price, stock, photoUrl, state);
      this.updateSparePart(sparepart);
    }
    if (this.createLayoutActivate) {
      let sparepart = new Sparepart(0, name, brand, description, serial, price, stock, photoUrl, state);
      this.createSparePart(sparepart);
    }
  }


  createSparePart(sparepart: Sparepart): void {
    this.inventoryService.createSpare(sparepart).subscribe(data => { console.log(data) })
  }

  updateSparePart(sparepart: Sparepart): void {
    this.inventoryService.updateSpare(sparepart);
  }

  deleteSparePart(id: Number): void {
    this.sparePartsList = this.sparePartsList.filter(sparepart => sparepart.id != id);
    this.inventoryService.deleteSpare(id).subscribe(data => console.log(data));
  }


}
