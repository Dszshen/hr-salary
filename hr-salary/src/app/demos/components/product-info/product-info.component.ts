import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../output/output.component";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  price:number = 7.00;
  code:string = '东方航空';

  @Output()
  buy:EventEmitter<Product> = new EventEmitter();

  constructor() {
    setInterval(()=>{
      let product:Product = new Product("东方航空",Math.random()*100);
      this.price = product.price;
      //this.productInfo.emit(product);
    },1000);
  }

  buySomething(event:Product){
    this.buy.emit(new Product(this.code,this.price));
  };


  ngOnInit() {
  }

}
