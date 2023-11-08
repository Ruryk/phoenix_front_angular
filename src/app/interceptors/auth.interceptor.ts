import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EStorageKeys } from '../shared/enums/auth.enums';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private router: Router = inject(Router);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem(EStorageKeys.LocalStorageTokenKey);

    request = request.clone({
      setHeaders: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          localStorage.removeItem(EStorageKeys.LocalStorageTokenKey);
          this.router.navigate(['/auth']);
        }
        return throwError(() => error);
      })
    );
  }
}
