import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthService } from 'src/app/services/auth/auth.service';
import { EAuthRoutes } from '../../enums/auth.enums';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  public signInPage: boolean;
  public authForm: FormGroup;
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
    this.initForm();
    this.checkIsUserAuthorized();

    this.currentRoute$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.signInPage = data === EAuthRoutes.signIn;
      });
  }

  initForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    if (!this.signInPage) {
      this.authForm.addControl('confirmPassword', this.fb.control('', [Validators.required, Validators.minLength(6)]));
      this.authForm.setValidators([this.passwordMatchValidator('password', 'confirmPassword')]);
    }
  }

  passwordMatchValidator(controlName: string, matchingControlName: string): any {
    return (group: FormGroup) => {
      const control = group.controls[controlName];
      const matchingControl = group.controls[matchingControlName];

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({passwordMismatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  public login() {
    const formValue = this.authForm.value;
    if (this.signInPage) {
      this.authService.signUp(formValue);
      return;
    }
    delete formValue['confirmPassword'];
    this.authService.signIn(this.authForm.value);
  }

  public navigateTo(): void {
    const path = this.signInPage ? EAuthRoutes.signUp : EAuthRoutes.signIn;
    this.router.navigate([`/auth/${path}`]);
  }

  public checkIsUserAuthorized(): void {
    this.authService.isUserAuthorized()
      ? this.router.navigate([`/chat`])
      : false;
  }
}
