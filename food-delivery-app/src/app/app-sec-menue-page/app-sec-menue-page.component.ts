import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-app-sec-menue-page',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './app-sec-menue-page.component.html',
  styleUrls: ['./app-sec-menue-page.component.css']
})
export class AppSecMenuePageComponent {
  apps = [
    { name: 'Uber Eats', image: 'https://via.placeholder.com/100x50?text=UberEats' },
    { name: 'Grubhub', image: 'https://via.placeholder.com/100x50?text=Grubhub' },
    { name: 'Postmates', image: 'https://via.placeholder.com/100x50?text=Postmates' },
    { name: 'DoorDash', image: 'https://via.placeholder.com/100x50?text=DoorDash' },
    { name: 'FoodPanda', image: 'https://via.placeholder.com/100x50?text=FoodPanda' },
    { name: 'Instacart', image: 'https://via.placeholder.com/100x50?text=Instacart' },
    { name: 'Just Eat', image: 'https://via.placeholder.com/100x50?text=JustEat' },
    { name: 'Deliveroo', image: 'https://via.placeholder.com/100x50?text=Deliveroo' },
    { name: 'DiDi Food', image: 'https://via.placeholder.com/100x50?text=DiDiFood' }
  ];
}

