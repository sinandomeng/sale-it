import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { SeoService } from '../../services/seo/seo.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private setSeo: SeoService
  ) { }

  ngOnInit() {
    this.setSeo.generateTags({
      title: 'SaleIT | Contact Page',
      description: 'Some kind of description for contact page.'
    })
  }

}
