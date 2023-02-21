import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/AuthForms/register/register.component';
import { DashboardComponent } from './Components/MainDashbordComponents/Dashboard/dashboard.component';
import { ButtonComponent } from './Components/GenericComponents/button/button.component';
import { HeaderComponent } from './Components/MainDashbordComponents/header/header.component';
import { FooterComponent } from './Components/MainDashbordComponents/footer/footer.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/AuthForms/login/login.component';
import { GenericInputComponent } from './Components/GenericComponents/generic-input/generic-input.component';
import { SignUpPageComponent } from './Components/AuthForms/sign-up-page/sign-up-page.component';
import { LogInPageComponent } from './Components/AuthForms/log-in-page/log-in-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './Components/Pages/about-us/about-us.component';
import { ContactUsComponent } from './Components/Pages/contact-us/contact-us.component';
import { OurServicesComponent } from './Components/Pages/our-services/our-services.component';
import { BlogNewsComponent } from './Components/Pages/blog-news/blog-news.component';
import { PortfolioComponent } from './Components/Pages/portfolio/portfolio.component';
import { JobsComponent } from './Components/Pages/jobs/jobs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'ngx-bootstrap/rating';
import { LandingPageComponent } from './Components/Pages/home/landing-page/landing-page.component';
import { BrandsComponent } from './Components/Pages/home/brands/brands.component';
import { FeatureWorkComponent } from './Components/Pages/home/feature-work/feature-work.component';
import { ServicesComponent } from './Components/Pages/home/services/services.component';
import { AboutComponent } from './Components/Pages/home/about/about.component';
import { BlogComponent } from './Components/Pages/home/blog/blog.component';
import { SatisfaiedClientsComponent } from './Components/Pages/home/satisfaied-clients/satisfaied-clients.component';
import { FindJobsComponent } from './Components/Pages/jobs/find-jobs/find-jobs.component';
import { JobsGridComponent } from './Components/Pages/jobs/jobs-grid/jobs-grid.component';
import { MeetExpertComponent } from './Components/Pages/about-us/meet-expert/meet-expert.component';
import { CounterComponent } from './Components/Pages/about-us/counter/counter.component';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { NewsLetterComponent } from './Components/GenericComponents/news-letter/news-letter.component';
import { AboutLandingPageComponent } from './Components/Pages/about-us/about-landing-page/about-landing-page.component';
import { AboutPageInfoComponent } from './Components/Pages/about-us/about-page-info/about-page-info.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    GenericInputComponent,
    SignUpPageComponent,
    LogInPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    OurServicesComponent,
    BlogNewsComponent,
    PortfolioComponent,
    JobsComponent,
    LandingPageComponent,
    BrandsComponent,
    FeatureWorkComponent,
    ServicesComponent,
    AboutComponent,
    BlogComponent,
    SatisfaiedClientsComponent,
    FindJobsComponent,
    JobsGridComponent,
    MeetExpertComponent,
    CounterComponent,
    ErrorPageComponent,
    NewsLetterComponent,
    AboutLandingPageComponent,
    AboutPageInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    RatingModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
