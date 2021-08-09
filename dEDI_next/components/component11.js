import React from 'react'

import PropTypes from 'prop-types'

const Component11 = (props) => {
  return (
    <>
      <div className="container">
        <svg viewBox="0 0 1024 1024" className="icon">
          <path d="M726 726v-172h84v256h-512v128l-170-170 170-170v128h428zM298 298v172h-84v-256h512v-128l170 170-170 170v-128h-428z"></path>
        </svg>
        <a
          href={props.link_dashboard}
          target="_blank"
          rel="noreferrer noopener"
          className="dashboard thqLink"
        >
          <span>Working</span>
        </a>
      </div>
      <style jsx>
        {`
          .container {
            width: 98%;
            height: 73px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .icon {
            width: 24px;
            height: 24px;
          }
          .dashboard {
            top: 5%;
            left: auto;
            color: #b3b0b0;
            right: auto;
            bottom: auto;
            position: absolute;
            font-size: 120%;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-family: Noto Sans;
            font-weight: 400;
          }
          @media (max-width: 479px) {
            .container {
              height: 7%;
            }
            .icon {
              fill: #b3b0b0;
              width: 60%;
              height: auto;
            }
            .dashboard {
              top: auto;
              font-size: 50%;
              font-style: normal;
              margin-top: 60%;
              font-weight: 700;
              letter-spacing: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Component11.defaultProps = {
  link_dashboard: 'https://example.com',
}

Component11.propTypes = {
  link_dashboard: PropTypes.string,
}

export default Component11
