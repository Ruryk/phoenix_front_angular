import { Injectable } from '@angular/core';

import { IAuthUser } from 'src/app/shared/interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl: string = environment.apiUrl;

  public signIn(user: IAuthUser): void {
    console.log(user);
    this.setUserToLocalStorage(user);
  }

  public signUp(user: IAuthUser): void {
    this.setUserToLocalStorage(user);
  }

  public setUserToLocalStorage(user: IAuthUser) {
    localStorage.setItem('test-user', `${user.email}, ${user.password}`);
  }

  public isUserAuthorized(): boolean {
    return !!localStorage.getItem('test-user');
  }
}
