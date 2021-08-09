import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'app-component5',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Component5 {
  @Prop()
  image_src: string = '/playground_assets/dedi_logo_trans-1000h.png'
  @Prop()
  image_alt: string = 'image'

  render() {
    return (
      <div class="container">
        <img alt={this.image_alt} src={this.image_src} class="image" />
      </div>
    )
  }
}
