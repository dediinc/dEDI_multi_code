import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.component.html',
  styleUrls: ['messages.component.css'],
})
export class Messages {
  rawtus9: string = ' '
  rawqc6j: string = ' '
  rawjlat: string = ' '
  raw9j62: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('messages - dEDI Icn')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'messages - dEDI Icn',
      },
    ])
  }
}
