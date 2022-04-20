import { createAction, props } from '@ngrx/store';
import { YoutubeCard } from '../state.models';

export const enum ActionForYoutube {
  update =  '[Custom] CREATE',
}

export const updateYoutubeCardsAction = createAction(
  ActionForYoutube.update,
  props<{ YoutubeCards: YoutubeCard[] }>(),
);

export type ActionsYoutube = ActionForYoutube.update;
