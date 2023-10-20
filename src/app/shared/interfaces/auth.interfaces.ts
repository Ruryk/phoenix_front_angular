export interface IAuthUser {
  email: string;
  password: string;
}

export type TStatuses = 'pending' | 'loading' | 'success' | 'error';
