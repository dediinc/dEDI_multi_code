import { h } from 'preact'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.css'
import styles from './style.css'

const CreateUser = () => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>create_user - dEDI Icn</title>
        <meta property="og:title" content="create_user - dEDI Icn" />
      </Helmet>
      <div id="user_container" class={styles['container1']}>
        <div id="user_body" class={styles['body']}>
          <div id="user_footer" class={styles['footer']}>
            <span id="user_footer_copy" class={styles['copyright']}>
              © 2021 dEDI Incorporated
            </span>
            <img
              id="user_footer_logo"
              alt="image"
              src="/assets/playground_assets/dedi_logo_trans-1000h.png"
              class={styles['image']}
            />
          </div>
          <div id="user_header" class={styles['header']}>
            <img
              id="user_header_logo"
              alt="dEDI logo"
              src="/assets/playground_assets/dedi_logo_trans-1000h.png"
              class={styles['logo']}
            />
          </div>
          <div id="user_main" class={styles['main']}>
            <div id="user_form_container" class={styles['userformcontainer']}>
              <div id="user_form" class={styles['userform']}>
                <input
                  type="email"
                  id="user_email_input"
                  name="Email"
                  required="true"
                  placeholder="Email"
                  autoComplete="off"
                  class={` ${styles['emailinpute']} ${projectStyles['thqTextInput']} `}
                />
                <input
                  type="password"
                  id="create_user_password"
                  name="Password"
                  required="true"
                  placeholder="Password"
                  autoComplete="off"
                  class={` ${styles['passwordinput']} ${projectStyles['thqTextInput']} `}
                />
                <input
                  type="text"
                  id="create_user_org"
                  name="Org ID"
                  required="true"
                  autoFocus="true"
                  placeholder="Organization ID"
                  autoComplete="off"
                  class={` ${styles['organizationidinput']} ${projectStyles['thqTextInput']} `}
                />
                <div id="create_user_form" class={styles['container2']}></div>
              </div>
              <h1 id="user_form_header" class={styles['text']}>
                Create New User
              </h1>
              <button
                id="org_form_button"
                class={` ${styles['button']} ${projectStyles['thqButton']} `}
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
