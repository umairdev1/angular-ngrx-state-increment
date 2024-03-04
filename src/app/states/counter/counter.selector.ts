import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { state } from '@angular/animations';

export const slectCounterState = (state: AppState) => state.counter;
export const selectCount = createSelector(
  slectCounterState,
  (state) => state.count
);
