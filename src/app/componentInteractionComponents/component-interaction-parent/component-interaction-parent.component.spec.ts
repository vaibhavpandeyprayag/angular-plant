import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterParentComponent } from './component-interaction-parent.component';

describe('EventEmitterParentComponent', () => {
  let component: EventEmitterParentComponent;
  let fixture: ComponentFixture<EventEmitterParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventEmitterParentComponent],
    });
    fixture = TestBed.createComponent(EventEmitterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
