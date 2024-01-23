import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentformComponent } from './after-login/components/studentform/studentform.component';
import {FormsModule} from '@angular/forms';
import { StudendataComponent } from './after-login/components/studendata/studendata.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { StudentService } from './Services/student.service';
import { NgxPaginationModule } from 'ngx-pagination';

import { LoginComponent } from './beforeLogin/pages/login/login.component';
import { AuthService } from './Services/authentication/auth.service';
import { FooterComponent } from './after-login/components/footer/footer.component';
import { TableResolverService } from './Services/table-resolver.service';
import { RegisterComponent } from './beforeLogin/pages/register/register.component';
import { RegisterService } from './Services/authentication/register.service';
import { AuthInterceptor } from './Services/authentication/AuthInterceptor';
import { TokenInterceptor } from './Services/token.interceptor';
import { ForgotpasswordComponent } from './beforeLogin/pages/forgotpassword/forgotpassword.component';
import { PasswordfieldComponent } from './beforeLogin/pages/passwordfield/passwordfield.component';
import { AfterLoginModule } from './after-login/after-login.module';
import { beforeLoginModule } from './beforeLogin/beforeLogin.module';





@NgModule({
  //using different components
  declarations: [
    AppComponent,
    ErrorpageComponent,
    // LoginComponent,
    // RegisterComponent,
    // ForgotpasswordComponent,
    // PasswordfieldComponent
   
  ],

  //for using external libraries
  imports: [
    AfterLoginModule,
    beforeLoginModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule, 
  
    // RouterModule.forRoot(routes),
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    

   
  ],

  //here we register all our services of angular application
  providers: [StudentService, AuthService,TableResolverService,RegisterService
,    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],

  //specify the components should load when the appmodule is loaded and the component must be a part of this module
  bootstrap: [AppComponent]
})
export class AppModule { }
