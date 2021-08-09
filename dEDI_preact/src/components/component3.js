import { h } from 'preact'

import PropTypes from 'prop-types'

import projectStyles from '../routes/style.css'
import styles from './component3.css'

const Component3 = (props) => {
  return (
    <div class={styles['container']}>
      <svg viewBox="0 0 1024 1024" class={styles['icon']}>
        <path d="M832 64h-640l-192 192v672c0 17.674 14.326 32 32 32h960c17.672 0 32-14.326 32-32v-672l-192-192zM512 832l-320-256h192v-192h256v192h192l-320 256zM154.51 192l64-64h586.978l64 64h-714.978z"></path>
      </svg>
      <a
        href={props.link_dashboard}
        target="_blank"
        rel="noreferrer noopener"
        class={` ${styles['dashboard']} ${projectStyles['thqLink']} `}
      >
        <span>received</span>
      </a>
    </div>
  )
}

Component3.defaultProps = {
  link_dashboard: 'https://example.com',
}

Component3.propTypes = {
  link_dashboard: PropTypes.string,
}

export default Component3
