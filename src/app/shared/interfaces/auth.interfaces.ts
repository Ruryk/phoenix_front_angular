import { HttpErrorResponse } from '@angular/common/http';

export interface IAuthUser {
  email: string;
  password: string;
}

export type TStatuses = 'pending' | 'loading' | 'success' | 'error';

export interface IAuthResponse {
  email: string;
  password: string;
  token: string;
}

export interface IAuthState {
  user: IAuthResponse | null;
  isLoading: boolean;
  error: HttpErrorResponse | null;
}
