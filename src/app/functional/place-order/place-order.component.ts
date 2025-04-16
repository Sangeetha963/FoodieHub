import { Component } from '@angular/core';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent {
  bestsellers = [
    {
      title: 'Margherita Pizza',
      desc: 'Classic, cheesy, and delicious.',
      image: 'assets/icons/pizza.jpg',
      delay: '0s'
    },
    {
      title: 'Signature Burger',
      desc: 'Juicy patty with a perfect bun.',
      image: 'assets/icons/burger.jpg',
      delay: '0.2s'
    },
    {
      title: 'Spaghetti Alfredo',
      desc: 'Creamy, comforting pasta goodness.',
      image: 'assets/icons/pasta.jpg',
      delay: '0.4s'
    },
    {
      title: 'Golden French Fries',
      desc: 'Crispy, golden fries with a touch of sea salt.',
      image: 'assets/icons/fries.jpeg',
      delay: '0.4s'
    },
    {
      title: 'Crispy Chicken Nuggets',
      desc: 'Tender chicken bites with a crunchy coating.',
      image: 'assets/icons/nugets.jpeg',
      delay: '0.4s'
    },
    {
      title: 'Veggie Delight Wrap',
      desc: 'Fresh veggies wrapped in a soft tortilla.',
      image: 'assets/icons/veg-wrap.jpg',
      delay: '0.4s'
    },
    {
      title: 'Onion Rings',
      desc: 'Golden-fried onion rings with a crispy batter.',
      image: 'assets/icons/rings.jpeg',
      delay: '0.4s'
    },
    {
      title: 'Mozzarella Sticks',
      desc: 'Melty mozzarella cheese in a crunchy breading.',
      image: 'assets/icons/sticks.jpeg',
      delay: '0.4s'
    }
  ];

  selectedItems: any[] = [];

  order = {
    name: '',
    phone: '',
    notes: '',
  };

  isSelected(item: any): boolean {
    return this.selectedItems.includes(item);
  }

  toggleSelection(item: any): void {
    if (this.isSelected(item)) {
      this.selectedItems = this.selectedItems.filter((i) => i !== item);
    } else {
      this.selectedItems.push(item);
    }
  }

  submitOrder(): void {
    if (!this.order.name || !this.order.phone || this.selectedItems.length === 0) {
      alert('Please fill all details and select at least one item.');
      return;
    }

    const payload = {
      ...this.order,
      items: this.selectedItems.map((i) => i.title),
    };

    // Simulate submission
    console.log('Order submitted:', payload);
    alert('Thank you for your order!');

    // Reset form
    this.order = { name: '', phone: '', notes: '' };
    this.selectedItems = [];
  }
}
