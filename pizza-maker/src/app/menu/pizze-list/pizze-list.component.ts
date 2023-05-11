import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from 'src/models/pizza.model';

@Component({
  selector: 'app-pizze-list',
  templateUrl: './pizze-list.component.html'
})
export class PizzeListComponent {
  @Input()
  pizzeInput: Pizza[] = [];

  @Output()
  createPizzaRequested = new EventEmitter();

  onCreateNewPizza() {
    this.createPizzaRequested.emit();
  }
}
