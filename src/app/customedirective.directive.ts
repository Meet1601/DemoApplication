import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomedirective]'
})
export class CustomedirectiveDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color="#cc00ff"
   }

}
