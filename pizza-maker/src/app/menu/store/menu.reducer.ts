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

// selectFeature will have the type MemoizedSelector<object, FeatureState>
export const selectMenuState = createFeatureSelector<MenuState>('menu');

// selectFeatureCount will have the type MemoizedSelector<object, number>
export const pizzeSelector = createSelector(
  selectMenuState,
  state => state.pizze
);
