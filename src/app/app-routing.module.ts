import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Unauthorized Views
import { HomeComponent } from './views/home/home.component'
import { AboutComponent } from './views/about/about.component'
import { ContactComponent } from './views/contact/contact.component'
import { LoginComponent } from './views/login/login.component'

// Authorized Views
import { DashboardComponent } from './views/authorized/dashboard/dashboard.component'
import { ProfileComponent } from './views/authorized/profile/profile.component'

const routes: Routes = [
  // Unauthorized Routes
  { path: '',           component: HomeComponent },
  { path: 'about-us',   component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'login',      component: LoginComponent },

  // Authorized Routes
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'profile',    component: ProfileComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
