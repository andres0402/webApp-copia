import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/models/meeting/meeting';
import { AppointmentService } from 'src/app/shared/services/appointmentService/appointment.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.sass']
})

export class MeetingsComponent implements OnInit {

  events: Meeting[] = [];

  constructor(private meetingService: AppointmentService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.meetingService.eventList().subscribe(
      data => {
        this.events = data;
      }
    );
  }

}
