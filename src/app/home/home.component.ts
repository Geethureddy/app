import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  person = {
    name: 'Geetha',
    gender: 'm',
  };
  wish = 'good morning';
}
