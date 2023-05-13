import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from 'src/app/models/meeting/meeting';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient: HttpClient) { }

  eventURL =  'http://10.43.101.134/events/event';

  public eventList(): Observable<Meeting[]>{
      return this.httpClient.get<Meeting[]>(this.eventURL)
  }
}
