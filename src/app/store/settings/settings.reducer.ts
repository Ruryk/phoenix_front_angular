import { createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { IThemeSettings } from '../../modules/settings/interfaces/theme.interfaces';
import {
  changeThemeSettings, changeThemeSettingsFailed, changeThemeSettingsSuccess,
  getThemeSettings,
  getThemeSettingsFailed,
  getThemeSettingsSuccess
} from './settings.actions';

export interface ISettingsState {
  theme: null | IThemeSettings;
  isLoading: boolean,
  isLoadingSuccess: boolean,
  error: null | HttpErrorResponse;
}

export const settingsFeatureKey = 'settings';

export const initialSettingsState: ISettingsState = {
  theme: null,
  isLoading: false,
  isLoadingSuccess: false,
  error: null
};

export const settingsReducer = createReducer(
  initialSettingsState,

  on(getThemeSettings, (state) => ({
    ...state,
    isLoading: true,
    isLoadingSuccess: false,
    error: null
  })),
  on(getThemeSettingsSuccess, (state, {payload}) => ({
    ...state,
    theme: payload,
    isLoading: false,
    isLoadingSuccess: true,
    error: null
  })),
  on(getThemeSettingsFailed, (state, {error}) => ({
    ...state,
    isLoading: false,
    isLoadingSuccess: false,
    error
  })),
  on(changeThemeSettings, (state) => ({
    ...state,
    isLoading: true,
    isLoadingSuccess: false,
    error: null
  })),
  on(changeThemeSettingsSuccess, (state, {payload}) => ({
    ...state,
    theme: payload,
    isLoading: false,
    isLoadingSuccess: true,
    error: null
  })),
  on(changeThemeSettingsFailed, (state, {error}) => ({
    ...state,
    isLoading: false,
    isLoadingSuccess: false,
    error
  })),
);
