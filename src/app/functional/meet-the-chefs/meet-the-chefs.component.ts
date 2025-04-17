import { Component } from '@angular/core';

@Component({
  selector: 'app-meet-the-chefs',
  templateUrl: './meet-the-chefs.component.html',
  styleUrls: ['./meet-the-chefs.component.scss']
})
export class MeetTheChefsComponent {
  chefs = [
    {
      name: 'Chef Antonio Rossi',
      specialty: 'Italian Cuisine',
      // image: 'assets/chefs/antonio.jpg',
      quote: 'Cooking is an art, and every plate is a canvas.'
    },
    {
      name: 'Chef Priya Mehra',
      specialty: 'Indian Spices Expert',
      // image: 'assets/chefs/priya.jpg',
      quote: 'Spices are the heart of every great dish.'
    },
    {
      name: 'Chef James Carter',
      specialty: 'American Grills',
      // image: 'assets/chefs/james.jpg',
      quote: 'Grill it right, serve it hot!'
    }
  ];
}
