import { createReducer, on } from '@ngrx/store';
import { updateYoutubeCardsAction } from '../actions/youtube.actions';
import { initialState } from '../initialState';
import { YoutubeCard } from '../state.models';

export const youtubeReducer = createReducer(
  initialState.youtubeCards,
  on(updateYoutubeCardsAction,
    (state, { YoutubeCards }): YoutubeCard[] => ({
      ...YoutubeCards,
    })),
);
