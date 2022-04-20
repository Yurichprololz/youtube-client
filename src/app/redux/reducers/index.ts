import {
  ActionReducerMap,
} from '@ngrx/store';
import { State } from '../state.models';
import { customReducer } from './custom.reducers';
import { youtubeReducer } from './youtube.reducers';


export const youtubeFeatureKey = 'youtubeCards';
export const customFeatureKey = 'customCards';



export const reducers: ActionReducerMap<State> = {
  customCards: customReducer,
  youtubeCards: youtubeReducer,
};
