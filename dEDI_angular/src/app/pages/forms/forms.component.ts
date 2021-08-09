import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-forms',
  templateUrl: 'forms.component.html',
  styleUrls: ['forms.component.css'],
})
export class Forms {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('forms - dEDI Icn')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'forms - dEDI Icn',
      },
    ])
  }
}
