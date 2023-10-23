import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CSvgIcons } from '../shared/constants/icons-svg.constant';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
  }

  registryIcons(): void {
    CSvgIcons.forEach(({name, path}) =>
      this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(path)));
  }
}
