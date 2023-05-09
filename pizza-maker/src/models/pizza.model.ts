import { Topping } from "./topping.model";

export class Pizza {
  id?: number;
  name?: string;
  toppings?: Topping[];

  constructor(id: number, name: string, toppings: Topping[]) {
    this.id = id;
    this.name = name;
    this.toppings = toppings;
  }
}
