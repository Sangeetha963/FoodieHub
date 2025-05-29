import { Component } from '@angular/core';

@Component({
  selector: 'app-awards-recognition',
  templateUrl: './awards-recognition.component.html',
  styleUrls: ['./awards-recognition.component.scss']
})
export class AwardsRecognitionComponent {
  awards = [
    {
      title: 'Best Food Delivery 2024',
      year: 'Awarded by FoodieTimes',
      image: 'assets/icons/best-delivery.png'
    },
    {
      title: 'Top Chef Award',
      year: 'Recognized by Culinary Arts Association',
      image: 'assets/icons/top-chef.png'
    },
    {
      title: 'Customer Choice Award',
      year: 'Voted Best in City 2023',
      image: 'assets/icons/customer-choice.png'
    }
  ];
}
