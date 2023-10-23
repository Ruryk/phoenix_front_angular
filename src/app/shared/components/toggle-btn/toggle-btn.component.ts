import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  imports: [
    FormsModule,
    TranslateModule
  ],
  styleUrls: ['./toggle-btn.component.scss']
})
export class ToggleBtnComponent {

  @Input() isChecked: boolean = false;
  @Output() changeToggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() text: string = '';

  toggle(): void {
    this.isChecked = !this.isChecked;
    this.changeToggle.emit(this.isChecked);
  }
}
