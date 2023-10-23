import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IChatState, IChatUser } from '../../modules/chat/interfaces/chat-user.interfaces';
import { chatFeatureKey } from './chat.reducer';

export const getChatState = createFeatureSelector<IChatState>(chatFeatureKey);

export const selectChatUserData = createSelector(getChatState,
  (state: IChatState): IChatUser => state.selectedUserForChat);
