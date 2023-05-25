import { createAction, props } from '@ngrx/store';
import { Pizza } from 'src/models/pizza.model';

export const clearShoppingCart = createAction('[Shopping Cart Component] Clear cart');
export const addItem = createAction('[Shopping Cart Component] Add item', props<{ pizza: Pizza }>());
export const removeItem = createAction('[Shopping Cart Component] Remove item', props<{ pizza: Pizza }>);
