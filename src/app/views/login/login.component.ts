import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { SeoService } from '../../services/seo.service'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private setSeo: SeoService,
    private router: Router,
    private authSvc: AuthService
  ) { }

  ngOnInit() {
    this.setSeo.generateTags({
      title: 'SaleIT | Login Page',
      description: 'Some kind of description for Login page.'
    })
  }

  loginUser(evt) {
    // prevent default form submit
    evt.preventDefault()

    const target = evt.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.authSvc.getUserDto(username, password)
  }

}
