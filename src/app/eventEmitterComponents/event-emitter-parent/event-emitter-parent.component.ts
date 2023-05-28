import { Component } from '@angular/core';

@Component({
  selector: 'app-event-emitter-parent',
  templateUrl: './event-emitter-parent.component.html',
  styleUrls: ['./event-emitter-parent.component.css'],
})
export class EventEmitterParentComponent {
  outputFromChild: string = '';

  updateOutputFromChild(output: string) {
    this.outputFromChild = output;
  }
}
