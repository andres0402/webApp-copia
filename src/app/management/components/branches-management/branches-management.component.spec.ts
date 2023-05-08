import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesManagementComponent } from './branches-management.component';

describe('BranchesManagementComponent', () => {
  let component: BranchesManagementComponent;
  let fixture: ComponentFixture<BranchesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchesManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
