import { NgModule, TransferState } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { MainSidebarComponent } from './shared/components/main-sidebar/main-sidebar.component';
import { MaterialModule } from './modules/material/materials.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environment/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MainComponent } from './shared/components/main/main.component';
import { AppStoreModule } from './store/store.module';
import { LangSwitcherComponent } from './shared/components/lang-switcher/lang-switcher.component';
import { ImageDirective } from './shared/directives/image.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainSidebarComponent,
    MainComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppStoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient, TransferState],
      },
      defaultLanguage: environment.defaultLanguage,
    }),
    LangSwitcherComponent,
    ImageDirective,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [TranslateModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
