import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent {
  ingredients = [
    {
      name: 'Fresh Tomatoes',
      image: 'assets/icons/tomato.png',
      description: 'Picked daily to ensure vibrant flavor and rich color in every bite.'
    },
    {
      name: 'Organic Basil',
      image: 'assets/icons/basil.png',
      description: 'Handpicked leaves from organic farms to add a fresh herbal touch.'
    },
    {
      name: 'Mozzarella Cheese',
      image: 'assets/icons/cheese.png',
      description: 'Creamy and stretchy cheese that melts perfectly into our recipes.'
    }
  ];
}
