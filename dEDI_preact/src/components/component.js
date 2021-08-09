import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './component.css'

const AppComponent = (props) => {
  return (
    <div class={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        class={styles['image']}
      />
    </div>
  )
}

AppComponent.defaultProps = {
  image_src: '8e884838-5948-499c-b7b6-16fe6fe575a7',
  image_alt: 'image',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default AppComponent
