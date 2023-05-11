import { Component } from '@angular/core';
import { Orders } from '../orders';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  hero: Orders = {
    id: 1,
    name: 'Windstorm',
  };
}
