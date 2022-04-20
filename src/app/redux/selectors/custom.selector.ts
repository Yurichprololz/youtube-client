import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customFeatureKey } from '../reducers';
import { State } from '../state.models';

const selectState = createFeatureSelector<State>(customFeatureKey);

export const selectCustomCards = createSelector(
  selectState,
  (state) => state.customCards);
