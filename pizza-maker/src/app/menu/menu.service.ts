import { Injectable } from '@angular/core';
import { Pizza } from 'src/models/pizza.model';
import { Topping } from 'src/models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  toppings: Topping[] = [
    new Topping(1, "tomato"),
    new Topping(2, "mozzarella"),
    new Topping(3, "basil"),
    new Topping(4, "bacon"),
    new Topping(5, "mushroom"),
    new Topping(6, "onion"),
    new Topping(7, "pepper"),
    new Topping(8, "pepperoni"),
    new Topping(9, "chili")
  ];

  pizze: Pizza[] = [
    new Pizza(1, "Bianca", [this.toppings[1]]),
    new Pizza(2, "Rossa", [this.toppings[0]]),
    new Pizza(3, "Margherita", [this.toppings[0], this.toppings[1], this.toppings[2]]),
    new Pizza(4, "Verdure", [this.toppings[0], this.toppings[1], this.toppings[2], this.toppings[5], this.toppings[6]]),
    new Pizza(5, "Prosciutto e funghi", [this.toppings[0], this.toppings[1], this.toppings[2], this.toppings[3], this.toppings[4]]),
    new Pizza(6, "Salame piccante", [this.toppings[0], this.toppings[1], this.toppings[2], this.toppings[7], this.toppings[8]])
  ];

  pizzaCatalog() : Pizza[] {
    return this.pizze;
  }
}
