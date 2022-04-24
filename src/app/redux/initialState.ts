import { State } from './state.models';

export const initialState: State = {
  customCards: [],
  youtubeCards: [],
};

export const initialYoutubeState = () => {
  return initialState.youtubeCards;
};
