import { Component } from '@angular/core';
import { IconsService } from './services/icons.service';
import { environment } from '../environment/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private iconService: IconsService,
              translate: TranslateService,
  ) {

    const langCode = localStorage.getItem('langCode') || 'uk';

    translate.setDefaultLang(environment.defaultLanguage);
    if (langCode) {
      translate.use(langCode);
    }

    iconService.registryIcons();
  }
}
