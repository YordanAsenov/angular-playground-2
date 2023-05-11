import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Pizza } from "src/models/pizza.model";
import { loadPizzeSuccess } from "./menu.actions";

export interface MenuState {
  pizze: Pizza[]
}

export const initialState: MenuState = {
  pizze: []
}

export const menuReducer = createReducer(
  initialState,
  on(loadPizzeSuccess, (state, payload) => ({ ...state, ...payload }))
);

export const selectMenuState = createFeatureSelector<MenuState>('menu');

export const pizzeSelector = createSelector(
  selectMenuState,
  state => state.pizze
);
