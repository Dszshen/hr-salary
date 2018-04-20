import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  logInfo(str:string){
    console.log("日志信息："+str);
  }
}
