import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { SeoService } from '../../services/seo/seo.service'
import { UserService } from '../../services/user/user.service'
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private FBuilder: FormBuilder,
    private setSeo: SeoService,
    private userSvc: UserService
  ) {
    // reactive form for login
    this.loginForm = this.FBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
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
      self.userSvc
        .doLogin(formValue)
        .pipe(first())
        .subscribe(
          (data: any) => {
            localStorage.setItem('authDto', JSON.stringify({
              userDto: data.userDto,
              token: data.token
            }))

            self.router.navigate(['/dashboard'])
          },
          (error: any) => {
            console.log(error)
          }
        )
    }
  }
}
