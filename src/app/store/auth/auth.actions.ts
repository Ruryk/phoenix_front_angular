import { createAction, props } from '@ngrx/store';
import { IAuthResponse, IAuthUser } from '../../shared/interfaces/auth.interfaces';
import { HttpErrorResponse } from '@angular/common/http';

export const SIGN_UP = '[AUTH] sign up';
export const SIGN_UP_SUCCESS = '[AUTH] sign up success';
export const SIGN_UP_FAILED = '[AUTH] sign up failed';

export const SIGN_IN = '[AUTH] sign in';
export const SIGN_IN_SUCCESS = '[AUTH] sign in success';
export const SIGN_IN_FAILED = '[AUTH] sign in failed';

export const signUpAction = createAction(
  SIGN_UP,
  props<{ payload: IAuthUser }>()
)
export const signUpSuccessAction = createAction(
  SIGN_UP_SUCCESS,
  props<{ payload: IAuthResponse }>()
)

export const signUpFailedAction = createAction(
  SIGN_UP_FAILED,
  props<{ error: HttpErrorResponse }>()
)

export const signInAction = createAction(
  SIGN_IN,
  props<{ payload: IAuthUser }>()
)
export const signInSuccessAction = createAction(
  SIGN_IN_SUCCESS,
  props<{ payload: IAuthResponse }>()
)

export const signInFailedAction = createAction(
  SIGN_IN_FAILED,
  props<{ error: HttpErrorResponse }>()
)
