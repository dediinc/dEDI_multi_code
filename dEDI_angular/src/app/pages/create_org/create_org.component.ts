import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'create-org',
  templateUrl: 'create_org.component.html',
  styleUrls: ['create_org.component.css'],
})
export class CreateOrg {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('create_org - dEDI Icn')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'create_org - dEDI Icn',
      },
    ])
  }
}
