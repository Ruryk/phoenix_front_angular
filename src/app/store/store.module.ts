import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/auth.effects';
import { authFeatureKey, authReducer } from './auth/auth.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { chatFeatureKey, chatReducer } from './chat/chat.reducer';

@NgModule({
  imports: [
    EffectsModule.forRoot([
      AuthEffects
    ]),
    StoreModule.forRoot({
      [authFeatureKey]: authReducer,
      [chatFeatureKey]: chatReducer,
    }),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [
    AuthEffects
  ],
})
export class AppStoreModule {
}
