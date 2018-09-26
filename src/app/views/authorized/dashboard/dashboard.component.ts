import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { SeoService } from '../../../services/seo/seo.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private setSeo: SeoService
  ) { }

  ngOnInit() {
    this.setSeo.generateTags({
      title: 'SaleIT | Dashboard Page',
      description: 'Some kind of description for Dashboard page.'
    })
  }

}
