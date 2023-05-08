import { Component, Input, OnInit } from '@angular/core';
import { Sparepart } from 'src/app/models/products/sparepart/sparepart';
import { Car } from 'src/app/models/products/vehicle/car';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})

export class ProductCardComponent{
  
  @Input() vehicle: Car | undefined;
  @Input() sparepart: Sparepart | undefined;
  
}