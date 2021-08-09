import { h } from 'preact'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.css'
import styles from './style.css'

const CreateOrg = () => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>create_org - dEDI Icn</title>
        <meta property="og:title" content="create_org - dEDI Icn" />
      </Helmet>
      <div id="org_container" class={styles['container1']}>
        <div id="org_body" class={styles['body']}>
          <div id="org_footer" class={styles['footer']}>
            <span id="org_footer_copy" class={styles['copyright']}>
              © 2021 dEDI Incorporated
            </span>
            <img
              id="org_footer_logo"
              alt="image"
              src="/assets/playground_assets/dedi_logo_trans-1000h.png"
              class={styles['image']}
            />
          </div>
          <div id="org_header" class={styles['header']}>
            <img
              id="org_header_logo"
              alt="dEDI logo"
              src="/assets/playground_assets/dedi_logo_trans-1000h.png"
              class={styles['logo']}
            />
          </div>
          <div id="org_main" class={styles['main']}>
            <div id="org_form_container" class={styles['userformcontainer']}>
              <div id="org_form" class={styles['userform']}>
                <input
                  type="email"
                  id="org_email_input"
                  name="Email"
                  required="true"
                  placeholder="Email"
                  autoComplete="off"
                  class={` ${styles['emailinpute']} ${projectStyles['thqTextInput']} `}
                />
                <input
                  type="password"
                  id="create_org_password"
                  name="Password"
                  required="true"
                  placeholder="Password"
                  autoComplete="off"
                  class={` ${styles['passwordinput']} ${projectStyles['thqTextInput']} `}
                />
                <input
                  type="text"
                  id="create_org_number"
                  name="Org ID"
                  required="true"
                  autoFocus="true"
                  placeholder="Organization ID"
                  autoComplete="off"
                  class={` ${styles['organizationidinput']} ${projectStyles['thqTextInput']} `}
                />
              </div>
              <button
                id="org_form_button"
                class={` ${styles['button']} ${projectStyles['thqButton']} `}
              >
                submit
              </button>
              <h1 id="org_form_header" class={styles['text']}>
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
