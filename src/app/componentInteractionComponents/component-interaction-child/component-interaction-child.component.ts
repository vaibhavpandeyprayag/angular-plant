import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction-child',
  templateUrl: './component-interaction-child.component.html',
  styleUrls: ['./component-interaction-child.component.css'],
})
export class ComponentInteractionChildComponent {
  outputForParent: string = '';
  @Output()
  outputForParentChange: EventEmitter<string> = new EventEmitter<string>();

  updateOutputForParent(e: Event) {
    this.outputForParent = (e.target as HTMLInputElement).value;
    this.outputForParentChange.emit(this.outputForParent);
  }
}
