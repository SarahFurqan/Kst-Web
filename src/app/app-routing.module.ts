import { NgModule } from '@angular/core';
 import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { AboutUsComponent } from './Components/Pages/about-us/about-us.component';
import { OurServicesComponent } from './Components/Pages/our-services/our-services.component';
import { BlogNewsComponent } from './Components/Pages/blog-news/blog-news.component';
import { PortfolioComponent } from './Components/Pages/portfolio/portfolio.component';
import { JobsComponent } from './Components/Pages/jobs/jobs.component';
import { PrivacyPolicyComponent } from './Components/Pages/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './Components/Pages/contact-us/contact-us.component';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
  
})
export class AppRoutingModule {

  constructor(private router: Router) { }
  // ngOnInit() {
  //   console.log("Trigger Event");
  //   this.router.events.subscribe((evt) => {
  //     if (!(evt instanceof NavigationEnd)) {
  //         return;
  //     }
  //     window.scrollTo(0, 0)
  //   });
  // }
 }
