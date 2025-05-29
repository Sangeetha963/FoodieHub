import { Component } from '@angular/core';
import { animate, inView } from 'motion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animate-demo',
  templateUrl: './animate-demo.component.html',
  styleUrls: ['./animate-demo.component.scss']
})
export class AnimateDemoComponent {
  constructor(public router: Router) {}

  showBox = false;
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
  // In your component.ts
ngOnInit() {
  window.addEventListener('scroll', () => {
    const wrapper = document.querySelector('.hero-scroll-wrapper');
    if (window.scrollY > 200) {
      wrapper?.classList.add('scrolled');
    } else {
      wrapper?.classList.remove('scrolled');
    }
  });
}

  loopedBestsellers = [...this.bestsellers, ...this.bestsellers];

  toggleAnimation() {
    this.showBox = !this.showBox;
  }
  ngAfterViewInit(): void {
    inView('.testimonial', (element) => {
      animate(element, { opacity: 1, transform: 'translateY(0)' }, { duration: 0.6 });
    });
    
  }
  get isHomeRoute(): boolean {
    return this.router.url === '/';
  }
}
