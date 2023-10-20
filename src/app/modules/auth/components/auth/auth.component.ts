import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthService } from 'src/app/services/auth/auth.service';
import { passwordMatchValidator } from 'src/app/shared/utils/auth.functions';
import { Store } from '@ngrx/store';
import { signIn, signUp } from 'src/app/store/auth/auth.actions';
import {
  EAuthImages,
  EAuthRoutes,
  EAuthTemplateText,
} from 'src/app/shared/enums/auth.enums';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly router: Router = inject(Router);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly authService: AuthService = inject(AuthService);
  private readonly store: Store = inject(Store);

  public EAuthImages = EAuthImages;
  public EAuthTemplateText = EAuthTemplateText;
  public EAuthRoutes = EAuthRoutes;

  public authRoutes: { signIn: string; signUp: string } = {
    signIn: this.EAuthRoutes.signIn,
    signUp: this.EAuthRoutes.signUp,
  };

  public signInForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  public signUpForm: FormGroup = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    { validator: passwordMatchValidator('password', 'confirmPassword') }
  );

  public currentRoute$: Observable<string> = of(
    this.activatedRoute.snapshot.routeConfig.path
  );

  get signInFormValue(): {
    email: string;
    password: string;
  } {
    return this.signInForm.value;
  }

  get signUpFormValue(): {
    email: string;
    password: string;
  } {
    return {
      email: this.signUpForm.controls['email'].value,
      password: this.signUpForm.controls['password'].value,
    };
  }

  get passwordMismatch(): boolean {
    return this.signUpForm.get('confirmPassword').hasError('passwordMismatch');
  }

  ngOnInit(): void {
    this.checkIsUserAuthorized();

    this.currentRoute$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => data);
  }

  public signUp() {
    this.store.dispatch(signUp(this.signUpFormValue));
  }

  public signIn() {
    this.store.dispatch(signIn(this.signInFormValue));
  }

  public navigateTo(path: string): void {
    this.router.navigate([`/auth/${path}`]);
  }

  public checkIsUserAuthorized(): void {
    this.authService.isUserAuthorized()
      ? this.router.navigate([`/chat`])
      : false;
  }
}
