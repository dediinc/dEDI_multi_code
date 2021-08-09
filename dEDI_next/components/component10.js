import React from 'react'

import PropTypes from 'prop-types'

const Component10 = (props) => {
  return (
    <>
      <div className="container">
        <svg viewBox="0 0 1024 1024" className="icon">
          <path d="M219.429 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM329.143 402.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM573.714 677.143l57.714-218.286c4.571-19.429-6.857-39.429-26.286-44.571v0c-19.429-5.143-39.429 6.857-44.571 26.286l-57.714 218.286c-45.143 3.429-84.571 34.857-97.143 81.143-15.429 58.857 20 118.857 78.286 134.286 58.857 15.429 118.857-20 134.286-78.286 12-46.286-7.429-93.143-44.571-118.857zM950.857 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM585.143 292.571c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM841.143 402.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM1024 658.286c0 98.286-28 193.143-80.571 276-6.857 10.286-18.286 16.571-30.857 16.571h-801.143c-12.571 0-24-6.286-30.857-16.571-52.571-82.286-80.571-177.714-80.571-276 0-282.286 229.714-512 512-512s512 229.714 512 512z"></path>
        </svg>
        <a
          href={props.link_dashboard}
          target="_blank"
          rel="noreferrer noopener"
          className="dashboard thqLink"
        >
          <span>dashboard</span>
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
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: auto;
            width: 20%;
            bottom: auto;
            position: absolute;
            margin-top: 1%;
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
            margin-top: auto;
            text-align: left;
            font-family: Noto Sans;
            font-weight: 400;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: auto;
          }
          @media (max-width: 991px) {
            .icon {
              fill: #b3b0b0;
              width: 5%;
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .icon {
              fill: #b3b0b0;
              width: 7%;
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .container {
              height: 7%;
            }
            .icon {
              fill: #b3b0b0;
              width: 50%;
              height: auto;
            }
            .dashboard {
              top: auto;
              font-size: 50%;
              font-style: normal;
              margin-top: 50%;
              font-weight: 700;
              letter-spacing: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Component10.defaultProps = {
  link_dashboard: 'https://example.com',
}

Component10.propTypes = {
  link_dashboard: PropTypes.string,
}

export default Component10
