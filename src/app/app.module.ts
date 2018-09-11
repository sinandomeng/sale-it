// Angular Core and Plugins
import { BrowserModule }            from '@angular/platform-browser'
import { NgModule }                 from '@angular/core'
import { HttpClientModule }         from '@angular/common/http'
import { AngularFireModule }        from '@angular/fire'
import { AngularFirestoreModule }   from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireAuthModule }    from '@angular/fire/auth'
import { environment }              from '../environments/environment'

// Unauthorized Views
import { AppRoutingModule } from './app-routing.module'
import { AppComponent }     from './app.component'
import { HomeComponent }    from './views/home/home.component'
import { LoginComponent }   from './views/login/login.component'
import { AboutComponent }   from './views/about/about.component'
import { ContactComponent } from './views/contact/contact.component'

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
import { SeoService } from '../app/services/seo.service'
import { AuthService } from '../app/services/auth.service'

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'SaleIT'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    SeoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
