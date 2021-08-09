import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component',
  templateUrl: 'component.component.html',
  styleUrls: ['component.component.css'],
})
export class AppComponent {
  @Input()
  image_src: string = '8e884838-5948-499c-b7b6-16fe6fe575a7'
  @Input()
  image_alt: string = 'image'

  constructor() {}
}
