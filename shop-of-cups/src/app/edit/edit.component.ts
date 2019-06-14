import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { ProductsService } from '../products.service';
import { Products } from '../products.module';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  products: any = {};
  updateForm: FormGroup;


  constructor(private productsService: ProductsService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private snackBar: MatSnackBar) { 
    this.createForm();
  }


  createForm() {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: '',
      height: '',
      sex: '',
      width: '',
      description: '',
      status: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.productsService.getProductsById(this.id).subscribe(res => {
        this.products = res;
        this.updateForm.get('name').setValue(this.products.name);
        this.updateForm.get('price').setValue(this.products.price);
        this.updateForm.get('sex').setValue(this.products.sex);
        this.updateForm.get('height').setValue(this.products.height);
        this.updateForm.get('width').setValue(this.products.width);
        this.updateForm.get('description').setValue(this.products.description);
        this.updateForm.get('status').setValue(this.products.status);
      
      });
    });
  }

  updateStuff(name,price,height,width,description,status,sex){
    this.productsService.updateProducts(this.id, name,price,height,width,description,status,sex).subscribe(() => {
      this.snackBar.open('Stuff updated successfully', 'OK',{
        duration: 3000
      });
    });
  }

}
