import { NgModule } from '@angular/core';
import { NgDashboardComponent } from './ng-dashboard.component';
import { NgDashboardSectionComponent } from './ng-dashboard-section/ng-dashboard-section.component';



@NgModule({
  declarations: [NgDashboardComponent, NgDashboardSectionComponent],
  imports: [
  ],
  exports: [NgDashboardComponent]
})
export class NgDashboardModule { }
