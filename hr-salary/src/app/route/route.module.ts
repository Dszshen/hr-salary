import { NgModule } from '@angular/core';
import {Routes , RouterModule } from '@angular/router';

import {WorkbenchMainComponent} from '../workbench/workbench-main/workbench-main.component';
import {EmployeeMainComponent} from '../employee/employee-main/employee-main.component';
import {EmployeeAddComponent} from '../employee/employee-add/employee-add.component';
import {SalaryMainComponent} from '../salary/salary-main/salary-main.component';
import {AttendanceMainComponent} from '../attendance/attendance-main/attendance-main.component';
import {Err500Component} from '../error/err500/err500.component';
import {Err404Component} from '../error/err404/err404.component';
import {ReportMainComponent} from '../report/report-main/report-main.component';
import {EmployeeProfileComponent} from '../employee/employee-profile/employee-profile.component';

const routes: Routes = [
  {path: '', component: WorkbenchMainComponent},
  {path: 'employee', component: EmployeeMainComponent},
  {path: 'employee/add', component: EmployeeAddComponent},
  {path: 'employee/profile/:id', component: EmployeeProfileComponent},
  {path: 'attendance', component: AttendanceMainComponent},
  {path: 'salary', component: SalaryMainComponent},
  {path: 'report', component: ReportMainComponent},
  {path: 'err404', component: Err404Component},
  {path: 'err500', component: Err500Component},
  {path: '**', pathMatch: 'full', redirectTo: 'err404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [
    WorkbenchMainComponent,
    EmployeeMainComponent,
    EmployeeAddComponent,
    EmployeeProfileComponent,
    AttendanceMainComponent,
    SalaryMainComponent,
    ReportMainComponent,
    Err404Component,
    Err500Component
  ]
})
export class RouteModule { }
