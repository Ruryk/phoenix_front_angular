import { Component } from '@angular/core';
import { CMockUserCard } from '../../../../mockData/mock-user-card';

@Component({
  selector: 'app-chat-wrap',
  templateUrl: './chat-wrap.component.html',
  styleUrls: ['./chat-wrap.component.scss']
})
export class ChatWrapComponent {

  protected readonly CMockUserCard = CMockUserCard;
}
