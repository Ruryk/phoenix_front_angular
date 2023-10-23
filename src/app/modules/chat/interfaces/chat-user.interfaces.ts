import { HttpErrorResponse } from '@angular/common/http';

export interface IChatUser {
  id: string;
  pictureUrl: string;
  userName: string;
  userTagName: string;
  notificationsAllowed: boolean;
  chatFiles: IChatFile[];
  chatImages: IChatFile[];
}

export interface IChatState {
  selectedUserForChat: IChatUser | null;
  isLoading: boolean;
  error: HttpErrorResponse | null;
}

export interface IChatFile {
  id: string;
  value?: string;
  pictureUrl?: string;
}
