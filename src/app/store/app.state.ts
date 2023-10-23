import { combineReducers } from '@ngrx/store';
import { authReducer, IAuthState, authFeatureKey } from './auth/auth.reducer';
import {
  ILoaderState,
  loaderFeatureKey,
  loaderReducer,
} from './loader/loader.reducer';

export interface IAppState {
  [authFeatureKey]: IAuthState;
  [loaderFeatureKey]: ILoaderState;
}

export const appReducer = combineReducers<IAppState>({
  [authFeatureKey]: authReducer,
  [loaderFeatureKey]: loaderReducer,
});

export const appState = {
  [authFeatureKey]: authReducer,
  [loaderFeatureKey]: loaderReducer,
};
