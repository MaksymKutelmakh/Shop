import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: String;
  product: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.productsService.getProductsById(this.id).subscribe(res => {
        this.product = res;
      });
    });
  }

}
