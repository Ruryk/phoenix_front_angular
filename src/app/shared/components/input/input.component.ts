import { Component, forwardRef, Input } from '@angular/core';
import { MaterialModule } from '../../../modules/material/materials.module';
import {
  AbstractControl,
  ControlValueAccessor,
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
  imports: [MaterialModule, ReactiveFormsModule, NgIf, TranslateModule, NgClass],
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
  @Input() label: string = 'Test';
  @Input() placeholder: string = 'placeholder';
  public control: AbstractControl | null = null;
  public value: string = '';
  public onChange: (p: any) => void = () => {};
  public onTouch: () => void = () => {};

  constructor() {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control) return null;
    this.control = control;
    return control.value ? null : {...control.errors};
  }

  valueChange(event: any): void {
    this.value = event.target.value;
  }

  getErrorMessage(): string {
    if (this.control && this.control.hasError('required')) {
      return 'You must enter a value';
    } else return '';
  }
}
