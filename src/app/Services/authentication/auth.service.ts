import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { RegisterService } from './register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isUserLoggedIn: boolean = false;
  isUserRegistered:boolean = false;
  allregval:any;

  constructor(private _registerdetails:RegisterService, private toastr: ToastrService,private router:Router) { }

  getToken(){
   return localStorage.getItem('token')
  }
  isLoggedIn():boolean{
   return !!localStorage.getItem('token')
  }

   login(userEmail: string, password: string,tokenValue:string): Observable<any> {  
     this._registerdetails.getRegistration().subscribe({
      next:(res)=>{
         this.allregval = res;
         console.log("inside login service")
         // console.log(res)
         this.allregval.forEach((element: { useremail: string; passw: string; }) => {
            if(element.useremail == userEmail && element.passw == password){
               this.isUserLoggedIn = true
               localStorage.setItem('token',tokenValue)
               localStorage.setItem('authenticated',JSON.stringify(this.isUserLoggedIn))
               this.toastr.success( 'Loggedin successfully !');
               this.router.navigate(['/home']) 
            }   });
         if(!this.isUserLoggedIn){
            this.toastr.error("Wrong Credentials !")
         }
      } })
      if(this.isUserLoggedIn){
         return of(this.isUserLoggedIn);
      }
      else{
         return of(this.isUserLoggedIn);
      }
 
   }

   register(alldata:any): Observable<any> {
      this.isUserRegistered= true;
      // console.log(alldata)
      this._registerdetails.getRegistration().subscribe({
         next:(res)=>{
            // console.log(res)
            res.forEach((element: { useremail: string; }) => {
               // console.log(alldata.email)
               // console.log(element.useremail == alldata.useremail)
               if(element.useremail == alldata.useremail){
               //   console.log(element.useremail,alldata.useremail)
               this.isUserRegistered= false;
                 this.toastr.warning("User is already Registered")
                
               }
              
              
            });
         }
        })
        console.log(this.isUserRegistered)
       
   //   if(this.isUserRegistered){
   //    this._registerdetails.addRegistration(alldata).subscribe({
   //       next:()=>{
   //          console.log("successfully added register value.")
   //       }
   //    })
   //   }
      // if(!this.isUserRegistered){
      //    this.toastr.success("Registered successfully")
      // }
      return of(this.isUserRegistered).pipe(   
         delay(500),
      );    
   }

   logout(): void {
      this.isUserLoggedIn = false;
      localStorage.clear();
   }

 
}
