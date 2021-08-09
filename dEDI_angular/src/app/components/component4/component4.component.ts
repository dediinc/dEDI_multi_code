import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component4',
  templateUrl: 'component4.component.html',
  styleUrls: ['component4.component.css'],
})
export class Component4 {
  @Input()
  link_dashboard: string = 'https://example.com'

  constructor() {}
}
