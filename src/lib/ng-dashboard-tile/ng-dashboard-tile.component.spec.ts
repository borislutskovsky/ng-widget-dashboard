import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDashboardTileComponent } from './ng-dashboard-tile.component';

describe('NgDashboardTileComponent', () => {
  let component: NgDashboardTileComponent;
  let fixture: ComponentFixture<NgDashboardTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDashboardTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDashboardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
