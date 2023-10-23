import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public language: BehaviorSubject<string> = new BehaviorSubject<string>(environment.defaultLanguage);

  changeLanguage(ln: string): void {
    this.language.next(ln)
  }
}
