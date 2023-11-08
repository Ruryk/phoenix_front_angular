import { createAction, props } from '@ngrx/store';
import { IThemeSettings, IThemeSettingsForm } from '../../modules/settings/interfaces/theme.interfaces';
import { HttpErrorResponse } from '@angular/common/http';

enum ESettingsActionTypes {
  GET_THEME_SETTINGS = '[SETTINGS] get theme settings',
  GET_THEME_SETTINGS_SUCCESS = '[SETTINGS] get theme settings success',
  GET_THEME_SETTINGS_FAILED = '[SETTINGS] get theme settings failed',

  CHANGE_THEME_SETTINGS = '[SETTINGS] change theme settings',
  CHANGE_THEME_SETTINGS_SUCCESS = '[SETTINGS] change theme settings success',
  CHANGE_THEME_SETTINGS_FAILED = '[SETTINGS] change theme settings failed',
}

export const getThemeSettings = createAction(
  ESettingsActionTypes.GET_THEME_SETTINGS,
)

export const getThemeSettingsSuccess = createAction(
  ESettingsActionTypes.GET_THEME_SETTINGS_SUCCESS,
  props<{ payload: IThemeSettings }>()
)

export const getThemeSettingsFailed = createAction(
  ESettingsActionTypes.GET_THEME_SETTINGS_FAILED,
  props<{ error: HttpErrorResponse }>()
)

export const changeThemeSettings = createAction(
  ESettingsActionTypes.CHANGE_THEME_SETTINGS,
  props<{ payload: IThemeSettingsForm }>()
)

export const changeThemeSettingsSuccess = createAction(
  ESettingsActionTypes.CHANGE_THEME_SETTINGS_SUCCESS,
  props<{ payload: IThemeSettings }>()
)

export const changeThemeSettingsFailed = createAction(
  ESettingsActionTypes.CHANGE_THEME_SETTINGS_FAILED,
  props<{ error: HttpErrorResponse }>()
)
