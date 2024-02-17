import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAttributeDirectiveWithInput]',
})
export class AttributeDirectiveWithInputDirective implements AfterViewInit {
  @Input() appAttributeDirectiveWithInput: any;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.backgroundColor =
      this.appAttributeDirectiveWithInput;
    // this.elRef.nativeElement.style.color = 'white';
  }
}
