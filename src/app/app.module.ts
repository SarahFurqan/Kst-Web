import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/MainDashbordComponents/Dashboard/dashboard.component';
import { HeaderComponent } from './Components/MainDashbordComponents/header/header.component';
import { FooterComponent } from './Components/MainDashbordComponents/footer/footer.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { PortfolioLandingPageComponent } from './Components/Pages/portfolio/portfolio-landing-page/portfolio-landing-page.component';
import { OurPortfolioComponent } from './Components/Pages/portfolio/our-portfolio/our-portfolio.component';
import { ImageGridComponent } from './Components/GenericComponents/image-grid/image-grid.component';
import { ServicesLandingPageComponent } from './Components/Pages/our-services/services-landing-page/services-landing-page.component';
import { BlogLandingPageComponent } from './Components/Pages/blog-news/blog-landing-page/blog-landing-page.component';
import { ServiceClientsComponent } from './Components/Pages/our-services/service-clients/service-clients.component';
import { AccordionsComponent } from './Components/Pages/about-us/accordions/accordions.component';
import { CardsPageComponent } from './Components/Pages/blog-news/cards-page/cards-page.component';
import { LandingPageContactUsComponent } from './Components/Pages/contact-us/landing-page-contact-us/landing-page-contact-us.component';
import { ContactUsFormPageComponent } from './Components/Pages/contact-us/contact-us-form-page/contact-us-form-page.component';
import { PrivacyPolicyComponent } from './Components/Pages/privacy-policy/privacy-policy.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsPageComponent } from './Components/AuthForms/jobs-page/jobs-page.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
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
    AboutPageInfoComponent,
    PortfolioLandingPageComponent,
    OurPortfolioComponent,
    ImageGridComponent,
    ServicesLandingPageComponent,
    BlogLandingPageComponent,
    ServiceClientsComponent,
    AccordionsComponent,
    CardsPageComponent,
    LandingPageContactUsComponent,
    ContactUsFormPageComponent,
    PrivacyPolicyComponent,
    JobsPageComponent
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
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
