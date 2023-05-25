import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Pizza } from "src/models/pizza.model";
import { clearShoppingCart, addItem, removeItem } from "./shopping-cart.actions";

export interface ShoppingCartState {
  pizze: Pizza[]
}

export const initialState: ShoppingCartState = {
  pizze: []
}

export const shoppingCartReducer = createReducer(
  initialState,
  on(clearShoppingCart, state => ({ ...state, pizze: [] })),
  on(addItem, (state, payload) => ({ ...state, pizze: [...state.pizze, payload.pizza] })),
  on(removeItem, (state, payload) => ({ ...state, pizze: state.pizze.filter(pizza => pizza !== payload) }))
);

export const selectShoppingCartState = createFeatureSelector<ShoppingCartState>('shoppingCart');

export const shoppingCartSelector = createSelector(
  selectShoppingCartState,
  state => state.pizze
);
