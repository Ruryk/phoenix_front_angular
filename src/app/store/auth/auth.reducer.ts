import { createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { TStatuses } from 'src/app/shared/interfaces/auth.interfaces';
import {
  signIn,
  signInFailure,
  signInSuccess,
  signUp,
  signUpFailure,
  signUpSuccess,
} from './auth.actions';

export interface IAuthState {
  status: null | TStatuses;
  error: null | HttpErrorResponse;
}

export const authFeatureKey = 'auth';

export const initialAuthState: IAuthState = {
  status: null,
  error: null,
};

export const authReducer = createReducer(
  initialAuthState,

  on(signIn, (state) => ({
    ...state,
    status: 'loading ' as TStatuses,
  })),
  on(signInSuccess, (state) => ({
    ...state,
    status: 'success' as TStatuses,
  })),
  on(signInFailure, (state, { payload }) => ({
    ...state,
    status: 'error' as TStatuses,
    payload,
  })),

  on(signUp, (state) => ({
    ...state,
    status: 'loading ' as TStatuses,
  })),
  on(signUpSuccess, (state) => ({
    ...state,
    status: 'success' as TStatuses,
  })),
  on(signUpFailure, (state, { payload }) => ({
    ...state,
    status: 'error' as TStatuses,
    payload,
  }))
);
