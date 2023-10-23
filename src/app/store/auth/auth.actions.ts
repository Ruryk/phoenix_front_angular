import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

import { IAuthUser } from 'src/app/shared/interfaces/auth.interfaces';

enum EAuthActionTypes {
  SIGN_IN = '[Auth] SignIn',
  SIGN_IN_SUCCESS = '[Auth] SignIn Success',
  SIGN_IN_FAIL = '[Auth] SignIn Failure',

  SIGN_UP = '[Auth] SignUp',
  SIGN_UP_SUCCESS = '[Auth] SignUp Success',
  SIGN_UP_FAIL = '[Auth] SignUp Failure',
}
// Sign In
export const signIn = createAction<EAuthActionTypes.SIGN_IN, IAuthUser>(
  EAuthActionTypes.SIGN_IN,
  props<IAuthUser>()
);

export const signInSuccess = createAction<
  EAuthActionTypes.SIGN_IN_SUCCESS,
  any
>(EAuthActionTypes.SIGN_IN_SUCCESS, props<any>());

export const signInFailure = createAction<
  EAuthActionTypes.SIGN_IN_FAIL,
  { payload: HttpErrorResponse }
>(EAuthActionTypes.SIGN_IN_FAIL, props<{ payload: HttpErrorResponse }>());

//Sign Up
export const signUp = createAction<EAuthActionTypes.SIGN_UP, IAuthUser>(
  EAuthActionTypes.SIGN_UP,
  props<IAuthUser>()
);

export const signUpSuccess = createAction<
  EAuthActionTypes.SIGN_UP_SUCCESS,
  any
>(EAuthActionTypes.SIGN_UP_SUCCESS, props<any>());

export const signUpFailure = createAction<
  EAuthActionTypes.SIGN_UP_FAIL,
  { payload: HttpErrorResponse }
>(EAuthActionTypes.SIGN_UP_FAIL, props<{ payload: HttpErrorResponse }>());
