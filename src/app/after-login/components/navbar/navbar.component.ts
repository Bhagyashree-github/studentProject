import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggle = false;
  constructor(private authservice:AuthService){

  }
  logoutUser(){
   
    this.authservice.logout();
  }
  showmenu(){
    this.toggle = !this.toggle;
    if(this.toggle){
      document.getElementById( 'navlistlink')?.classList.remove("hidden")
    }
    else{
      document.getElementById( 'navlistlink')?.classList.add("hidden")
    }
  }
  hidemenu(){
    document.getElementById( 'navlistlink')?.classList.add("hidden")
    this.toggle = false;
  }

}
