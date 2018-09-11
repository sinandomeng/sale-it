import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { SeoService } from '../../services/seo/seo.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private setSeo: SeoService
  ) { }

  ngOnInit() {
    this.setSeo.generateTags({
      title: 'SaleIT | About Page',
      description: 'Some kind of description for about page.'
    })
  }

}
