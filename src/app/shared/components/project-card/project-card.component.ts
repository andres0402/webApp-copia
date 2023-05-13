import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.sass']
})

export class ProjectCardComponent{
  
  @Input() project: Project | undefined;
  
}