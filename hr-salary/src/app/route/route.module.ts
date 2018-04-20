import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
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
import {WorkingShiftComponent} from '../attendance/working-shift/working-shift.component';
import {SalaryDetailComponent} from '../salary/salary-detail/salary-detail.component';
import {SalaryStandardComponent} from '../salary/salary-standard/salary-standard.component';


const routes: Routes = [
  {path: '', redirectTo:'/workbench',pathMatch:'full'},//重定向路由
  {path: 'workbench', component: WorkbenchMainComponent},
  {path: 'employee', component: EmployeeMainComponent,children:[
    {path: 'add', component: EmployeeAddComponent},
    {path: 'profile/:id', component: EmployeeProfileComponent}
  ]},
  /*{path: 'employee/add', component: EmployeeAddComponent},
  {path: 'employee/profile/:id', component: EmployeeProfileComponent},*/
  {path: 'attendance', component: AttendanceMainComponent},
  {path: 'attendance/workingShift', component: WorkingShiftComponent},
  {path: 'salary', component: SalaryMainComponent},
  {path: 'salary/detail', component: SalaryDetailComponent},
  {path: 'salary/standard', component: SalaryStandardComponent},
  {path: 'report', component: ReportMainComponent},
  {path: 'err404', component: Err404Component},
  {path: 'err500', component: Err500Component},
  {path: '**', pathMatch: 'full', redirectTo: 'err404'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [
    WorkbenchMainComponent,
    EmployeeMainComponent,
    EmployeeAddComponent,
    EmployeeProfileComponent,
    AttendanceMainComponent,
    WorkingShiftComponent,
    SalaryMainComponent,
    SalaryDetailComponent,
    SalaryStandardComponent,
    ReportMainComponent,
    Err404Component,
    Err500Component
  ]
})
export class RouteModule { }
