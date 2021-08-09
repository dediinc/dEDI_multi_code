import React from 'react'

import PropTypes from 'prop-types'

const Buttom = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <button
          id="login_button"
          name="Login"
          type="submit"
          className="loginbutton thqButton"
        >
          {props.loginbutton}
        </button>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .loginbutton {
            align-self: flex-start;
            margin-top: var(--dl-space-space-tripleunit);
            margin-left: 0px;
            border-color: rgba(18, 18, 18, 0.32);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
          }
        `}
      </style>
    </>
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
