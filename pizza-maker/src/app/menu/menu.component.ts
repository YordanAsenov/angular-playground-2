import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Pizza } from 'src/models/pizza.model';
import { pizzeSelector } from './store/menu.reducer';
import { loadPizze } from './store/menu.actions';
import { addItem } from '../shopping-cart/store/shopping-cart.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pizze$: Observable<Pizza[]> = of([]);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.pizze$ = this.store.select(pizzeSelector);
    this.store.dispatch(loadPizze());
  }

  onCreatePizzaRequest() {
    this.store.dispatch(addItem({ pizza: new Pizza(7, "Focaccia", []) }));
  }
}
