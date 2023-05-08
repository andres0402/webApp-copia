import { Sparepart } from 'src/app/models/products/sparepart/sparepart';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/shared/services/inventoryService/inventory.service';

@Component({
  selector: 'app-spareparts',
  templateUrl: './spareparts.component.html',
  styleUrls: ['./spareparts.component.sass']
})

export class SparepartsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private productsService: InventoryService) { }

  sparepartList: Sparepart[] = [];
  spareparts: Sparepart[] = [];
  brands: string[] = [];
  branchs: string[] = [];

  priceForm = this.formBuilder.group({
    maxPrice: '',
    minPrice: ''
  });

  availableForm = this.formBuilder.group({
    maxAvailable: ''
  });

  ngOnInit(): void {
    this.productsService.getAllSpare().subscribe(data => {
      this.sparepartList = data;
      this.spareparts = this.sparepartList;
      this.getFilterParameters();
    });

    this.routeParamsListener();
  }

  routeParamsListener(){
    this.route.queryParams.subscribe(params => {
        this.sparepartList = this.spareparts;
        if (params["brand"]) this.filterByBrand(params["brand"])
        if (params["max"] || params["min"]) this.filterByPrice(params["max"], params["min"]);  
        if (params["maxAvailable"]) this.filterByAvailable(params["maxAvailable"]);  
      });
  }

  onSumbitPrice(): void {
    this.router.navigate(['/products/spareparts'], { queryParams: { max: this.priceForm.value.maxPrice, min: this.priceForm.value.minPrice }});
  }

  onSumbitAvailable(): void {
    this.router.navigate(['/products/spareparts'], { queryParams: { maxAvailable: this.availableForm.value.maxAvailable }});
  }

  getFilterParameters(){
    this.brands = [...new Set(this.sparepartList.map((x) => x.brand))]
  }

  filterByBrand(brand: string): void {
    this.sparepartList = this.sparepartList.filter(sparepart => sparepart.brand == brand);
  }

  filterByPrice(maxPrice: Number, minPrice: Number): void {
    if (maxPrice == 0 && minPrice != 0) maxPrice = Infinity;
    this.sparepartList = this.sparepartList.filter(sparepart => sparepart.price >= minPrice && sparepart.price <= maxPrice);
  }

  filterByAvailable(maxAvailable: Number): void {
    if (maxAvailable == 0) maxAvailable = Infinity;
    this.sparepartList = this.sparepartList.filter(sparepart => sparepart.stock <= maxAvailable);
  }

/*
  constructor(private productsService: ProductsService) {}

  
  sparepartsList: Sparepart[] = [];
  
  
  ngOnInit() {
    

    /*this.productsService.getAllSpare().subscribe(
      data=>{this.sparepartsList = data}
    )*/

    //PARA PROBAR LA PANTALLA
    /*let spare1: Sparepart = new Sparepart(1, "Rodamientos", "el rodamiento", 128, 20000, 400, "https://www.serviasistenciaexpress.com/wp-content/uploads/2018/03/repuestos-originales-para-vehiculos-autos-motos.jpg");
    let spare2: Sparepart = new Sparepart(2, "Suspension", "el rodamiento", 12, 20000, 400, "https://www.semana.com/resizer/7OHB3VjEk3u5h0zRKZv9LISWft8=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/TGRSOEBYT5GJPAMX632CNF4ZAE.jpg");
    let spare3: Sparepart = new Sparepart(3, "Frenos", "el rodamiento", 50, 20000, 400, "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2016/06/piezas-motor-380x285.jpg");
    let spare4: Sparepart = new Sparepart(3, "Aceite", "el rodamiento", 8, 20000, 400, "https://autoamerica.com.co/wp-content/uploads/2020/07/repuetos-imgprin-1024x887.jpg");

    this.sparepartsList.push(spare1);
    this.sparepartsList.push(spare2);
    this.sparepartsList.push(spare3);
    this.sparepartsList.push(spare4);
  }
*/

}