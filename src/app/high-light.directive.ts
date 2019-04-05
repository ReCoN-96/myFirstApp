import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit{

  @HostBinding('style.backgroundColor') myBackgroundColor: string;
 // constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
  //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.myBackgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.myBackgroundColor = 'transparent';
  }
}
