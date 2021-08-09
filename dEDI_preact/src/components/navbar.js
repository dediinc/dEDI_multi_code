import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './navbar.css'

const Navbar = (props) => {
  return (
    <nav
      id="sidebar"
      class={` ${styles['container']} ${styles[props.rootClassName]} `}
    >
      <span id="dash_link" class={styles['text']}>
        {props.text}
      </span>
      <span id="sent_link" class={styles['text1']}>
        {props.text1}
      </span>
      <span id="recv_link" class={styles['text2']}>
        {props.text2}
      </span>
      <span id="forms_link" class={styles['text3']}>
        {props.text3}
      </span>
      <span id="msg_link" class={styles['text4']}>
        {props.text4}
      </span>
      <span id="partners_link" class={styles['text5']}>
        {props.text5}
      </span>
      <span id="tracking_link" class={styles['text6']}>
        {props.text6}
      </span>
      <span id="inventory_link" class={styles['text7']}>
        {props.text7}
      </span>
      <span id="financial_link" class={styles['text8']}>
        {props.text8}
      </span>
    </nav>
  )
}

Navbar.defaultProps = {
  text7: 'Inventory',
  text: 'Dashboard',
  text3: 'Forms',
  text4: 'Messaging',
  text2: 'Received',
  text1: 'Sent',
  text6: 'Tracking',
  text8: 'Financial',
  rootClassName: '',
  text5: 'Partners',
}

Navbar.propTypes = {
  text7: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
}

export default Navbar
