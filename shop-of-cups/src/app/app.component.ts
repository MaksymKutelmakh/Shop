import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  forTransferStr: any;
  
  jumpto (path: string) {
    setTimeout(() => {
      if(path === 'top'){
        this.forTransferStr =  window.location.href.indexOf('#');
        window.location.href = window.location.href.slice(0,this.forTransferStr+1);
      }
      window.location.href += "#"+path;
      console.log(window.location.href);
    }, 100);
  }
}
