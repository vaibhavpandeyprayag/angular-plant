import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]',
})
export class AttributeDirectiveDirective implements AfterViewInit {
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = 'green';
  }
}
