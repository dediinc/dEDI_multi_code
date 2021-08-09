import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'app-component2',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Component2 {
  @Prop()
  link_dashboard: string = 'https://example.com'

  render() {
    return (
      <div class="container">
        <svg viewBox="0 0 877.7142857142857 1024" class="icon">
          <path
            d="M585.143 292.571v-269.714c8 5.143 14.857 10.286 20.571 16l233.143 233.143c5.714 5.714 10.857 12.571 16 20.571h-269.714zM512 310.857c0 30.286 24.571 54.857 54.857 54.857h310.857v603.429c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h457.143v310.857z"
            class=""
          ></path>
        </svg>
        <a
          href={this.link_dashboard}
          target="_blank"
          rel="noreferrer noopener"
          class="dashboard thqLink"
        >
          <span class="">forms</span>
          <span class=""></span>
        </a>
      </div>
    )
  }
}
