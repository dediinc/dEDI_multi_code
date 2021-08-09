import { h } from 'preact'
import { Link } from 'preact-router/match'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.css'
import styles from './style.css'

const Login = () => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>dEDI Icn</title>
        <meta property="og:title" content="dEDI Icn" />
      </Helmet>
      <div id="login_container" class={styles['container1']}>
        <div id="login_body" class={styles['body']}>
          <div id="login_footer" class={styles['footer']}>
            <span id="login_footer_copy" class={styles['copyright']}>
              © 2021 dEDI Incorporated
            </span>
            <img
              id="login_footer_logo"
              alt="image"
              src="/assets/playground_assets/dedi_logo_trans-1000h.png"
              class={styles['image']}
            />
          </div>
          <div id="login_header" class={styles['header']}>
            <img
              id="login_header_logo"
              alt="dEDI logo"
              src="/assets/playground_assets/dedi_logo_trans-1000h.png"
              class={styles['logo']}
            />
          </div>
          <div id="login_main" class={styles['main']}>
            <div id="login_form" class={styles['container2']}>
              <input
                type="email"
                id="login_user_id_login"
                name="Username"
                required="true"
                placeholder="Username"
                autoComplete="on"
                class={` ${styles['username']} ${projectStyles['thqTextInput']} `}
              />
              <input
                type="password"
                id="login_password"
                name="Password"
                required="true"
                placeholder="Password"
                autoComplete="on"
                class={` ${styles['password']} ${projectStyles['thqTextInput']} `}
              />
              <div id="login_buttons_container" class={styles['container3']}>
                <Link
                  href="/dashboard"
                  id="login_login_button"
                  name="Login"
                  type="submit"
                  class={` ${styles['loginbutton']} ${projectStyles['thqButton']} ${projectStyles['thqLink']} `}
                >
                  Login
                </Link>
                <Link
                  href="/create_user"
                  id="login_help_button"
                  name="Help"
                  type="Link"
                  class={` ${styles['helpbutton']} ${projectStyles['thqButton']} ${projectStyles['thqLink']} `}
                >
                  <span id="login_create_acct">signup</span>
                  <br></br>
                </Link>
              </div>
              <span id="login_forgot_pass" class={styles['text2']}>
                <span class={styles['text3']}>Forgot Password</span>
              </span>
              <Link
                href="/create_org"
                id="login_new_org_link"
                class={` ${styles['navlink']} ${projectStyles['thqLink']} `}
              >
                New Organizatiion Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
