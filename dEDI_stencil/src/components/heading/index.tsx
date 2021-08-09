import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'app-heading',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Heading {
  @Prop()
  heading1: string = 'Heading'
  @Prop()
  text: string =
    'Let’s walk through this tutorial together to get you ready for building your next projects'

  render() {
    return (
      <div class="container">
        <img
          alt="image"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket.teleporthq.io_/03d14fbb1e2aa53317ceb7d1e6be7560"
          class="image"
        />
        <h1 class="text heading">{this.heading1}</h1>
        <span class="text1 subheading">{this.text}</span>
      </div>
    )
  }
}
