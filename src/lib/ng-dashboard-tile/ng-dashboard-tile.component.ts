import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../widget';

@Component({
  selector: 'ng-dashboard-tile',
  templateUrl: './ng-dashboard-tile.component.html',
  styleUrls: ['./ng-dashboard-tile.component.scss']
})
export class NgDashboardTileComponent implements OnInit {
  @Input() widget: Widget;
  
  constructor() { }

  ngOnInit() {
  }

}
