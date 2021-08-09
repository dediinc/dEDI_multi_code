import { h } from 'preact'

import PropTypes from 'prop-types'

import projectStyles from '../routes/style.css'
import styles from './buttom.css'

const Buttom = (props) => {
  return (
    <div class={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        id="login_button"
        name="Login"
        type="submit"
        class={` ${styles['loginbutton']} ${projectStyles['thqButton']} `}
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
