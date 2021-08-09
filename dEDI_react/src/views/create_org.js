import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './create_org.module.css'

const CreateOrg = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>create_org - dEDI Icn</title>
        <meta property="og:title" content="create_org - dEDI Icn" />
      </Helmet>
      <div id="org_container" className={styles['container1']}>
        <div id="org_body" className={styles['body']}>
          <div id="org_footer" className={styles['footer']}>
            <span id="org_footer_copy" className={styles['copyright']}>
              © 2021 dEDI Incorporated
            </span>
            <img
              id="org_footer_logo"
              alt="image"
              src="/playground_assets/dedi_logo_trans-1000h.png"
              className={styles['image']}
            />
          </div>
          <div id="org_header" className={styles['header']}>
            <img
              id="org_header_logo"
              alt="dEDI logo"
              src="/playground_assets/dedi_logo_trans-1000h.png"
              className={styles['logo']}
            />
          </div>
          <div id="org_main" className={styles['main']}>
            <div
              id="org_form_container"
              className={styles['userformcontainer']}
            >
              <div id="org_form" className={styles['userform']}>
                <input
                  type="email"
                  id="org_email_input"
                  name="Email"
                  required="true"
                  placeholder="Email"
                  autoComplete="off"
                  className={` ${styles['emailinpute']} ${projectStyles['thqTextInput']} `}
                />
                <input
                  type="password"
                  id="create_org_password"
                  name="Password"
                  required="true"
                  placeholder="Password"
                  autoComplete="off"
                  className={` ${styles['passwordinput']} ${projectStyles['thqTextInput']} `}
                />
                <input
                  type="text"
                  id="create_org_number"
                  name="Org ID"
                  required="true"
                  autoFocus="true"
                  placeholder="Organization ID"
                  autoComplete="off"
                  className={` ${styles['organizationidinput']} ${projectStyles['thqTextInput']} `}
                />
              </div>
              <button
                id="org_form_button"
                className={` ${styles['button']} ${projectStyles['thqButton']} `}
              >
                submit
              </button>
              <h1 id="org_form_header" className={styles['text']}>
                Create New Organization
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateOrg
