import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './buttom.module.css'

const Buttom = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        id="login_button"
        name="Login"
        type="submit"
        className={` ${styles['loginbutton']} ${projectStyles['thqButton']} `}
      >
        {props.loginbutton}
      </button>
    </div>
  )
}

Buttom.defaultProps = {
  loginbutton: 'Login',
  rootClassName: '',
}

Buttom.propTypes = {
  loginbutton: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Buttom
