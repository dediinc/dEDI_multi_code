import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'app-component11',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Component11 {
  @Prop()
  link_dashboard: string = 'https://example.com'

  render() {
    return (
      <div class="container">
        <svg viewBox="0 0 1024 1024" class="icon">
          <path
            d="M726 726v-172h84v256h-512v128l-170-170 170-170v128h428zM298 298v172h-84v-256h512v-128l170 170-170 170v-128h-428z"
            class=""
          ></path>
        </svg>
        <a
          href={this.link_dashboard}
          target="_blank"
          rel="noreferrer noopener"
          class="dashboard thqLink"
        >
          <span class="">Working</span>
        </a>
      </div>
    )
  }
}
