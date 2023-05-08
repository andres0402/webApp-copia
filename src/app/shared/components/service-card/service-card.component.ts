import { Component, Input } from '@angular/core';
import { Service } from 'src/app/models/benefits/service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.sass'],
})
export class ServiceCardComponent {

  @Input() service: Service | undefined;

}
