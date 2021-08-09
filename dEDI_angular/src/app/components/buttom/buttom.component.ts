import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-buttom',
  templateUrl: 'buttom.component.html',
  styleUrls: ['buttom.component.css'],
})
export class Buttom {
  @Input()
  loginbutton: string = 'Login'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
