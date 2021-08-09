import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component2.module.css'

const Component2 = (props) => {
  return (
    <div className={styles['container']}>
      <svg viewBox="0 0 877.7142857142857 1024" className={styles['icon']}>
        <path d="M585.143 292.571v-269.714c8 5.143 14.857 10.286 20.571 16l233.143 233.143c5.714 5.714 10.857 12.571 16 20.571h-269.714zM512 310.857c0 30.286 24.571 54.857 54.857 54.857h310.857v603.429c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h457.143v310.857z"></path>
      </svg>
      <a
        href={props.link_dashboard}
        target="_blank"
        rel="noreferrer noopener"
        className={` ${styles['dashboard']} ${projectStyles['thqLink']} `}
      >
        <span>forms</span>
        <span></span>
      </a>
    </div>
  )
}

Component2.defaultProps = {
  link_dashboard: 'https://example.com',
}

Component2.propTypes = {
  link_dashboard: PropTypes.string,
}

export default Component2
