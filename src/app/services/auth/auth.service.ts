import { Injectable } from '@angular/core';

import { IAuthResponse, IAuthUser } from 'src/app/shared/interfaces/auth.interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl: string = environment.apiUrl;

  public signIn(user: IAuthUser): Observable<IAuthResponse> {
    this.setUserToLocalStorage(user);
    const userWithToken = {...user, token: 'test-token'};
    return of(userWithToken);
  }

  public signUp(user: IAuthUser): Observable<IAuthResponse> {
    this.setUserToLocalStorage(user);
    const userWithToken = {...user, token: 'test-token'};
    return of(userWithToken);
  }

  public setUserToLocalStorage(user: IAuthUser) {
    localStorage.setItem('test-user', `${user.email}, ${user.password}`);
  }

  public isUserAuthorized(): boolean {
    return !!localStorage.getItem('test-user');
  }
}
