import { Component, h } from '@stencil/core'

@Component({
  tag: 'create-org',
  shadow: true,
  styleUrls: ['style.css'],
})
export class CreateOrg {
  render() {
    return (
      <div class="container">
        <stencil-route-title pageTitle="create_org - dEDI Icn" />
        <div id="org_container" class="container1">
          <div id="org_body" class="body">
            <div id="org_footer" class="footer">
              <span id="org_footer_copy" class="copyright">
                © 2021 dEDI Incorporated
              </span>
              <img
                id="org_footer_logo"
                alt="image"
                src="/assets/playground_assets/dedi_logo_trans-1000h.png"
                class="image"
              />
            </div>
            <div id="org_header" class="header">
              <img
                id="org_header_logo"
                alt="dEDI logo"
                src="/assets/playground_assets/dedi_logo_trans-1000h.png"
                class="logo"
              />
            </div>
            <div id="org_main" class="main">
              <div id="org_form_container" class="userformcontainer">
                <div id="org_form" class="userform">
                  <input
                    type="email"
                    id="org_email_input"
                    name="Email"
                    required="true"
                    placeholder="Email"
                    autoComplete="off"
                    class="emailinpute thqTextInput"
                  />
                  <input
                    type="password"
                    id="create_org_password"
                    name="Password"
                    required="true"
                    placeholder="Password"
                    autoComplete="off"
                    class="passwordinput thqTextInput"
                  />
                  <input
                    type="text"
                    id="create_org_number"
                    name="Org ID"
                    required="true"
                    autoFocus="true"
                    placeholder="Organization ID"
                    autoComplete="off"
                    class="organizationidinput thqTextInput"
                  />
                </div>
                <button id="org_form_button" class="button thqButton">
                  submit
                </button>
                <h1 id="org_form_header" class="text">
                  Create New Organization
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
