import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sparepart } from 'src/app/models/products/sparepart/sparepart';
import { Car } from 'src/app/models/products/vehicle/car';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  baseUrl = "http://10.43.101.134/inventory/";
  constructor(private http: HttpClient) {}

  getAllCar(): Observable<Car[]>{
      return this.http.get<Car[]>(this.baseUrl + "vehicle/cars")
  }

  getAllSpare(): Observable<Sparepart[]>{
      return this.http.get<Sparepart[]>(this.baseUrl + "spareParts")
  }

  getCarId(id: string): Observable<Car>{
      return this.http.get<Car>(this.baseUrl + "vehicle/car/" + id.toString())
  }

  getSpareId(id: string): Observable<Sparepart>{
      return this.http.get<Sparepart>(this.baseUrl + "spareParts/" + id.toString())
  }
}
