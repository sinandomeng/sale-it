import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { SeoService } from '../../../services/seo/seo.service'
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  env: Object = environment
  userDto: JSON = JSON.parse(localStorage.getItem('authDto')).userDto
  userImg: File = null

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private setSeo: SeoService
  ) { }

  ngOnInit() {
    const self = this

    self.setSeo.generateTags({
      title: 'SaleIT | Profile Page',
      description: 'Some kind of description for Profile page.'
    }) 
  }

}
