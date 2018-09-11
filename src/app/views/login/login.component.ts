import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { SeoService } from '../../services/seo/seo.service'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private setSeo: SeoService,
    public userSvc: UserService
  ) { }

  ngOnInit() {
    this.setSeo.generateTags({
      title: 'SaleIT | Login Page',
      description: 'Some kind of description for Login page.'
    })
  }

}
