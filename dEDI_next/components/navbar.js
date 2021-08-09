import React from 'react'

import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <nav id="sidebar" className={`container ${props.rootClassName} `}>
        <span id="dash_link" className="text">
          {props.text}
        </span>
        <span id="sent_link" className="text1">
          {props.text1}
        </span>
        <span id="recv_link" className="text2">
          {props.text2}
        </span>
        <span id="forms_link" className="text3">
          {props.text3}
        </span>
        <span id="msg_link" className="text4">
          {props.text4}
        </span>
        <span id="partners_link" className="text5">
          {props.text5}
        </span>
        <span id="tracking_link" className="text6">
          {props.text6}
        </span>
        <span id="inventory_link" className="text7">
          {props.text7}
        </span>
        <span id="financial_link" className="text8">
          {props.text8}
        </span>
      </nav>
      <style jsx>
        {`
          .container {
            width: 189px;
            height: 328px;
            display: flex;
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            margin-left: var(--dl-space-space-doubleunit);
            padding-top: 2rem;
            padding-left: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text {
            color: rgba(18, 18, 18, 0.37);
            font-size: 20px;
            align-self: flex-start;
            font-family: Fira Sans;
            padding-left: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .text1 {
            color: rgba(18, 18, 18, 0.37);
            font-size: 20px;
            font-family: Fira Sans;
            padding-left: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .text2 {
            color: rgba(18, 18, 18, 0.37);
            font-size: 20px;
            align-self: flex-start;
            font-family: Fira Sans;
            padding-left: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .text3 {
            color: rgba(18, 18, 18, 0.37);
            font-size: 20px;
            align-self: flex-start;
            font-family: Fira Sans;
            margin-left: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .text4 {
            color: rgba(18, 18, 18, 0.37);
            font-size: 20px;
            align-self: flex-start;
            font-family: Fira Sans;
            padding-left: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .text5 {
            color: rgba(18, 18, 18, 0.37);
            font-size: 20px;
            align-self: flex-start;
            font-family: Fira Sans;
            padding-left: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .text6 {
            color: rgba(18, 18, 18, 0.37);
            font-size: 20px;
            align-self: flex-start;
            font-family: Fira Sans;
            padding-left: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .text7 {
            color: rgba(18, 18, 18, 0.37);
            font-size: 20px;
            align-self: flex-start;
            font-family: Fira Sans;
            padding-left: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          .text8 {
            color: rgba(18, 18, 18, 0.37);
            font-size: 20px;
            align-self: flex-start;
            font-family: Fira Sans;
            padding-left: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
        `}
      </style>
    </>
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
