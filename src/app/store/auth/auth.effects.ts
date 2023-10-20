import { catchError } from 'rxjs/operators';
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, of } from 'rxjs';
import {
  signIn,
  signInFailure,
  signInSuccess,
  signUp,
  signUpFailure,
  signUpSuccess,
} from './auth.actions';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class AuthEffects {
  private readonly actions: Actions = inject(Actions);
  private readonly authService: AuthService = inject(AuthService);

  signIn$ = createEffect(() =>
    this.actions.pipe(
      ofType(signIn),
      switchMap(({ type, ...user }) =>
        this.authService.signIn(user).pipe(
          map((user) => signInSuccess(user)),
          catchError((error) => of(signInFailure({ payload: error })))
        )
      )
    )
  );

  signUp$ = createEffect(() =>
    this.actions.pipe(
      ofType(signUp),
      switchMap(({ type, ...user }) =>
        this.authService.signUp(user).pipe(
          map((user) => {
            this.authService.handleSignUpSuccess();
            return signUpSuccess(user);
          }),
          catchError((error) => of(signUpFailure({ payload: error })))
        )
      )
    )
  );
}
