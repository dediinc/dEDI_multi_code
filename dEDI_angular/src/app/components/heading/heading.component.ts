import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-heading',
  templateUrl: 'heading.component.html',
  styleUrls: ['heading.component.css'],
})
export class Heading {
  @Input()
  heading1: string = 'Heading'
  @Input()
  text: string =
    'Let’s walk through this tutorial together to get you ready for building your next projects'

  constructor() {}
}
