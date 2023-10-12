import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { AuthService } from '../../services/auth/auth.service';
import {
  signInAction,
  signInFailedAction,
  signInSuccessAction,
  signUpAction,
  signUpFailedAction,
  signUpSuccessAction
} from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signInAction),
      switchMap((action) =>
        this.authService.signIn(action.payload).pipe(
          map(response => {
            this.router.navigate(['/chat']);
            return signInSuccessAction({payload: response})
          }),
          catchError(error =>
            of(signInFailedAction({error}))
          )
        )
      )
    )
  )

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUpAction),
      switchMap((action) =>
        this.authService.signUp(action.payload).pipe(
          map(response => {
            this.router.navigate(['/chat']);
            return signUpSuccessAction({payload: response})
          }),
          catchError(error =>
            of(signUpFailedAction({error}))
          )
        )
      )
    )
  )
}
