import { Component } from '@angular/core';
interface FAQ {

  question: string ;
  answer: string ;
  open: boolean ;
  }
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {

  
  faqs: FAQ[] = [
    {
      question: 'How do I place an order?',
      answer: 'Simply go to the "Place Order" section, choose your items, fill in your details, and submit!',
      open: false
    },
    {
      question: 'Do you offer home delivery?',
      answer: 'Yes, we offer fast and safe home delivery across the city.',
      open: false
    },
    {
      question: 'Can I customize my order?',
      answer: 'Yes! Just add any custom instructions in the "Additional Notes" section when placing your order.',
      open: false
    },
    {
      question: 'What are your working hours?',
      answer: 'We’re open daily from 10 AM to 11 PM.',
      open: false
    }
  ];

  toggle(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }

}
