import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorpageComponent } from "./components/errorpage/errorpage.component";
import { LoginComponent } from "./beforeLogin/pages/login/login.component";
import { AuthGuardServiceService } from "./Services/guard/auth-guard-service.service";
import { TableResolverService } from "./Services/table-resolver.service";
import { RegisterComponent } from "./beforeLogin/pages/register/register.component";
import { ForgotpasswordComponent } from "./beforeLogin/pages/forgotpassword/forgotpassword.component";
import { PasswordfieldComponent } from "./beforeLogin/pages/passwordfield/passwordfield.component";

const routes: Routes = [
  // {path: 'home',  loadChildren: () => import('./after-login/components/studentform/studentform.component').then(m => m.StudentformComponent),canActivate:[AuthGuardServiceService]},
  // {path: 'login',component: LoginComponent},
  // {path:'forgot-password', component: ForgotpasswordComponent},
  // {path:'forgot-passwordfield',component:PasswordfieldComponent},
  // {path:'register' , component:RegisterComponent},
  // {path:'home/:id' , loadChildren: () => import('./after-login/components/studentform/studentform.component').then(m => m.StudentformComponent),canActivate:[AuthGuardServiceService]},
  // {path: 'dataTable' , loadChildren: () => import('./after-login/components/studendata/studendata.component').then(m => m.StudendataComponent) ,canActivate:[AuthGuardServiceService],resolve:[TableResolverService]},
  {path:'' , redirectTo:'landing-page', pathMatch:'full'},
  {path:'**', component:ErrorpageComponent},
  {path:'home',loadChildren:()=>import('./after-login/after-login.module').then(m=>m.AfterLoginModule)},
  {path:'landing-page',loadChildren: ()=> import('./beforeLogin/beforeLogin.module').then(m=> m.beforeLoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
