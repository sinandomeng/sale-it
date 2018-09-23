import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { SeoService } from '../../services/seo/seo.service'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private FBuilder: FormBuilder,
    private setSeo: SeoService,
    private userSvc: UserService
  ) {
    // reactive form for app2go contact form
    this.loginForm = this.FBuilder.group({
      email:    ['jane@doe.com', [Validators.required, Validators.email]],
      password: ['Password', [Validators.required]]
    })
  }

  ngOnInit() {
    this.setSeo.generateTags({
      title: 'SaleIT | Login Page',
      description: 'Some kind of description for Login page.'
    })
  }

  loginSubmit() {
    const self = this
    const formValue = self.loginForm.value

    if (self.loginForm.valid) {
      console.log(self.userSvc.doLogin(formValue))
    }
  }

}
