import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent implements OnInit {
  currentLang: string = environment.defaultLanguage;
  languages: string[] = environment.languages;

  constructor(private translate: TranslateService,
              public languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang;
  }

  changeLang(ln: string): void {
    this.languageService.changeLanguage(ln);
    this.translate.use(ln);
    this.translate.currentLang = ln;
    this.currentLang = ln;
  }
}
