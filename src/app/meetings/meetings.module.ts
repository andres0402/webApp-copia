import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsRoutingModule } from './meetings-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MeetingsComponent } from './components/meetings/meetings.component'

@NgModule({
  declarations: [
    MeetingsComponent
  ],
  imports: [
    CommonModule,
    MeetingsRoutingModule,
    SharedModule
  ]
})

export class MeetingsModule { }
