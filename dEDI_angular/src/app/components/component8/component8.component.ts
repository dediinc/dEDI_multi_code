import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component8',
  templateUrl: 'component8.component.html',
  styleUrls: ['component8.component.css'],
})
export class Component8 {
  @Input()
  link_dashboard: string = 'https://example.com'

  constructor() {}
}
