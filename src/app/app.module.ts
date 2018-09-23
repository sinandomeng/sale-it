// Angular Core
import { BrowserModule }                    from '@angular/platform-browser'
import { NgModule }                         from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule }                       from '@angular/http'
import { HttpClientModule }                 from '@angular/common/http'
import { environment }                      from '../environments/environment.prod'

// Plugins
import { AngularFireModule }         from '@angular/fire'
import { AngularFireAuthModule }     from '@angular/fire/auth'
import { AngularFireDatabaseModule } from '@angular/fire/database'

// Unauthorized Views
import { AppRoutingModule }  from './app-routing.module'
import { AppComponent }      from './app.component'
import { HomeComponent }     from './views/home/home.component'
import { AboutComponent }    from './views/about/about.component'
import { ContactComponent }  from './views/contact/contact.component'
import { LoginComponent }    from './views/login/login.component'
import { RegisterComponent } from './views/register/register.component'

// Authorized Views
import { ProfileComponent }   from './views/authorized/profile/profile.component'
import { DashboardComponent } from './views/authorized/dashboard/dashboard.component'

// Partials
import { AHeaderComponent } from './partials/authorized/header/header.component'
import { AFooterComponent } from './partials/authorized/footer/footer.component'
import { UHeaderComponent } from './partials/unauthorized/header/header.component'
import { UFooterComponent } from './partials/unauthorized/footer/footer.component'
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component'

// Services
import { SeoService }  from './services/seo/seo.service'
import { UserService } from './services/user/user.service'

// Guards
import { AuthGuard } from './guards/auth/auth.guard';

@NgModule({
  declarations: [
    AHeaderComponent,
    AFooterComponent,
    UHeaderComponent,
    UFooterComponent,
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    ProfileComponent,
    DashboardComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule, HttpClientModule,
    FormsModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    SeoService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
