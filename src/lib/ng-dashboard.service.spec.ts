import { TestBed } from '@angular/core/testing';

import { NgDashboardService } from './ng-dashboard.service';

describe('NgDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgDashboardService = TestBed.get(NgDashboardService);
    expect(service).toBeTruthy();
  });
});
