import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './login.module.css'

const Login = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>dEDI Icn</title>
        <meta property="og:title" content="dEDI Icn" />
      </Helmet>
      <div id="login_container" className={styles['container1']}>
        <div id="login_body" className={styles['body']}>
          <div id="login_footer" className={styles['footer']}>
            <span id="login_footer_copy" className={styles['copyright']}>
              © 2021 dEDI Incorporated
            </span>
            <img
              id="login_footer_logo"
              alt="image"
              src="/playground_assets/dedi_logo_trans-1000h.png"
              className={styles['image']}
            />
          </div>
          <div id="login_header" className={styles['header']}>
            <img
              id="login_header_logo"
              alt="dEDI logo"
              src="/playground_assets/dedi_logo_trans-1000h.png"
              className={styles['logo']}
            />
          </div>
          <div id="login_main" className={styles['main']}>
            <div id="login_form" className={styles['container2']}>
              <input
                type="email"
                id="login_user_id_login"
                name="Username"
                required="true"
                placeholder="Username"
                autoComplete="on"
                className={` ${styles['username']} ${projectStyles['thqTextInput']} `}
              />
              <input
                type="password"
                id="login_password"
                name="Password"
                required="true"
                placeholder="Password"
                autoComplete="on"
                className={` ${styles['password']} ${projectStyles['thqTextInput']} `}
              />
              <div
                id="login_buttons_container"
                className={styles['container3']}
              >
                <Link
                  to="/dashboard"
                  id="login_login_button"
                  name="Login"
                  type="submit"
                  className={` ${styles['loginbutton']} ${projectStyles['thqButton']} ${projectStyles['thqLink']} `}
                >
                  Login
                </Link>
                <Link
                  to="/create_user"
                  id="login_help_button"
                  name="Help"
                  type="Link"
                  className={` ${styles['helpbutton']} ${projectStyles['thqButton']} ${projectStyles['thqLink']} `}
                >
                  <span id="login_create_acct">signup</span>
                  <br></br>
                </Link>
              </div>
              <span id="login_forgot_pass" className={styles['text2']}>
                <span className={styles['text3']}>Forgot Password</span>
              </span>
              <Link
                to="/create_org"
                id="login_new_org_link"
                className={` ${styles['navlink']} ${projectStyles['thqLink']} `}
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
