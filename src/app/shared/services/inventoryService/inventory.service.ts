import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sparepart } from 'src/app/models/products/sparepart/sparepart';
import { Car } from 'src/app/models/products/vehicle/car';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  baseUrl = "http://10.43.101.134/inventory/";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  getAllCar(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl + "vehicle/cars")
  }

  getAllSpare(): Observable<Sparepart[]> {
    return this.http.get<Sparepart[]>(this.baseUrl + "spareParts")
  }

  getCarId(id: string): Observable<Car> {
    return this.http.get<Car>(this.baseUrl + "vehicle/car/" + id.toString())
  }

  getSpareId(id: string): Observable<Sparepart> {
    return this.http.get<Sparepart>(this.baseUrl + "spareParts/" + id.toString())
  }

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.baseUrl + "vehicle/car", car, this.httpOptions)
  }

  createSpare(sparePart: Sparepart): Observable<Sparepart> {
    return this.http.post<Sparepart>(this.baseUrl + "spareParts", sparePart, this.httpOptions)
  }

  updateCar(car: Car) {
    return this.http.put(this.baseUrl + "vehicle/car/" + car.id, car, this.httpOptions);
  }


  updateSpare(sparePart: Sparepart) {
    return this.http.put(this.baseUrl + "spareParts/" + sparePart.id, sparePart, this.httpOptions);
  }

  deleteCar(id: Number) {
    return this.http.delete(this.baseUrl + "vehicle/car/" + id.toString());
  }

}
