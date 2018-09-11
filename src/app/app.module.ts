// Angular Core and Plugins
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'

// Unauthorized Views
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './views/home/home.component'
import { LoginComponent } from './views/login/login.component'
import { AboutComponent } from './views/about/about.component'
import { ContactComponent } from './views/contact/contact.component'

// Authorized Views
import { ProfileComponent } from './views/authorized/profile/profile.component'
import { DashboardComponent } from './views/authorized/dashboard/dashboard.component'

// Partials
import { AHeaderComponent } from './partials/authorized/header/header.component'
import { AFooterComponent } from './partials/authorized/footer/footer.component'
import { UHeaderComponent } from './partials/unauthorized/header/header.component'
import { UFooterComponent } from './partials/unauthorized/footer/footer.component'
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component'

// Services
import { SeoService } from './services/seo/seo.service'
import { UserService } from './services/user/user.service';
import { RegisterComponent } from './views/register/register.component'

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
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBqm7fLf7lYKkEBZ22dDV0SmYV1EzH632I',
      authDomain: 'saleit-df27f.firebaseapp.com',
      databaseURL: 'https://saleit-df27f.firebaseio.com',
      projectId: 'saleit-df27f',
      storageBucket: 'saleit-df27f.appspot.com',
      messagingSenderId: '281109424181'
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    SeoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
