import { Injectable } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private title: Title) { }
  
  generateTags(config) {
    this.title.setTitle(config.title)
    this.meta.updateTag({ name: 'description',         content: config.description }) 

    this.meta.updateTag({ name: 'twitter:title',       content: config.title })
    this.meta.updateTag({ name: 'twitter:description', content: config.description })

    this.meta.updateTag({ name: 'og:title',            content: config.title })
    this.meta.updateTag({ name: 'og:description',      content: config.description })
  }
  
}
