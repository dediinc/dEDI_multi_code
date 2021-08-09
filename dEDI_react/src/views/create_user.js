import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './create_user.module.css'

const CreateUser = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>create_user - dEDI Icn</title>
        <meta property="og:title" content="create_user - dEDI Icn" />
      </Helmet>
      <div id="user_container" className={styles['container1']}>
        <div id="user_body" className={styles['body']}>
          <div id="user_footer" className={styles['footer']}>
            <span id="user_footer_copy" className={styles['copyright']}>
              © 2021 dEDI Incorporated
            </span>
            <img
              id="user_footer_logo"
              alt="image"
              src="/playground_assets/dedi_logo_trans-1000h.png"
              className={styles['image']}
            />
          </div>
          <div id="user_header" className={styles['header']}>
            <img
              id="user_header_logo"
              alt="dEDI logo"
              src="/playground_assets/dedi_logo_trans-1000h.png"
              className={styles['logo']}
            />
          </div>
          <div id="user_main" className={styles['main']}>
            <div
              id="user_form_container"
              className={styles['userformcontainer']}
            >
              <div id="user_form" className={styles['userform']}>
                <input
                  type="email"
                  id="user_email_input"
                  name="Email"
                  required="true"
                  placeholder="Email"
                  autoComplete="off"
                  className={` ${styles['emailinpute']} ${projectStyles['thqTextInput']} `}
                />
                <input
                  type="password"
                  id="create_user_password"
                  name="Password"
                  required="true"
                  placeholder="Password"
                  autoComplete="off"
                  className={` ${styles['passwordinput']} ${projectStyles['thqTextInput']} `}
                />
                <input
                  type="text"
                  id="create_user_org"
                  name="Org ID"
                  required="true"
                  autoFocus="true"
                  placeholder="Organization ID"
                  autoComplete="off"
                  className={` ${styles['organizationidinput']} ${projectStyles['thqTextInput']} `}
                />
                <div
                  id="create_user_form"
                  className={styles['container2']}
                ></div>
              </div>
              <h1 id="user_form_header" className={styles['text']}>
                Create New User
              </h1>
              <button
                id="org_form_button"
                className={` ${styles['button']} ${projectStyles['thqButton']} `}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateUser
