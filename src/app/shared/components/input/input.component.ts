import { Component, forwardRef, Input } from '@angular/core';
import { MaterialModule } from '../../../modules/material/materials.module';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [MaterialModule, ReactiveFormsModule, NgIf, TranslateModule, NgClass, FormsModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ]
})
export class InputComponent implements ControlValueAccessor, Validator {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() inputType: string = 'text';
  @Input() icon: string;
  public control: AbstractControl | null = null;
  public onChange: (p: any) => void = () => {};
  public onTouch: () => void = () => {};
  @Input() needStyles: boolean = false;

  public _value: string = '';

  get value(): string {
    return this._value;
  }

  set value(val: any) {
    this._value = val;
    this.onChange(val);
  }

  writeValue(value: string): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control) return null;
    this.control = control;
    return control.value ? null : {...control.errors};
  }

  getErrorMessage(): string {
    const errors = this.control.errors;
    if (errors['required']) {
      return 'THIS_VALUE_IS_REQUIRED';
    } else if (errors['minlength']) {
      return 'MINIMIMUM_LENGTH_NOT_MET';
    } else if (errors['passwordMismatch']) {
      return 'PASSWORDS_DO_NOT_MATCH';
    } else {
      return ''
    }
  }
}
