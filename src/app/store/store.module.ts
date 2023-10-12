import { isDevMode, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/auth.effects';
import { authFeatureKey, authReducer } from './auth/auth.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    EffectsModule.forRoot([
      AuthEffects
    ]),
    StoreModule.forRoot({
      [authFeatureKey]: authReducer,
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
  ],
  providers: [
    AuthEffects
  ],
})
export class AppStoreModule {
}
