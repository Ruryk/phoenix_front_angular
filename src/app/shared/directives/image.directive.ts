import { Attribute, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[imgDir]',
  standalone: true
})
export class ImageDirective {

  constructor(@Attribute('onErrorSrc') public onErrorSrc: string,
              private el: ElementRef) {
  }

  @HostListener('error') onError(): void {
    const userErrorImage = this.onErrorSrc ?? './assets/images/avatar-empty.jpeg';
    this.el.nativeElement.setAttribute('src', userErrorImage);
  }

}
