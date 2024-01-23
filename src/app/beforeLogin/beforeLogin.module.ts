
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { PasswordfieldComponent } from './pages/passwordfield/passwordfield.component';
import { beforeLoginRoutingModule } from './beforeLogin-routing.module';
 
// const routes: Routes = [
// {path:'login', component:LoginComponent},
// {path:'register',component:RegisterComponent},
// {path:'forgot-password',component:ForgotpasswordComponent},
// {path:'forgot-password/password',component:PasswordfieldComponent},
// {path:'',component:LoginComponent}
// ];
 
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    PasswordfieldComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    beforeLoginRoutingModule

  ],
  providers: [],
  // exports:[RouterModule,
  //   LoginComponent,
  //   RegisterComponent,
  //   ForgotpasswordComponent,
  //   PasswordfieldComponent
  // ]
})
export class beforeLoginModule { }