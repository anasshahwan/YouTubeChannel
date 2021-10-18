import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'custom-pipes';
  price = '50';
  months = [];
  numbers = [10, 2, 3, 4, 4, 5];
  myDate = Date();
}
