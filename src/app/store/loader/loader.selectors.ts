import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ILoaderState, loaderFeatureKey } from './loader.reducer';

export const selectLoaderState =
  createFeatureSelector<ILoaderState>(loaderFeatureKey);

export const selectLoaderIsOn = createSelector(
  selectLoaderState,
  ({ isOn }) => isOn
);
