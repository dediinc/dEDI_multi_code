import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-root',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch>
              <stencil-route
                url="/"
                exact
                component="app-login"
              ></stencil-route>
              <stencil-route
                url="/create_org"
                component="create-org"
              ></stencil-route>
              <stencil-route
                url="/create_user"
                component="create-user"
              ></stencil-route>
              <stencil-route url="/forms" component="app-forms"></stencil-route>
              <stencil-route
                url="/dashboard"
                component="app-dashboard"
              ></stencil-route>
              <stencil-route
                url="/messages"
                component="app-messages"
              ></stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    )
  }
}
