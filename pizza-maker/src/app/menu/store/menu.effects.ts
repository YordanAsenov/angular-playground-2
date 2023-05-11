import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MenuService } from "../menu.service";

@Injectable()
export class MenuEffects {
  constructor(
    private actions$: Actions,
    private menuService: MenuService
  ) {}

  loadPizze$ = createEffect(() => this.actions$.pipe(
      ofType('[Menu Component] Load pizze'),
      switchMap(() => this.menuService.pizzaCatalog()
        .pipe(
          map(pizze => ({ type: '[Menu Component] Load pizze success', pizze: pizze })),
          catchError(() => of({ type: '[Menu Component] Load pizze error' }))
        )
      )
    )
  );
}
