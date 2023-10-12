import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthResponse, IAuthState } from '../../shared/interfaces/auth.interfaces';
import { authFeatureKey } from './auth.reducer';

export const getAuthState = createFeatureSelector<IAuthState>(authFeatureKey);

export const getUserData = createSelector(getAuthState,
  (state: IAuthState): IAuthResponse => state.user);
