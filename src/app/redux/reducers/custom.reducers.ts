import { createReducer, on } from '@ngrx/store';
import { createCardAction } from '../actions/custom.actions';
import { initialState } from '../initialState';
import { CustomCard } from '../state.models';

export const customReducer = createReducer(
  initialState.customCards,
  on(createCardAction,
    (state, { newCard }): CustomCard[] => ([
      ...state,
      newCard,
    ])  ),
);


