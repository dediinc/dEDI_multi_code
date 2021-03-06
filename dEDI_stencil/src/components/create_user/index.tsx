import { Component, h } from '@stencil/core'

@Component({
  tag: 'create-user',
  shadow: true,
  styleUrls: ['style.css'],
})
export class CreateUser {
  render() {
    return (
      <div class="container">
        <stencil-route-title pageTitle="create_user - dEDI Icn" />
        <div id="user_container" class="container1">
          <div id="user_body" class="body">
            <div id="user_footer" class="footer">
              <span id="user_footer_copy" class="copyright">
                © 2021 dEDI Incorporated
              </span>
              <img
                id="user_footer_logo"
                alt="image"
                src="/assets/playground_assets/dedi_logo_trans-1000h.png"
                class="image"
              />
            </div>
            <div id="user_header" class="header">
              <img
                id="user_header_logo"
                alt="dEDI logo"
                src="/assets/playground_assets/dedi_logo_trans-1000h.png"
                class="logo"
              />
            </div>
            <div id="user_main" class="main">
              <div id="user_form_container" class="userformcontainer">
                <div id="user_form" class="userform">
                  <input
                    type="email"
                    id="user_email_input"
                    name="Email"
                    required="true"
                    placeholder="Email"
                    autoComplete="off"
                    class="emailinpute thqTextInput"
                  />
                  <input
                    type="password"
                    id="create_user_password"
                    name="Password"
                    required="true"
                    placeholder="Password"
                    autoComplete="off"
                    class="passwordinput thqTextInput"
                  />
                  <input
                    type="text"
                    id="create_user_org"
                    name="Org ID"
                    required="true"
                    autoFocus="true"
                    placeholder="Organization ID"
                    autoComplete="off"
                    class="organizationidinput thqTextInput"
                  />
                  <div id="create_user_form" class="container2"></div>
                </div>
                <h1 id="user_form_header" class="text">
                  Create New User
                </h1>
                <button id="org_form_button" class="button thqButton">
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
