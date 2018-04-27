import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  stockCode:string;//股票代码

  @Input()
  amount:string;//数量

  constructor() { }

  ngOnInit() {
  }

}
