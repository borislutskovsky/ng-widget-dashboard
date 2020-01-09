import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDashboardSectionComponent } from './ng-dashboard-section.component';

describe('NgDashboardSectionComponent', () => {
  let component: NgDashboardSectionComponent;
  let fixture: ComponentFixture<NgDashboardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDashboardSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDashboardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
