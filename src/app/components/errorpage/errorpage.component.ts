import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/authentication/auth.service';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})

export class ErrorpageComponent {
  authenticateduser: any;
  linkto:any;
constructor(private auth:AuthService){
this.authenticateduser = this.auth.isLoggedIn()
if(this.authenticateduser){
  this.linkto = '/home'
}
else{
  this.linkto='/login'
}
}


}
