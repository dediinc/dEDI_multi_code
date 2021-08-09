import { Component, h } from '@stencil/core'

@Component({
  tag: 'app-login',
  shadow: true,
  styleUrls: ['style.css'],
})
export class Login {
  render() {
    return (
      <div class="container">
        <stencil-route-title pageTitle="dEDI Icn" />
        <div id="login_container" class="container1">
          <div id="login_body" class="body">
            <div id="login_footer" class="footer">
              <span id="login_footer_copy" class="copyright">
                © 2021 dEDI Incorporated
              </span>
              <img
                id="login_footer_logo"
                alt="image"
                src="/assets/playground_assets/dedi_logo_trans-1000h.png"
                class="image"
              />
            </div>
            <div id="login_header" class="header">
              <img
                id="login_header_logo"
                alt="dEDI logo"
                src="/assets/playground_assets/dedi_logo_trans-1000h.png"
                class="logo"
              />
            </div>
            <div id="login_main" class="main">
              <div id="login_form" class="container2">
                <input
                  type="email"
                  id="login_user_id_login"
                  name="Username"
                  required="true"
                  placeholder="Username"
                  autoComplete="on"
                  class="username thqTextInput"
                />
                <input
                  type="password"
                  id="login_password"
                  name="Password"
                  required="true"
                  placeholder="Password"
                  autoComplete="on"
                  class="password thqTextInput"
                />
                <div id="login_buttons_container" class="container3">
                  <stencil-route-link
                    url="/dashboard"
                    id="login_login_button"
                    name="Login"
                    type="submit"
                    class="loginbutton thqButton thqLink"
                  >
                    Login
                  </stencil-route-link>
                  <stencil-route-link
                    url="/create_user"
                    id="login_help_button"
                    name="Help"
                    type="Link"
                    class="helpbutton thqButton thqLink"
                  >
                    <span id="login_create_acct" class="">
                      signup
                    </span>
                    <br class=""></br>
                  </stencil-route-link>
                </div>
                <span id="login_forgot_pass" class="text2">
                  <span class="text3">Forgot Password</span>
                </span>
                <stencil-route-link
                  url="/create_org"
                  id="login_new_org_link"
                  class="navlink thqLink"
                >
                  New Organizatiion Signup
                </stencil-route-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
