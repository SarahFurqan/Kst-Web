import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/AuthForms/register/register.component';
import { DashboardComponent } from './Components/MainDashbordComponents/Dashboard/dashboard.component';
import { ButtonComponent } from './Components/GenericComponents/button/button.component';
import { InputComponent } from './Components/GenericComponents/input/input.component';
import { HeaderComponent } from './Components/MainDashbordComponents/header/header.component';
import { FooterComponent } from './Components/MainDashbordComponents/footer/footer.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/AuthForms/login/login.component';
import { GenericInputComponent } from './Components/GenericComponents/generic-input/generic-input.component';
import { PasswordInputComponent } from './Components/GenericComponents/password-input/password-input.component';
import { SignUpPageComponent } from './Components/AuthForms/sign-up-page/sign-up-page.component';
import { LogInPageComponent } from './Components/AuthForms/log-in-page/log-in-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './Components/Pages/about-us/about-us.component';
import { ContactUsComponent } from './Components/Pages/contact-us/contact-us.component';
import { OurServicesComponent } from './Components/Pages/our-services/our-services.component';
import { BlogNewsComponent } from './Components/Pages/blog-news/blog-news.component';
import { PortfolioComponent } from './Components/Pages/portfolio/portfolio.component';
import { JobsComponent } from './Components/Pages/jobs/jobs.component';



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
    LogInPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    OurServicesComponent,
    BlogNewsComponent,
    PortfolioComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
