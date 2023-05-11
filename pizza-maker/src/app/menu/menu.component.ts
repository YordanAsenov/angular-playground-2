import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { MenuService } from './menu.service';
import { Pizza } from 'src/models/pizza.model';
import { pizzeSelector } from './store/menu.reducer';
import { loadPizze } from './store/menu.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  private readonly store: Store;
  private menuService: MenuService;
  pizze$: Observable<Pizza[]> = of([]);

  constructor(
    store: Store,
    menuService: MenuService
  ) {
    this.store = store;
    this.menuService = menuService;
  }

  ngOnInit(): void {
    this.pizze$ = this.store.select(pizzeSelector);
    this.store.dispatch(loadPizze());
  }

  onCreatePizzaRequest() {
    console.log("New pizza!");
  }
}
