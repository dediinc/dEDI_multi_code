import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component5',
  templateUrl: 'component5.component.html',
  styleUrls: ['component5.component.css'],
})
export class Component5 {
  @Input()
  image_src: string = '/playground_assets/dedi_logo_trans-1000h.png'
  @Input()
  image_alt: string = 'image'

  constructor() {}
}
