import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebSocketService } from '../../../services/websocket.service';


@Component({
  selector: 'app-search-dish',
  templateUrl: './search-dish.component.html',
  styleUrls: ['./search-dish.component.scss']
})
export class SearchDishComponent {
  query: string = '';
  results: string[] = [];
  isWebSocketConnected = false;

  constructor(private wsService: WebSocketService) {
    this.wsService.getSearchResponses().subscribe(data => {
      console.log('Component received data:', data);
      this.results = data;
    });
    this.connectWebSocket();

  }
  connectWebSocket() {
    // Simulate connection established
    setTimeout(() => {
      this.isWebSocketConnected = true;
      console.log('WebSocket connected');
    }, 0);  // immediately or delay as needed
  }
  onSearchChange() {
    console.log('enter 1')
    if (this.query.length >= 2) {
      console.log('enter 2')
      console.log('Service received query:', this.query);
      this.wsService.sendSearchPrompt(this.query); // ✅
    } else {
      console.log('enter 3')
      this.results = [];
    }
  }
}
