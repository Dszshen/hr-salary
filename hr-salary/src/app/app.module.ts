import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import {RouteModule} from './route/route.module';


import { AppComponent } from './app.component';
import {HeaderComponent} from './templates/header/header.component';
import {LoggerService} from "./services/logger.service";
import {EmployeeService} from "./services/employee.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    RouteModule,
    BrowserModule,
    MaterialModule
  ],
  providers:[EmployeeService,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
