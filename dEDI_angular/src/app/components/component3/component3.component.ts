import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component3',
  templateUrl: 'component3.component.html',
  styleUrls: ['component3.component.css'],
})
export class Component3 {
  @Input()
  link_dashboard: string = 'https://example.com'

  constructor() {}
}
