import { createAction, props } from '@ngrx/store';
import { Pizza } from 'src/models/pizza.model';

export const loadPizze = createAction('[Menu Component] Load pizze');
export const loadPizzeSuccess = createAction('[Menu Component] Load pizze success', props<{ pizze: Pizza[] }>);
export const loadPizzeError = createAction('[Menu Component] Load pizze error');
