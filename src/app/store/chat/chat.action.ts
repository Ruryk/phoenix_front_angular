import { createAction, props } from '@ngrx/store';
import { IChatUser } from '../../modules/chat/interfaces/chat-user.interfaces';

export const SELECT_CHAT_USER = '[CHAT] select chat user';
export const REMOVE_CHAT_USER = '[CHAT] remove chat user';

export const selectChatUser = createAction(
  SELECT_CHAT_USER,
  props<{ payload: IChatUser }>()
)
export const removeChatUser = createAction(
  REMOVE_CHAT_USER,
  props<{ payload: IChatUser }>()
)
