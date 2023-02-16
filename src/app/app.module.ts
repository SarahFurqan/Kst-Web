import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ButtonComponent } from './Components/commonComponents/button/button.component';
import { InputComponent } from './Components/commonComponents/input/input.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { GenericInputComponent } from './Components/commonComponents/generic-input/generic-input.component';
import { PasswordInputComponent } from './Components/commonComponents/password-input/password-input.component';

import { SignUpPageComponent } from './Components/sign-up-page/sign-up-page.component';
import { LogInPageComponent } from './Components/log-in-page/log-in-page.component';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    GenericInputComponent,
    PasswordInputComponent,
    
    SignUpPageComponent,
    LogInPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
