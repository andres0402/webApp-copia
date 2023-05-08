import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementScreenComponent } from './management-screen.component';

describe('ManagementScreenComponent', () => {
  let component: ManagementScreenComponent;
  let fixture: ComponentFixture<ManagementScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
