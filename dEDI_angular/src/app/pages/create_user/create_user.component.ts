import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'create-user',
  templateUrl: 'create_user.component.html',
  styleUrls: ['create_user.component.css'],
})
export class CreateUser {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('create_user - dEDI Icn')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'create_user - dEDI Icn',
      },
    ])
  }
}
