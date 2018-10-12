import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { SeoService } from '../../services/seo/seo.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private setSeo: SeoService
  ) {}
  
  ngOnInit() {
    this.setSeo.generateTags({
      title: 'SaleIT | Home Page',
      description: 'Some kind of description for home page.'
    })
  }
}
