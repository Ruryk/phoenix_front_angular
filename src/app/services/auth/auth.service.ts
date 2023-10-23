import { Injectable, inject } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environment/environment';
import { IAuthUser } from 'src/app/shared/interfaces/auth.interfaces';
import { EStorageKeys } from 'src/app/shared/enums/auth.enums';
import { Router } from '@angular/router';

interface IResponse {
  message: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly router: Router = inject(Router);

  private apiUrl: string = environment.localApiUrl;

  public signIn(user: IAuthUser): Observable<IResponse> {
    return this.handleAuthResponse(
      this.http.post<IResponse>(`${this.apiUrl}auth/sign-in`, user)
    );
  }

  public signUp(user: IAuthUser): Observable<IAuthUser> {
    return this.http.post<IAuthUser>(`${this.apiUrl}auth/sign-up`, user);
  }

  public setTokenToLocalStorage(token: string) {
    localStorage.setItem(EStorageKeys.LocalStorageTokenKey, token);
  }

  public isUserAuthorized(): boolean {
    return !!localStorage.getItem(EStorageKeys.LocalStorageTokenKey);
  }

  private handleAuthResponse(
    response$: Observable<IResponse>
  ): Observable<IResponse> {
    return response$.pipe(
      switchMap((response) => {
        this.setTokenToLocalStorage(response.token); // Store user data in local storage
        return of(response); // Pass the user data to the next observable
      })
    );
  }

  public handleSignUpSuccess() {
    // Redirect to the sign-in page on successful sign-up
    this.router.navigate(['/auth/sign-in']);
  }
}
