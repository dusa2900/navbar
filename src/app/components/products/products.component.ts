import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList:any;
  constructor(private _productservice:ProductService) { }

  ngOnInit(): void {
   this.products();
  }

products()
{
  this._productservice.getProducts().subscribe(
    res=>{
      this.productList=res;
    },err=>
    {
      console.log(err);
    }
  )
}

}
