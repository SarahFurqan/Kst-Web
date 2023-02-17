import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { AboutUsComponent } from './Components/Pages/about-us/about-us.component';
import { OurServicesComponent } from './Components/Pages/our-services/our-services.component';
import { BlogNewsComponent } from './Components/Pages/blog-news/blog-news.component';
import { PortfolioComponent } from './Components/Pages/portfolio/portfolio.component';
import { JobsComponent } from './Components/Pages/jobs/jobs.component';
import { ContactUsComponent } from './Components/Pages/contact-us/contact-us.component';
import { LogInPageComponent } from './Components/AuthForms/log-in-page/log-in-page.component';
import { SignUpPageComponent } from './Components/AuthForms/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { component: HomeComponent,
    path:"home"  
  },
  { component: AboutUsComponent,
    path: 'about'
  },
  { component: OurServicesComponent,
    path:"services"  
  },
  { component: BlogNewsComponent,
    path:"blog&news"  
  },
  { component: PortfolioComponent,
    path:"portfolio"  
  },
  { component: JobsComponent,
    path:"jobs"  
  },
  { component: ContactUsComponent,
    path:"contact"  
  },
  { component: LogInPageComponent,
    path: 'login'
  },
  { component: SignUpPageComponent,
    path: 'signup'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
