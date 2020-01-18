import { Component, OnInit, Input } from '@angular/core';
import { Section } from "../section";

@Component({
  selector: 'ng-dashboard-section',
  templateUrl: './ng-dashboard-section.component.html',
  styleUrls: ['./ng-dashboard-section.component.scss']
})
export class NgDashboardSectionComponent implements OnInit {
  @Input() section: Section;
  constructor() { }

  ngOnInit() {
  }

}
