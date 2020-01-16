import { Component, OnInit, Input } from '@angular/core';
import { Column } from "../column";

@Component({
  selector: 'ng-dashboard-column',
  templateUrl: './ng-dashboard-column.component.html',
  styleUrls: ['./ng-dashboard-column.component.scss']
})
export class NgDashboardColumnComponent implements OnInit {
  @Input() column: Column;
  constructor() { }

  ngOnInit() {
  }

}
