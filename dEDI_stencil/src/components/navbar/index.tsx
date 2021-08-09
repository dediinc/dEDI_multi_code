import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'app-navbar',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Navbar {
  @Prop()
  text7: string = 'Inventory'
  @Prop()
  text: string = 'Dashboard'
  @Prop()
  text3: string = 'Forms'
  @Prop()
  text4: string = 'Messaging'
  @Prop()
  text2: string = 'Received'
  @Prop()
  text1: string = 'Sent'
  @Prop()
  text6: string = 'Tracking'
  @Prop()
  text8: string = 'Financial'
  @Prop()
  rootClassName: string = ''
  @Prop()
  text5: string = 'Partners'

  render() {
    return (
      <nav id="sidebar" class={`container ${this.rootClassName} `}>
        <span id="dash_link" class="text">
          {this.text}
        </span>
        <span id="sent_link" class="text1">
          {this.text1}
        </span>
        <span id="recv_link" class="text2">
          {this.text2}
        </span>
        <span id="forms_link" class="text3">
          {this.text3}
        </span>
        <span id="msg_link" class="text4">
          {this.text4}
        </span>
        <span id="partners_link" class="text5">
          {this.text5}
        </span>
        <span id="tracking_link" class="text6">
          {this.text6}
        </span>
        <span id="inventory_link" class="text7">
          {this.text7}
        </span>
        <span id="financial_link" class="text8">
          {this.text8}
        </span>
      </nav>
    )
  }
}
