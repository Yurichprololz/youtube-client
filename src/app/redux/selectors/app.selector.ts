import { createSelector } from '@ngrx/store';
import { YoutubeCard } from '../state.models';
import { selectCustomCards } from './custom.selector';
import { selectYoutubeCards } from './youtube.selector';

export const selectAllCards = createSelector(
  selectCustomCards,
  selectYoutubeCards,
  (customCards, youtubeCard) => [...customCards, ...youtubeCard] as YoutubeCard[]);
