import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(private route:Router, private authservice:AuthService,private toaster:ToastrService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   if(!this.authservice.isUserLoggedIn){
   this.toaster.error('You are not allowed to view this page. You are redirected to login Page');
    this.route.navigate(['/'])
    return false;
   }
   else
   return true;
   
    // throw new Error('Method not implemented.');
  }
}
