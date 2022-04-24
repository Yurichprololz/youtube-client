import { createFeatureSelector } from '@ngrx/store';
import { customFeatureKey } from '../reducers';
import { CustomCard } from '../state.models';

export const selectCustomCards = createFeatureSelector<CustomCard[]>(customFeatureKey);
