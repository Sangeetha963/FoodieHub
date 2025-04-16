import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navItems = [
    { name: 'Home', link: '#' },
    { name: 'Menu', link: '#' },
    { name: 'Offers', link: '#' },
    { name: 'Contact', link: '#' },
  ];
 
  constructor() {}

  ngOnInit(): void {
    // If needed, DOM manipulation goes here using ViewChild or Renderer2 (but usually unnecessary)
  }
}
