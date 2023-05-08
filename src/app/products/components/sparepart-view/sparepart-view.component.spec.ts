import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartViewComponent } from './sparepart-view.component';

describe('SparepartViewComponent', () => {
  let component: SparepartViewComponent;
  let fixture: ComponentFixture<SparepartViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparepartViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparepartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
