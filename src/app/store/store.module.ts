import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/auth.effects';
import { authFeatureKey, authReducer, IAuthState } from './auth/auth.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { chatFeatureKey, chatReducer } from './chat/chat.reducer';
import { ILoaderState, loaderFeatureKey, loaderReducer } from './loader/loader.reducer';
import { IChatState } from '../modules/chat/interfaces/chat-user.interfaces';
import { LoaderEffects } from './loader/loader.effects';
import { ISettingsState, settingsFeatureKey, settingsReducer } from './settings/settings.reducer';
import { SettingsEffects } from './settings/settings.effects';

export interface IAppState {
  [authFeatureKey]: IAuthState;
  [loaderFeatureKey]: ILoaderState;
  [chatFeatureKey]: IChatState;
  [settingsFeatureKey]: ISettingsState;
}

@NgModule({
  imports: [
    EffectsModule.forRoot([
      AuthEffects, LoaderEffects, SettingsEffects
    ]),
    StoreModule.forRoot({
      [authFeatureKey]: authReducer,
      [loaderFeatureKey]: loaderReducer,
      [chatFeatureKey]: chatReducer,
      [settingsFeatureKey]: settingsReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ]
})
export class AppStoreModule {
}
