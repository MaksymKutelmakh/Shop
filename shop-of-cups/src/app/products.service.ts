import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://localhost:4000';

  constructor(private http: HttpClient ) { }

  getProducts(){
    return this.http.get(`${this.url}/products`);
  }

  getProductsById(id){
    return this.http.get(`${this.url}/product/${id}`);
  }
  
  updateProducts(id, name, price, height, width, description, status, sex){
    const product = {
      name: name,
      price: price,
      height: height,
      width: width,
      description: description,
      status: status,
      sex: sex
    };
    return this.http.post(`${this.url}/products/update/${id}`, product);
  }

  deleteProducts(id){
    return this.http.get(`${this.url}/products/delete/${id}`);
  }
}
