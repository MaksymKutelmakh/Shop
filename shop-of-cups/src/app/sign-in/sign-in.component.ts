import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  jumpto (path: string) {
    setTimeout(() => {
      window.location.href += "#"+path;
      console.log(window.location.href);
    }, 100);
  }

}
