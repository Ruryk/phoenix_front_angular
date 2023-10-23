import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';

import {
  signIn,
  signInFailure,
  signInSuccess,
  signUp,
  signUpFailure,
  signUpSuccess,
} from '../auth/auth.actions';
import { hideLoader, showLoader } from './loader.actions';

@Injectable()
export class LoaderEffects {
  constructor(private actions: Actions) {}

  showLoader$ = createEffect(() =>
    this.actions.pipe(
      ofType(signIn, signUp),
      map(() => showLoader())
    )
  );

  hideLoader$ = createEffect(() =>
    this.actions.pipe(
      ofType(signInSuccess, signInFailure, signUpSuccess, signUpFailure),
      map(() => hideLoader())
    )
  );
}
