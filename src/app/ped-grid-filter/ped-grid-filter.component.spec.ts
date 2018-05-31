import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedGridFilterComponent } from './ped-grid-filter.component';

describe('PedGridFilterComponent', () => {
  let component: PedGridFilterComponent;
  let fixture: ComponentFixture<PedGridFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedGridFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedGridFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
