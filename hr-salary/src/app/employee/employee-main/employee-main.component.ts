import { Component, OnInit } from '@angular/core';
import {User, UserService} from "../../services/user.service";
import {EmployeeService} from "../../services/employee.service";
import {LoggerService} from "../../services/logger.service";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.pug',
  styleUrls: ['./employee-main.component.scss']
/*  providers:[{
    provide:UserService,useClass:EmployeeService
  }]*/
})
export class EmployeeMainComponent implements OnInit {

  users:User[];
  colspanSize:number = 9;
  spanColor:string;
  divClass:any = {
    "red-color":false
  };
  styleStr:boolean = false;
  divStyle:any = {
    'fontSize':'14px'
  };

  birthday:string = 'aaaa';

  ngModelValue:string;

  searchKey:FormControl = new FormControl();

  constructor(
    private userService:UserService
  ) {
    this.searchKey.valueChanges
      .debounceTime(500)
      .subscribe(inputValue => this.getInputValue(inputValue));
  }

  ngOnInit() {
    this.users=this.userService.getUsers();
    setTimeout(()=>{
      this.spanColor = 'red-color';
      this.divClass = {
        "red-color":true
      };
      this.styleStr=true;
      this.divStyle = {
        'fontSize':'20px'
      };
    },2000);

    /*setInterval(()=>{
      this.ngModelValue = "aaaa";
    },2000);*/
  }

  getInputValue(val){
    console.log(val);
  };
}
