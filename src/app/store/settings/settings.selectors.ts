import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISettingsState, settingsFeatureKey } from './settings.reducer';
import { IThemeSettings } from '../../modules/settings/interfaces/theme.interfaces';

export const getSettingsState = createFeatureSelector<ISettingsState>(settingsFeatureKey);

export const selectThemeSettings = createSelector(getSettingsState,
  (state: ISettingsState): IThemeSettings => state.theme);
export const selectThemeLoading = createSelector(getSettingsState,
  (state: ISettingsState): boolean => state.isLoading);
