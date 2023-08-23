import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gadgetStore';
  items = [
    {
      label: "Home",
      url: "https://hello.com"
    },
    {
      label: "Cart",
    },
    {
      label: "Checkout",
    },
  ];
}

