import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Guards
import { AuthenticatedGuard } from './guards/authorized/auth.guard';

// Unauthorized Views
import { HomeComponent }     from './views/home/home.component'
import { AboutComponent }    from './views/about/about.component'
import { ContactComponent }  from './views/contact/contact.component'
import { LoginComponent }    from './views/login/login.component'
import { RegisterComponent } from './views/register/register.component'

// Authorized Views
import { DashboardComponent } from './views/authorized/dashboard/dashboard.component'
import { ProfileComponent }   from './views/authorized/profile/profile.component'

// 404 Page Not Found
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component'

const routes: Routes = [
  // Unauthorized Routes
  { path: '',           component: HomeComponent },
  { path: 'about-us',   component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'register',   component: RegisterComponent },

  // Authorized Routes
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthenticatedGuard] },
  { path: 'profile',    component: ProfileComponent,   canActivate: [AuthenticatedGuard] },

  // 404 Page Not Found
  { path: '**',         component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
