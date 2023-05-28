import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-emitter-child',
  templateUrl: './event-emitter-child.component.html',
  styleUrls: ['./event-emitter-child.component.css'],
})
export class EventEmitterChildComponent {
  outputForParent: string = '';
  @Output()
  outputForParentChange: EventEmitter<string> = new EventEmitter<string>();

  updateOutputForParent(e: Event) {
    this.outputForParent = (e.target as HTMLInputElement).value;
    this.outputForParentChange.emit(this.outputForParent);
  }
}
