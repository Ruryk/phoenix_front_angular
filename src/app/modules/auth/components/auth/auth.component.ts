import { Component, OnInit, DestroyRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthService } from 'src/app/services/auth/auth.service';
import { passwordMatchValidator } from 'src/app/shared/utils/auth.functions';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public authRoutes: { signIn: string; signUp: string } = {
    signIn: 'sign-in',
    signUp: 'sign-up',
  };

  public signUpForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  public signInForm: FormGroup = this.fb.group(
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.checkIsUserAuthorized();

    this.currentRoute$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => data);
  }

  public signUp() {
    this.authService.signUp({
      email: this.signUpForm.controls['email'].value,
      password: this.signUpForm.controls['password'].value,
    });
  }

  public signIn() {
    this.authService.signIn({
      email: this.signInForm.controls['email'].value,
      password: this.signInForm.controls['password'].value,
    });
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
