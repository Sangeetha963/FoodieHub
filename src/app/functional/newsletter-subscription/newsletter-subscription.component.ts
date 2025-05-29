import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter-subscription',
  templateUrl: './newsletter-subscription.component.html',
  styleUrls: ['./newsletter-subscription.component.scss']
})
export class NewsletterSubscriptionComponent {
  email: string = '';
  successMessage: string = '';

  subscribe() {
    if (this.email) {
      // In a real app: call API here
      this.successMessage = 'Thank you for subscribing!';
      this.email = '';
    }
  }
}
