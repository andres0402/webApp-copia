import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/products/vehicle/car';
import { InventoryService } from 'src/app/shared/services/inventoryService/inventory.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.sass']
})

export class VehiclesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private productsService: InventoryService) { }

  vehiclesList: Car[] = [];
  vehicles: Car[] = [];
  brands: string[] = [];
  types: string[] = [];
  years: String[] = [];

  priceForm = this.formBuilder.group({
    maxPrice: '',
    minPrice: ''
  });

  ngOnInit(): void {
    this.productsService.getAllCar().subscribe(data => {
      this.vehiclesList = data;
      this.vehicles = this.vehiclesList;
      this.getFilterParameters();
    });

    this.routeParamsListener();
    console.log(this.vehiclesList)
  }

  routeParamsListener() {
    this.route.queryParams.subscribe(params => {
      this.vehiclesList = this.vehicles;
      if (params["brand"]) this.filterByBrand(params["brand"]);
      if (params["year"]) this.filterByYear(params["year"]);
      if (params["type"]) this.filterByType(params["type"]);
      if (params["max"] || params["min"]) this.filterByPrice(params["max"], params["min"]);
    });
  }

  onSumbit(): void {
    this.router.navigate(['/products/vehicles'], { queryParams: { max: this.priceForm.value.maxPrice, min: this.priceForm.value.minPrice } });
  }

  getFilterParameters() {
    this.brands = [...new Set(this.vehiclesList.map((x) => x.brand))]
    this.years = [...new Set(this.vehiclesList.map((x) => x.model))]
    this.types = [...new Set(this.vehiclesList.map((x) => x.type))]
  }

  filterByBrand(brand: string): void {
    this.vehiclesList = this.vehiclesList.filter(car => car.brand == brand);
  }

  filterByType(type: string): void {
    this.vehiclesList = this.vehiclesList.filter(car => car.type == type);
  }

  filterByPrice(maxPrice: Number, minPrice: Number): void {
    if (maxPrice == 0 && minPrice != 0) maxPrice = Infinity;
    this.vehiclesList = this.vehiclesList.filter(car => car.price >= minPrice && car.price <= maxPrice);
  }

  filterByYear(year: Number): void {
    this.vehiclesList = this.vehiclesList.filter(car => car.year == year);
  }
}