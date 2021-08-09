import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'app-component4',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Component4 {
  @Prop()
  link_dashboard: string = 'https://example.com'

  render() {
    return (
      <div class="container">
        <svg viewBox="0 0 1024 1024" class="icon">
          <path
            d="M832 64h-640l-192 192v672c0 17.674 14.326 32 32 32h960c17.672 0 32-14.326 32-32v-672l-192-192zM640 640v192h-256v-192h-192l320-256 320 256h-192zM154.51 192l64-64h586.976l64 64h-714.976z"
            class=""
          ></path>
        </svg>
        <a
          href={this.link_dashboard}
          target="_blank"
          rel="noreferrer noopener"
          class="dashboard thqLink"
        >
          <span class="">sent</span>
        </a>
      </div>
    )
  }
}
