import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../../../modules/material/materials.module';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-color-setting-input',
  templateUrl: './color-setting-input.component.html',
  styleUrls: ['./color-setting-input.component.scss'],
  imports: [
    TranslateModule,
    MaterialModule,
    NgIf
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorSettingInputComponent),
      multi: true
    }
  ]
})
export class ColorSettingInputComponent implements ControlValueAccessor {

  @Input() label: string = '';
  @Input() index: number;
  public onChange: (p: any) => void = () => {};
  public onTouch: () => void = () => {};

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

  changeColor(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
  }
}
