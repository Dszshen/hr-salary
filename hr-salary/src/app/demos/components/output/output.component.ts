import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  stockCode:string = "IBM";
  price:number = 222;

  @Output()
  lastPrice:EventEmitter<Product> = new EventEmitter();

  constructor() {
    setInterval(()=>{
      let product:Product = new Product("东方航空",Math.random()*100);
      this.price = product.price;
      this.lastPrice.emit(product);
    },1000);
  }

  ngOnInit() {
  }

}

export class Product{
  constructor(
    public stockCode:string,
    public price:number
  ){

  }
}
