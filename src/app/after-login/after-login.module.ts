import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudendataComponent } from './components/studendata/studendata.component';
import { StudentformComponent } from './components/studentform/studentform.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { AfterLoginRoutingModule } from './after-login-routing.module';
import { AuthService } from '../Services/authentication/auth.service';
import { AfterloghomeComponent } from './components/afterloghome/afterloghome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './CustomPipes/search.pipe';


@NgModule({
  declarations: [
    StudendataComponent,
    StudentformComponent,
    NavbarComponent,
    FooterComponent,
    AfterloghomeComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    AfterLoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    NgxPaginationModule,
    
    
  ],
  exports:[
    StudendataComponent,
    StudentformComponent,
    NavbarComponent,
    FooterComponent, 
  ]

})
export class AfterLoginModule { 
  
  constructor(private authservice:AuthService){

  }

  logoutUser(){
   
    this.authservice.logout();
  }
}
