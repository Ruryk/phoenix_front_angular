import { Component } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';
import { CMockUserMessages } from '../../../../mockData/mock.user-messages';
import { IMessageUser } from '../../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.scss']
})
export class ChatBarComponent {
  public searchChatControl: UntypedFormControl = new FormControl('');

  constructor() {}

  protected readonly CMockUserMessages = CMockUserMessages;

  openUserCard(user: IMessageUser): void {

  }
}
