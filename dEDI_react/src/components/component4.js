import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component4.module.css'

const Component4 = (props) => {
  return (
    <div className={styles['container']}>
      <svg viewBox="0 0 1024 1024" className={styles['icon']}>
        <path d="M832 64h-640l-192 192v672c0 17.674 14.326 32 32 32h960c17.672 0 32-14.326 32-32v-672l-192-192zM640 640v192h-256v-192h-192l320-256 320 256h-192zM154.51 192l64-64h586.976l64 64h-714.976z"></path>
      </svg>
      <a
        href={props.link_dashboard}
        target="_blank"
        rel="noreferrer noopener"
        className={` ${styles['dashboard']} ${projectStyles['thqLink']} `}
      >
        <span>sent</span>
      </a>
    </div>
  )
}

Component4.defaultProps = {
  link_dashboard: 'https://example.com',
}

Component4.propTypes = {
  link_dashboard: PropTypes.string,
}

export default Component4
