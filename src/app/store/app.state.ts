import { combineReducers } from '@ngrx/store';
import { authFeatureKey, authReducer, IAuthState } from './auth/auth.reducer';
import { ILoaderState, loaderFeatureKey, loaderReducer, } from './loader/loader.reducer';
import { ISettingsState, settingsFeatureKey, settingsReducer } from './settings/settings.reducer';

export interface IAppState {
  [authFeatureKey]: IAuthState;
  [loaderFeatureKey]: ILoaderState;
  [settingsFeatureKey]: ISettingsState;
}

export const appReducer = combineReducers<IAppState>({
  [authFeatureKey]: authReducer,
  [loaderFeatureKey]: loaderReducer,
  [settingsFeatureKey]: settingsReducer
});

export const appState = {
  [authFeatureKey]: authReducer,
  [loaderFeatureKey]: loaderReducer,
  [settingsFeatureKey]: settingsReducer
};
