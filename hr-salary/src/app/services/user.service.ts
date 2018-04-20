import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class UserService {

  constructor(
  ) { }

  getUsers():User[]{
    let users:User[] = [];
    for(let i=0;i<10;i++){
      users.push(new User('zs00'+i,'张三'+i,'139000000'+i,'email'+i+'@email.com'));
    }
    return users;
  }
}

export class User{
  constructor(
    public id:string,
    public name:string,
    public mobile:string,
    public email:string
  ){

  }
}
