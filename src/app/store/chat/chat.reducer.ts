import { createReducer, on } from '@ngrx/store';
import { IChatState } from '../../modules/chat/interfaces/chat-user.interfaces';
import { removeChatUser, selectChatUser } from './chat.action';
import { CMockUserCard } from '../../mockData/mock-user-card';

export const chatFeatureKey = 'chat';
export const initialChatState: IChatState = {
  selectedUserForChat: CMockUserCard,
  isLoading: false,
  error: null
}

export const chatReducer = createReducer(
  initialChatState,
  on(selectChatUser, (state, {payload}) => ({
    ...state,
    selectedUserForChat: payload,
    error: null
  })),
  on(removeChatUser, (state, {payload}) => ({
    ...state,
  })),
);
