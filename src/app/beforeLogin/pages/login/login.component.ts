import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  LoginForm:FormGroup ;
  email:string=''
  password:string =''
  iseyeclicked= false;

constructor(public _logindata:FormBuilder, private authservice:AuthService, private router:Router){
  this.LoginForm = this._logindata.group({
    email: ['', [Validators.required ,Validators.email]],
    passw:['',Validators.required], 
  })
}

eyebtnclicked(){
  this.iseyeclicked = !this.iseyeclicked 
}
get useremail(){
  return this.LoginForm.get('email');
}
get paassword(){
  return this.LoginForm.get('email');
}

onLogin(data:any){
  console.log("inside login ts")
 this.email = data.email
 const tokenvalue="ghthythnjnjdsfhuytyurrhiknkjbjbvbaydgfytatdyftwebfsadjuteryuwbfabdasbysdtrweaufuasbdjfbbhgy"
 this.password = data.passw
 this.authservice.login(this.email,this.password,tokenvalue).subscribe(data =>
    {
       
    }   
  );
  }

  registerPage(){
    this.router.navigate(['/register'])
  }
  forgotpage(){
    this.router.navigate(['/forgot-password'])
  }

}
