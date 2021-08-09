import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'app-component',
  shadow: true,
  styleUrls: ['style.css'],
})
export class AppComponent {
  @Prop()
  image_src: string = '8e884838-5948-499c-b7b6-16fe6fe575a7'
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
