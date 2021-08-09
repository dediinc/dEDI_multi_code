import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component9',
  templateUrl: 'component9.component.html',
  styleUrls: ['component9.component.css'],
})
export class Component9 {
  @Input()
  link_dashboard: string = 'https://example.com'

  constructor() {}
}
