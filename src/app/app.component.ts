import { Component } from '@angular/core';
import { AuthService } from './Services/authentication/auth.service';

@Component({
  //selector attribute is used as a html element
  selector: 'app-root',
  //it is used to show the path of the html this is a view template
  templateUrl: './app.component.html',
  //
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'employeeProject';
  authenticated = false;

  constructor(private authservice:AuthService){
    this.authenticated =  this.authservice.isLoggedIn()
   }

  logoutUser(){
   
    this.authservice.logout();
  }
  
}
//like component ,a directive also a typescript class and decorated with @Directive decorator
// <div changetoGreen> some content </div>

// @Directive({
//   selector:'[changetoGreen]'
// })
// export class changetoGreen

//directives of 3 types 1.component directive 2. attribute directve([ngStyle]={fontWeight:isprod?'bold','normal'}')  3.structuraldirective (*ngFor or *ngIf)