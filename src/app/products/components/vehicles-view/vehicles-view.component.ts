import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/products/vehicle/car';
import { InventoryService } from 'src/app/shared/services/inventoryService/inventory.service';

@Component({
  selector: 'app-vehicles-view',
  templateUrl: './vehicles-view.component.html',
  styleUrls: ['./vehicles-view.component.sass']
})

export class VehiclesViewComponent implements OnInit {

  vehicle: Car | undefined;

  constructor(private route: ActivatedRoute, private productsService: InventoryService) { }

  ngOnInit(): void {
    this.productsService.getCarId(this.route.snapshot.paramMap.get('id')!).subscribe(data => {
      this.vehicle = data;
    })
  }
  
}
