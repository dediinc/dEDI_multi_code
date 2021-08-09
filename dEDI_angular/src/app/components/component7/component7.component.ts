import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component7',
  templateUrl: 'component7.component.html',
  styleUrls: ['component7.component.css'],
})
export class Component7 {
  @Input()
  link_dashboard: string = 'https://example.com'

  constructor() {}
}
