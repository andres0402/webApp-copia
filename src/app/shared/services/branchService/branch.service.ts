import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Taller } from 'src/app/models/branches/taller';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) { }

  baseUrl= 'http://10.43.101.134/talleres/api/talleres'

  getAllBranches(): Observable<Taller[]>{
    return this.http.get<Taller[]>(this.baseUrl);
  }

  deteleTaller(id: Number): Observable<any>{
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }

  getTallerId(id: Number){
    return this.http.delete<Taller>(this.baseUrl + '/' + id);
  }

  createTaller(taller: Taller): Observable<Taller>{
    return this.http.post<Taller>(this.baseUrl, taller);
  }

  updateTaller(id: Number, taller: Taller): Observable<Taller>{
    return this.http.put<Taller>(this.baseUrl + '/' +id, taller);
  }

}
