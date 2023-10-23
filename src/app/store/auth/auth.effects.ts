import { catchError } from 'rxjs/operators';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, of, switchMap } from 'rxjs';
import { signIn, signInFailure, signInSuccess, signUp, signUpFailure, signUpSuccess, } from './auth.actions';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private readonly actions: Actions = inject(Actions);
  private readonly authService: AuthService = inject(AuthService);

  constructor(private router: Router) {}

  signIn$ = createEffect(() =>
    this.actions.pipe(
      ofType(signIn),
      switchMap(({type, ...user}) =>
        this.authService.signIn(user).pipe(
          map((user) => {
            this.router.navigate(['/chat']);
            return signInSuccess(user)
          }),
          catchError((error) => of(signInFailure({payload: error})))
        )
      )
    )
  );

  signUp$ = createEffect(() =>
    this.actions.pipe(
      ofType(signUp),
      switchMap(({type, ...user}) =>
        this.authService.signUp(user).pipe(
          map((user) => {
            this.authService.handleSignUpSuccess();
            return signUpSuccess(user);
          }),
          catchError((error) => of(signUpFailure({payload: error})))
        )
      )
    )
  );
}
