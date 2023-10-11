import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './components/chat/chat.component';
import { ChatBarComponent } from './components/chat-bar/chat-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/materials.module';
import { ChatWrapComponent } from './components/chat-wrap/chat-wrap.component';
import { UserInfoCardComponent } from '../../shared/components/user-info-card/user-info-card.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserChatMessageComponent } from '../../shared/components/user-chat-message/user-chat-message.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChatBarComponent,
    ChatWrapComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    TranslateModule,
    MaterialModule,
    UserInfoCardComponent,
    InputComponent,
    ReactiveFormsModule,
    UserChatMessageComponent
  ]
})
export class ChatModule {
}
