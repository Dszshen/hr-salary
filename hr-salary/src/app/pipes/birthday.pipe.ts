import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthday'
})
export class BirthdayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return '生日filter';
  }

}
