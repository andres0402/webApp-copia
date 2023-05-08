import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardExtendedComponent } from './event-card-extended.component';

describe('EventCardExtendedComponent', () => {
  let component: EventCardExtendedComponent;
  let fixture: ComponentFixture<EventCardExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCardExtendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCardExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
