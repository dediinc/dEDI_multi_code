import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component10',
  templateUrl: 'component10.component.html',
  styleUrls: ['component10.component.css'],
})
export class Component10 {
  @Input()
  link_dashboard: string = 'https://example.com'

  constructor() {}
}
