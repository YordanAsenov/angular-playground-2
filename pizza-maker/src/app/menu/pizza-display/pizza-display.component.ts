import { Component, Input } from '@angular/core';
import { Pizza } from 'src/models/pizza.model';

@Component({
  selector: 'app-pizza-display',
  templateUrl: './pizza-display.component.html',
  styleUrls: ['./pizza-display.component.less']
})
export class PizzaDisplayComponent {
  @Input()
  pizzaInput!: Pizza;
}
