import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoaderIsOn } from './store/loader/loader.selectors';
import { IconsService } from './services/icons.service';
import { environment } from '../environment/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly store: Store = inject(Store);
  private readonly iconService: IconsService = inject(IconsService);
  private readonly translate: TranslateService = inject(TranslateService);

  public backgroundImg?: string;
  public isLoaderOn$ = this.store.select(selectLoaderIsOn);

  constructor() {

    const langCode = localStorage.getItem('langCode') || 'uk';

    this.translate.setDefaultLang(environment.defaultLanguage);
    if (langCode) {
      this.translate.use(langCode);
    }

    this.iconService.registryIcons();
  }

  ngOnInit() {

  }
}
