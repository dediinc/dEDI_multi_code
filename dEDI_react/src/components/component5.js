import React from 'react'

import PropTypes from 'prop-types'

import styles from './component5.module.css'

const Component5 = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
    </div>
  )
}

Component5.defaultProps = {
  image_src: '/playground_assets/dedi_logo_trans-1000h.png',
  image_alt: 'image',
}

Component5.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component5
