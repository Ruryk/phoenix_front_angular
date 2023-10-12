import { createReducer, on } from '@ngrx/store';

import { hideLoader, showLoader } from './loader.actions';

export const loaderFeatureKey = 'loader';

export interface ILoaderState {
  isOn: boolean;
}

export const initialState: ILoaderState = {
  isOn: false,
};

export const loaderReducer = createReducer(
  initialState,
  on(showLoader, (state) => ({
    ...state,
    isOn: true,
  })),
  on(hideLoader, (state) => ({
    ...state,
    isOn: false,
  }))
);
