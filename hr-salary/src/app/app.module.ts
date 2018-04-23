import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import {RouteModule} from './route/route.module';


import { AppComponent } from './app.component';
import {HeaderComponent} from './templates/header/header.component';
import {LoggerService} from "./services/logger.service";
import {EmployeeService} from "./services/employee.service";
import {UserService} from "./services/user.service";

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
  /*providers:[EmployeeService,LoggerService],*/
  providers:[{//工厂提供器注入
      provide:UserService,
      useFactory:(logInfo:LoggerService,env)=>{
        if(env.isDev){
          return new UserService(logInfo);
        }else{
          return new EmployeeService(logInfo);
        }
      },
      deps:[LoggerService,'ENV_CONFIG']
    },LoggerService,
    {
      provide:'ENV_CONFIG',useValue:{idDev:false}
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
