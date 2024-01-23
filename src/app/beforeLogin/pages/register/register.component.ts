import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/authentication/auth.service';
import { RegisterService } from 'src/app/Services/authentication/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  RegisterForm:FormGroup ;
  userName:string=''
  password:string =''
  email:string=''
  iseyeclicked= false;
  constructor( public _registerdata:FormBuilder,private router:Router,private _registerdetails:RegisterService, private toastr: ToastrService, private authservice:AuthService, private registerService:RegisterService){
    this.RegisterForm = this._registerdata.group({
      username: ['', [Validators.required, Validators.maxLength(40) ,Validators.pattern('^[A-Za-z\s]+$')]],
      useremail: ['', [Validators.required, Validators.email]],
      passw:['',[Validators.required ]],
      // ,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
      cpassw:['',Validators.required],
    })
  }
  eyebtnclicked(){
    this.iseyeclicked = !this.iseyeclicked
    
  }
  get Username(){
    return this.RegisterForm.get('username')
  }
  get useremail(){
    return this.RegisterForm.get('useremail')
  }
  get paassword(){
    return this.RegisterForm.get('passw')
  }
  get confpass(){
    return this.RegisterForm.get('cpassw')
  }

  onRegister(data:any){
    if(data.passw == data.cpassw){
      console.log("inside onregister",data)
       this.authservice.register(data).subscribe(data =>
        {
          if(data)
          {
            this.router.navigate(['login'])
          }
        }   
      );
      this.toastr.success("Registration successful")

     
    }
    else{
      this.toastr.error("password does not match")
    }
 
     }


  loginPage(){
    this.router.navigate(['/login'])
  }

}
