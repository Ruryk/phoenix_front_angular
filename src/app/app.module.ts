import { NgModule, TransferState } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { AuthEffects } from './store/auth/auth.effects';
import { LoaderEffects } from './store/loader/loader.effects';
import { appState } from './store/app.state';
import { MainSidebarComponent } from './shared/components/main-sidebar/main-sidebar.component';
import { MaterialModule } from './modules/material/materials.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environment/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MainComponent } from './shared/components/main/main.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainSidebarComponent,
    MainComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(appState),
    EffectsModule.forRoot([AuthEffects, LoaderEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient, TransferState],
      },
      defaultLanguage: environment.defaultLanguage,
    }),
  ],
  providers: [
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  exports: [TranslateModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
