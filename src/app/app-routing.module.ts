import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { AboutUsComponent } from './Components/Pages/about-us/about-us.component';
import { OurServicesComponent } from './Components/Pages/our-services/our-services.component';
import { BlogNewsComponent } from './Components/Pages/blog-news/blog-news.component';
import { PortfolioComponent } from './Components/Pages/portfolio/portfolio.component';
import { JobsComponent } from './Components/Pages/jobs/jobs.component';
import { PrivacyPolicyComponent } from './Components/Pages/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './Components/Pages/contact-us/contact-us.component';
import { LogInPageComponent } from './Components/AuthForms/log-in-page/log-in-page.component';
import { SignUpPageComponent } from './Components/AuthForms/sign-up-page/sign-up-page.component';
import { UnderConsComponent } from './Components/Pages/under-cons/under-cons.component';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { JobsPageComponent } from './Components/AuthForms/jobs-page/jobs-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'under-cons', pathMatch: 'full' },
  {
    component: HomeComponent,
    path: "home"
  },
  {
    component: AboutUsComponent,
    path: 'about'
  },
  {
    component: OurServicesComponent,
    path: "services"
  },
  {
    component: BlogNewsComponent,
    path: "blog&news"
  },
  {
    component: PortfolioComponent,
    path: "portfolio"
  },
  {
    component: PrivacyPolicyComponent,
    path: "privacy-policy"
  },
  {
    component: JobsComponent,
    path: "jobs"
  },
  {
    component: ContactUsComponent,
    path: "contact"
  },
  {
    component: LogInPageComponent,
    path: 'login'
  },
  {
    component: SignUpPageComponent,
    path: 'signup'
  },

  {
    component: UnderConsComponent,
    path: "under-cons"
  },
  {
    component: ErrorPageComponent,
    path: "error-page"
  },
  {
    component: JobsPageComponent,
    path: "jobs-page"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
