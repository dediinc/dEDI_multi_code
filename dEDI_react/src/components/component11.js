import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component11.module.css'

const Component11 = (props) => {
  return (
    <div className={styles['container']}>
      <svg viewBox="0 0 1024 1024" className={styles['icon']}>
        <path d="M726 726v-172h84v256h-512v128l-170-170 170-170v128h428zM298 298v172h-84v-256h512v-128l170 170-170 170v-128h-428z"></path>
      </svg>
      <a
        href={props.link_dashboard}
        target="_blank"
        rel="noreferrer noopener"
        className={` ${styles['dashboard']} ${projectStyles['thqLink']} `}
      >
        <span>Working</span>
      </a>
    </div>
  )
}

Component11.defaultProps = {
  link_dashboard: 'https://example.com',
}

Component11.propTypes = {
  link_dashboard: PropTypes.string,
}

export default Component11
