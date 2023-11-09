import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter();

  @Input() excludeElements: HTMLElement[] = [];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    const clickedInsideContainer = this.isClickedInsideContainer(event);
    const clickedInsideExcludedElement = this.isClickedInsideExcludedElement(event);

    if (!clickedInsideContainer && !clickedInsideExcludedElement) {
      this.emitClickOutsideEvent(event);
    }
  }

  private isClickedInsideContainer(event: MouseEvent): boolean {
    return this.elementRef.nativeElement.contains(event.target as HTMLElement);
  }

  private isClickedInsideExcludedElement(event: MouseEvent): boolean {
    return this.excludeElements.some(element => element.contains(event.target as HTMLElement));
  }

  private emitClickOutsideEvent(event: MouseEvent): void {
    this.clickOutside.emit(event);
  }
}
