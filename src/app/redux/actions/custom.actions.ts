import { createAction, props } from '@ngrx/store';
import { CustomCard } from '../state.models';

export const enum ActionForCustom {
  create =  '[Custom] CREATE',
}

export const createCardAction = createAction(
  ActionForCustom.create,
  props<{ newCard: CustomCard }>(),
);

export type ActionsCastom = ActionForCustom.create;
