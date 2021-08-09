import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-tip',
  templateUrl: 'tip.component.html',
  styleUrls: ['tip.component.css'],
})
export class Tip {
  @Input()
  text: string = 'Press Ctrl/Cmd + Arrow Down for the next step'

  constructor() {}
}
