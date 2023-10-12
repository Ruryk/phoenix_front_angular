import { HttpErrorResponse } from '@angular/common/http';

export interface IAuthUser {
  email: string;
  password: string;
}

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
