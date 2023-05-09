import { Component } from '@angular/core';
import { Pizza } from 'src/models/pizza.model';
import { Topping } from 'src/models/topping.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {

  toppings: Topping[] = [
    new Topping(1, "tomato"),
    new Topping(2, "mozzarella")
  ];

  pizze: Pizza[] = [
    new Pizza(1, "Bianca", [this.toppings[1]]),
    new Pizza(2, "Rossa", [this.toppings[0]]),
    new Pizza(3, "Margherita", [this.toppings[0], this.toppings[1]])
  ];
}
