import { Component, OnInit, Input } from '@angular/core';
import { Dashboard } from "./dashboard";

@Component({
  selector: 'ng-dashboard',
  templateUrl: 'ng-dashboard.component.html',
  styles: []
})
export class NgDashboardComponent implements OnInit {
  @Input() dashboard: Dashboard;
  configuration: {
    columns: [
      
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
