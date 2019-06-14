import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';


import { ProductsService } from '../products.service';
import { Products } from '../products.module';
import { UserService } from '../user.service';
import { User } from  '../user.module';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginatorForStuff: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginatorForUsers: MatPaginator;
  // products: Products[];
  // users: User[];
  dataSourceForStuff: any;
  dataSourceForUsers: any;
  
  
  displayedColumnsForStuff = ['name', 'price', 'sex', 'height', 'width', 'description', 'Stuff image', 'status',  'action' ];

  displayedColumnsForUsers = ['name', 'email', 'password', 'order', 'bought' , 'action'];

  constructor(private productsService: ProductsService, private userService: UserService, private router: Router) {}

  ngOnInit() {
    // this.getUsers();
    // this.getStuff();
  
    this.userService.getUser().subscribe((data:User[]) => {
      this.dataSourceForUsers = new MatTableDataSource<User>(data);
      console.log(this.dataSourceForUsers);
      this.dataSourceForUsers.paginator = this.paginatorForStuff;
    });

    this.productsService.getProducts().subscribe((data:Products[]) => {
      this.dataSourceForStuff = new MatTableDataSource<Products>(data);
      this.dataSourceForStuff.paginator = this.paginatorForUsers;
    });

    
  }

  // getStuff(){
  //   this.productsService.getProducts()
  //   .subscribe((data:Products[])=>{
  //     this.products = data;
  //     console.log(this.products);
  //   });
  // }

  editStuff(id){
    this.router.navigate([`/edit/${id}`]);
  }

  deleteStuff(id){
    this.productsService.deleteProducts(id).subscribe(() => {
      this.productsService.getProducts().subscribe((data:Products[]) => {
        this.dataSourceForStuff = new MatTableDataSource<Products>(data);
        this.dataSourceForStuff.paginator = this.paginatorForUsers;
      });
    });
  }

  // getUsers(){
  //   this.userService.getUser()
  //   .subscribe((data: User[]) => {
  //     this.users = data;
  //     console.log(this.users);
  //   });
  // }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(() => {
      this.userService.getUser().subscribe((data:User[]) => {
        this.dataSourceForUsers = new MatTableDataSource<User>(data);
        console.log(this.dataSourceForUsers);
        this.dataSourceForUsers.paginator = this.paginatorForStuff;
      });
    });
  }

  
}


