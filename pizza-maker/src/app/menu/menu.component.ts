import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/models/pizza.model';
import { MenuService } from './menu.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  private menuService: MenuService;
  pizze$: Observable<Pizza[]> = of([]);

  constructor(menuService: MenuService) {
    this.menuService = menuService;
  }

  ngOnInit(): void {
    this.pizze$ = this.menuService.pizzaCatalog();
  }
}
