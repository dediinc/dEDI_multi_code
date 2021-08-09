import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component11',
  templateUrl: 'component11.component.html',
  styleUrls: ['component11.component.css'],
})
export class Component11 {
  @Input()
  link_dashboard: string = 'https://example.com'

  constructor() {}
}
