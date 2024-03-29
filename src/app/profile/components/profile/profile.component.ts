import { Component } from '@angular/core';



interface User {
  name: string;
  jobTitle: string;
  pictureUrl: string;
  email: string;
  phone: string;
  address: string;
  aboutMe: string;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
  user: User = {
    name: 'Lionel Messi',
    jobTitle: 'Striker',
    pictureUrl: 'https://cdn.mundialeros.com/wp-content/uploads/2022/12/messsi-1.jpg',
    email: 'messi10@yopmail.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown USA',
    aboutMe: 'I am a striker for Inter Miami and the Argentina national team. I am considered the world\'s most expensive player from a transfer value perspective by the CIES. I am known for my finishing, dribbling, and speed.'
  };
}
