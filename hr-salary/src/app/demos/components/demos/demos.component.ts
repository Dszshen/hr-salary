import { Component, OnInit } from '@angular/core';
import {Product} from '../output/output.component';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent implements OnInit {

  stockCode:string;

  product:Product = new Product('',0);


  productInfo:Product = new Product('东方航空',7.88);

  constructor() { }

  ngOnInit() {
  }

  getProductInfo(event:Product){
    this.product = event;
  }

  //购买商品
  buyProduct(event:Product){
    console.log("event--->",event);
    this.productInfo = event;
  }

}
