import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('page', { read: ElementRef }) page: ElementRef;
  @ViewChild('log', { read: ElementRef }) log: ElementRef;
  title = 'app works!';
  scale = 1;
  tap() {
    this.setMessage('tap');
    console.log('tap!');
}
  onPinchStart() {
   // this.setMessage('start pinch');
    // console.log('start pinch');
  }
  onPinchMove(ev: HammerInput) {
    // this.setMessage('onPinchMove')
    this.setMessage(`scale:  ${ev.scale}`);
    const newScale = this.scale * ev.scale;
    this.page.nativeElement.style.transform = 'scale(' + newScale + ')';
  }
  setMessage(message: string) {
    (this.log.nativeElement as HTMLElement).innerHTML = message;
  }
}
