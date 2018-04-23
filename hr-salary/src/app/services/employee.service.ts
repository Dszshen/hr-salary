import { Injectable } from '@angular/core';
import {User, UserService} from "./user.service";
import {LoggerService} from "./logger.service";

@Injectable()
export class EmployeeService implements UserService{

  constructor(
    public logger:LoggerService
  ) { }

  getUsers():User[]{
    this.logger.logInfo("EmployeeService");
    let users:User[] = [];
    for(let i=0;i<10;i++){
      users.push(new User('zs00'+i,'张三毛'+i,'139000000'+i,'email'+i+'@email.com'));
    }
    return users;
  }

}
