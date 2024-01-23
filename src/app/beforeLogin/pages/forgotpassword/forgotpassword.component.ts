import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/Services/authentication/register.service';



@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})


export class ForgotpasswordComponent {
  emailval: any;
  forgotForm:FormGroup
  constructor(private router: Router,private _registerdetails:RegisterService, private toastr: ToastrService,private _formValue:FormBuilder){
  this.forgotForm= this._formValue.group({
    forgotemail:['',[Validators.required,Validators.email]]
  })
  }
  get emailvalue(){
    return this.forgotForm.get('forgotemail')
  }
  loginPage(){
    this.router.navigate(['/login'])
  }
  
  verifyemailid(val:any){
    //call the registration observable and check if the email entered is valid or not
    let emailfound = false
    this._registerdetails.getRegistration().subscribe({
      next:(res)=>{
         res.forEach((element: { useremail: string;id:number  }) => {
           if(element.useremail == val.forgotemail){
           emailfound= true;
            this.router.navigate(['/forgot-passwordfield'],{queryParams:{id:element.id}})
           }
         });
        if(emailfound){
          this.toastr.success("Email Found")
        }
        else{
          this.toastr.error("Email not found")
        }
      }
     })  
  }

  inputchange(e:any){
    this.emailval = e.target.value
    let val :null |any =  document.querySelector('.requiredfield')
    if(this.emailval == ''){
    
      val.style.display = 'block'
    }
    else{
     
      val.style.display = 'none'
    }
  }
 
}