import { Component } from '@angular/core';
import { Orders } from '../orders';
import { HEROES } from '../orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  hero: Orders = {
    id: 1,
    name: 'Windstorm',
  };
  heroes = HEROES;
  selectedHero?: Orders;
  onSelect(hero: Orders): void {
    this.selectedHero = hero;
  }
}
