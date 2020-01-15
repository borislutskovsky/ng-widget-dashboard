import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDashboardColumnComponent } from './ng-dashboard-column.component';

describe('NgDashboardColumnComponent', () => {
  let component: NgDashboardColumnComponent;
  let fixture: ComponentFixture<NgDashboardColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDashboardColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDashboardColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
