import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'app-component3',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Component3 {
  @Prop()
  link_dashboard: string = 'https://example.com'

  render() {
    return (
      <div class="container">
        <svg viewBox="0 0 1024 1024" class="icon">
          <path
            d="M832 64h-640l-192 192v672c0 17.674 14.326 32 32 32h960c17.672 0 32-14.326 32-32v-672l-192-192zM512 832l-320-256h192v-192h256v192h192l-320 256zM154.51 192l64-64h586.978l64 64h-714.978z"
            class=""
          ></path>
        </svg>
        <a
          href={this.link_dashboard}
          target="_blank"
          rel="noreferrer noopener"
          class="dashboard thqLink"
        >
          <span class="">received</span>
        </a>
      </div>
    )
  }
}
