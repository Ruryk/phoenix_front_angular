import { Component, forwardRef } from '@angular/core';
import { MaterialModule } from '../../../modules/material/materials.module';
import { PickerComponent, PickerModule } from '@ctrl/ngx-emoji-mart';
import { NgIf } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

@Component({
  standalone: true,
  selector: 'app-chat-messaging',
  templateUrl: './chat-messaging.component.html',
  imports: [
    MaterialModule,
    PickerComponent,
    NgIf,
    PickerModule,
    ClickOutsideDirective
  ],
  styleUrls: ['./chat-messaging.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChatMessagingComponent),
      multi: true
    }
  ]
})
export class ChatMessagingComponent implements ControlValueAccessor {

  public emojiAvailable: boolean = false;
  public value: string = '';
  public onChange: (p: any) => void = () => {};
  public onTouch: () => void = () => {};

  selectEmoji(event: any): void {
    const emoji = event.emoji.native;
    this.value += emoji;
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  typeText(event: any): void {
    this.value = event.target.value;
  }
}
