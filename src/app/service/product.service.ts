import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

public apiUrl:string="https://fakestoreapi.com/products";
  constructor(private _http:HttpClient) { }

getProducts()
{
 return this._http.get(this.apiUrl);
}
}
