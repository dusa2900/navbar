import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service';

@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.scss']
})
export class ProductOneComponent implements OnInit {
public product:any;
  constructor(private _productOne:ProductService) { }

  ngOnInit(): void {
    this.productOne();
  }

  productOne()
  {
    this._productOne.getProducts().subscribe(res=>
      {
        this.product=res;
      },err=>
      {
        console.log(err);
      })
  }

}
