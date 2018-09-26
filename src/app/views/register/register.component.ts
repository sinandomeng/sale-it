import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { SeoService } from '../../services/seo/seo.service'
import { UserService } from '../../services/user/user.service'
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: any

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private FBuilder: FormBuilder,
    private setSeo: SeoService,
    private userSvc: UserService
  ) {
    // reactive form for registration
    this.registrationForm = this.FBuilder.group({
      email:    [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  ngOnInit() {
  }

  registrationSubmit() {
    const self = this
    const formValue = self.registrationForm.value

    if (self.registrationForm.valid) {
      self.userSvc.doRegister(formValue)
            .pipe(first())
            .subscribe(
                data => {
                  console.log(data)
                },
                error => {
                  console.log(error)
                })
    }
  }

}
