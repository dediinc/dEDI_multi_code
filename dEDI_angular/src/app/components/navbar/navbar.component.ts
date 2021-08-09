import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class Navbar {
  @Input()
  text7: string = 'Inventory'
  @Input()
  text: string = 'Dashboard'
  @Input()
  text3: string = 'Forms'
  @Input()
  text4: string = 'Messaging'
  @Input()
  text2: string = 'Received'
  @Input()
  text1: string = 'Sent'
  @Input()
  text6: string = 'Tracking'
  @Input()
  text8: string = 'Financial'
  @Input()
  rootClassName: string = ''
  @Input()
  text5: string = 'Partners'

  constructor() {}
}
