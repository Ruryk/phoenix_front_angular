import { catchError } from 'rxjs/operators';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, of, switchMap } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import {
  changeThemeSettings, changeThemeSettingsFailed, changeThemeSettingsSuccess,
  getThemeSettings,
  getThemeSettingsFailed,
  getThemeSettingsSuccess
} from './settings.actions';

@Injectable()
export class SettingsEffects {
  private readonly actions: Actions = inject(Actions);
  private readonly themeService: ThemeService = inject(ThemeService);

  getThemeSettings$ = createEffect(() =>
    this.actions.pipe(
      ofType(getThemeSettings),
      switchMap(() =>
        this.themeService.getUserThemeSettings().pipe(
          map((theme) => {
            this.themeService.toggleTextColor(theme.textColor);
            this.themeService.toggleMainColor(theme.mainColor);
            this.themeService.toggleBackgroundColor(theme.backgroundColor);
            return getThemeSettingsSuccess({payload: theme})
          }),
          catchError((error) => of(getThemeSettingsFailed({error})))
        )
      )
    )
  );

  changeThemeSettings$ = createEffect(() =>
    this.actions.pipe(
      ofType(changeThemeSettings),
      switchMap((action) =>
        this.themeService.changeUserThemeSettings(action.payload).pipe(
          map((theme) => {
            this.themeService.toggleTextColor(theme.textColor);
            this.themeService.toggleMainColor(theme.mainColor);
            this.themeService.toggleBackgroundColor(theme.backgroundColor);
            return changeThemeSettingsSuccess({payload: theme})
          }),
          catchError((error) => {
            console.log(error)
            return of(changeThemeSettingsFailed({error}))})
        )
      )
    )
  );
}
