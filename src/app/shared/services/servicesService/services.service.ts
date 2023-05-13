import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/benefits/service';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://10.43.101.134/services/services';

  getAllService(): Observable<Service[]> {
    return this.http.get<Service[]>(this.baseUrl);
  }

  deleteService(id: Number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
  getServiceId(id: Number) {
    return this.http.get<Service>(this.baseUrl + '/' + id);
  }
  createService(service: Service): Observable<Service> {
    return this.http.post<Service>(this.baseUrl, service);
  }
  updateService(id: Number, service: Service): Observable<Service> {
    return this.http.put<Service>(this.baseUrl + '/' + id, service);
  }
}
