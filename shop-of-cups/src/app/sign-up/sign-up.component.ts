import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.addUser("max",'dsd',"dsfsdf",{"sd":"ds"},{"sd":"ds"}).subscribe(() =>{
      this.userService.getUser().subscribe((users) => {
        console.log(users);
      });
    });
    console.log('d');

    this.userService.getUser().subscribe((users) => {
      console.log(users);
    });

    this.userService.getUserById("5cf76c0cd3e5aa1e2cbea176").subscribe((user) => {
      console.log(user);
    })
    
  }

}
