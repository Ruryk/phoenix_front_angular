import { Component, Input } from '@angular/core';
import { IMessageUser } from '../../interfaces/user.interface';
import { NgIf, NgSwitch } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ImageDirective } from '../../directives/image.directive';

@Component({
  standalone: true,
  selector: 'app-user-chat-message',
  templateUrl: './user-chat-message.component.html',
  imports: [
    NgSwitch,
    NgIf,
    MatIconModule,
    ImageDirective
  ],
  styleUrls: ['./user-chat-message.component.scss']
})
export class UserChatMessageComponent {

  @Input() user: IMessageUser;
}
