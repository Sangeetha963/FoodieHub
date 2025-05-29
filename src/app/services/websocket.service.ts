// src/app/services/websocket.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private searchResponseSubject = new Subject<string[]>();

  private mockMenuItems = [
    'Margherita Pizza',
    'Pepperoni Pizza',
    'Spaghetti Carbonara',
    'Caesar Salad',
    'Grilled Chicken Sandwich',
    'Paneer Tikka',
    'Butter Naan',
    'Veg Biryani',
    'Chicken Biryani'
  ];

  constructor() {}

  // Simulate sending message to "WebSocket"
  sendSearchPrompt(query: string) {
    const result = this.mockMenuItems.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  
    console.log('Filtered results inside service:', result); // ✅ Proper place
  
    setTimeout(() => {
      console.log('Emitting search results:', result); 
      this.searchResponseSubject.next(result);
    }, 300);
  }
  

  getSearchResponses(): Observable<string[]> {
    return this.searchResponseSubject.asObservable();
  }
}
