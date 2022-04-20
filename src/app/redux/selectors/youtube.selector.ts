import { createFeatureSelector, createSelector } from '@ngrx/store';
import { youtubeFeatureKey } from '../reducers';
import { State } from '../state.models';

const selectState = createFeatureSelector<State>(youtubeFeatureKey);

export const selectYoutubeCards = createSelector(
  selectState,
  (state) => state.youtubeCards);
