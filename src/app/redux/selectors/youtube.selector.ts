import { createFeatureSelector } from '@ngrx/store';
import { youtubeFeatureKey } from '../reducers';
import { YoutubeCard } from '../state.models';

export const selectYoutubeCards = createFeatureSelector<YoutubeCard[]>(youtubeFeatureKey);
