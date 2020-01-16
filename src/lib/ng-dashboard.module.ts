import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDashboardComponent } from './ng-dashboard.component';
import { NgDashboardSectionComponent } from './ng-dashboard-section/ng-dashboard-section.component';
import { NgDashboardColumnComponent } from './ng-dashboard-column/ng-dashboard-column.component';
import { NgDashboardTileComponent } from './ng-dashboard-tile/ng-dashboard-tile.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [NgDashboardComponent, NgDashboardSectionComponent, NgDashboardColumnComponent, NgDashboardTileComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [NgDashboardComponent]
})
export class NgDashboardModule { }
