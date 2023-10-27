import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { IThemeSettings } from '../modules/settings/interfaces/theme.interfaces';

export enum EVariablesColor {
  main = '--main',
  mainOpacity = '--main-opacity',
  mainText = '--main-text',
  mainBack = '--main-background',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly http: HttpClient = inject(HttpClient);
  private apiUrl: string = environment.localApiUrl;

  getUserThemeSettings(): Observable<IThemeSettings> {
    return this.http.get<IThemeSettings>(`${this.apiUrl}settings/theme`);
  }

  changeUserThemeSettings(theme: IThemeSettings): Observable<IThemeSettings> {
    return this.http.post<IThemeSettings>(`${this.apiUrl}settings/theme`, theme);
  }

  toggleMainColor(color: string): void {
    document.documentElement.style.setProperty(EVariablesColor.main, this.hexToRGB(color));
    document.documentElement.style.setProperty(EVariablesColor.mainOpacity, this.hexToRGB(color, 0.2));
  }

  toggleTextColor(color: string): void {
    document.documentElement.style.setProperty(EVariablesColor.mainText, this.hexToRGB(color));
  }

  toggleBackgroundColor(color: string): void {
    document.documentElement.style.setProperty(EVariablesColor.mainBack, color);
  }

  hexToRGB(hexColor: string, opacity?: number): string {
    hexColor = hexColor.replace('#', '');

    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);

    return opacity ? `rgba(${r}, ${g}, ${b}, ${opacity})` : `rgb(${r}, ${g}, ${b})`;
  }

  convertGradientToString(gradient: string): string[] {
    return gradient.match(/rgba\([^()]*\)|#\w+/g);
  }
}
