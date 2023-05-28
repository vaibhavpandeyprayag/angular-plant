import { Component } from '@angular/core';

@Component({
  selector: 'app-component-interaction-parent',
  templateUrl: './component-interaction-parent.component.html',
  styleUrls: ['./component-interaction-parent.component.css'],
})
export class ComponentInteractionParentComponent {
  outputFromChild: string = '';

  updateOutputFromChild(output: string) {
    this.outputFromChild = output;
  }
}
