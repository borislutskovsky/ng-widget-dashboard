import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDashboardComponent } from './ng-dashboard.component';
import { NgDashboardSectionComponent } from './ng-dashboard-section/ng-dashboard-section.component';
import { NgDashboardColumnComponent } from './ng-dashboard-column/ng-dashboard-column.component';
import { NgDashboardTileComponent } from './ng-dashboard-tile/ng-dashboard-tile.component';



@NgModule({
  declarations: [NgDashboardComponent, NgDashboardSectionComponent, NgDashboardColumnComponent, NgDashboardTileComponent],
  imports: [
    CommonModule
  ],
  exports: [NgDashboardComponent]
})
export class NgDashboardModule { }
