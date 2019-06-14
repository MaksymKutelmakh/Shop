import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForProductsPipe } from '../for-products.pipe';


import { ProductsService } from '../products.service';
import { Products } from '../products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[];
  p: number = 1;

  isMen: boolean;
  isWomen: boolean;
  isChild: boolean;
  isAll: boolean = true;
  

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  seeAllProducts(){
    this.isAll = true;
    this.isMen = false;
    this.isChild = false;
    this.isWomen = false;
  }

  getProducts(){
    this.productsService.getProducts().subscribe((data: Products[]) => {
      this.products = data;
    });
  }

  showProduct(id){
    this.router.navigate(['/product/'+ id]);
    setTimeout(() => {
      window.location.href += "#product";
      console.log(window.location.href);
    }, 100);
  }

}
