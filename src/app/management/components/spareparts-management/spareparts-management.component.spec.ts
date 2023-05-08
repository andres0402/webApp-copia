import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartsManagementComponent } from './spareparts-management.component';

describe('SparepartsManagementComponent', () => {
  let component: SparepartsManagementComponent;
  let fixture: ComponentFixture<SparepartsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparepartsManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparepartsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
