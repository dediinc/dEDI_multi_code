import { Component, Input } from '@angular/core'

@Component({
  selector: 'list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css'],
})
export class ListItem {
  @Input()
  text: string =
    'We’ll start with simple tasks and quickly get to the advanced concepts'

  constructor() {}
}
