import { IAuthState } from '../../shared/interfaces/auth.interfaces';
import { createReducer, on } from '@ngrx/store';
import {
  signInAction,
  signInFailedAction,
  signInSuccessAction,
  signUpAction, signUpFailedAction,
  signUpSuccessAction
} from './auth.actions';

export const authFeatureKey = 'auth';
export const initialAuthState: IAuthState = {
  user: null,
  isLoading: false,
  error: null
}

export const authReducer = createReducer(
  initialAuthState,
  on(signInAction, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(signInSuccessAction, (state, {payload}) => ({
    ...state,
    user: payload,
    isLoading: false,
    error: null
  })),
  on(signInFailedAction, (state, {error}) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(signUpAction, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(signUpSuccessAction, (state, {payload}) => ({
    ...state,
    user: payload,
    isLoading: false,
    error: null
  })),
  on(signUpFailedAction, (state, {error}) => ({
    ...state,
    isLoading: false,
    error
  })),
);
