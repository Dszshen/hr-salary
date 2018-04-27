import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../output/output.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input()
  productInfo:Product;

  constructor() {

  }

  ngOnInit() {
  }

}
