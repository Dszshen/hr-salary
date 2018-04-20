import { Component, OnInit } from '@angular/core';
import {User, UserService} from "../../services/user.service";
import {EmployeeService} from "../../services/employee.service";
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.pug',
  styleUrls: ['./employee-main.component.scss'],
  providers:[{
    provide:UserService,useClass:EmployeeService
  }]
})
export class EmployeeMainComponent implements OnInit {

  users:User[];

  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
    this.users=this.userService.getUsers();
  }
}
