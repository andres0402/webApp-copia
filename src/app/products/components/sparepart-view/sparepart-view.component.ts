import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sparepart } from 'src/app/models/products/sparepart/sparepart';
import { InventoryService } from 'src/app/shared/services/inventoryService/inventory.service';

@Component({
  selector: 'app-sparepart-view',
  templateUrl: './sparepart-view.component.html',
  styleUrls: ['./sparepart-view.component.sass']
})
export class SparepartViewComponent implements OnInit{

  sparepart: Sparepart | undefined;

  constructor(private route: ActivatedRoute, private productsService: InventoryService) { }

  ngOnInit(): void {
    this.productsService.getSpareId(this.route.snapshot.paramMap.get('id')!).subscribe(data => {
      this.sparepart = data;
    })
  }
}
