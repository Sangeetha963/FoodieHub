import { Component } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent {
  features = [
    {
      image: 'assets/icons/fresh.png',
      title: 'Fresh Ingredients',
      description: 'We source locally and cook daily for that just-made taste.',
      delay: '0'
    },
    {
      image: 'assets/icons/delivery.jpg',
      title: 'Fast Delivery',
      description: 'Hot meals delivered to your doorstep in under 30 minutes.',
      delay: '0.2'
    },
    {
      image: 'assets/icons/chief.jpg',
      title: 'Expert Chefs',
      description: 'Meals designed by award-winning chefs with love and skill.',
      delay: '0.4'
    }
  ];
}
