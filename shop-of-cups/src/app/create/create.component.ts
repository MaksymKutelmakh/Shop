import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder , FormGroup,  Validators } from '@angular/forms';



import { ProductsService } from '../products.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router) { }

  addStuff(){
    this.router.navigate(['/admin']);
  }
  
  ngOnInit() {
  }
}
