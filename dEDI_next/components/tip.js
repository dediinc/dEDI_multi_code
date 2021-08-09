import React from 'react'

import PropTypes from 'prop-types'

const Tip = (props) => {
  return (
    <>
      <div className="tip">
        <svg viewBox="0 0 1024 1024" className="icon">
          <path d="M146.286 768c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM950.857 438.857c0-38.857-34.857-73.143-73.143-73.143h-329.143c0-36 54.857-73.143 54.857-146.286 0-54.857-42.857-73.143-91.429-73.143-16 0-45.143 66.286-51.429 79.429-6.857 12.571-13.714 25.143-21.143 37.143-18.857 30.286-40.571 56.571-64 82.857-36.571 41.714-77.143 93.143-137.714 93.143h-18.286v365.714h18.286c100 0 197.714 73.143 308.571 73.143 64 0 108-26.857 108-95.429 0-10.857-1.143-21.714-2.857-32 24-13.143 37.143-45.714 37.143-72 0-13.714-3.429-27.429-10.286-39.429 19.429-18.286 30.286-41.143 30.286-68 0-18.286-8-45.143-20-58.857h189.143c39.429 0 73.143-33.714 73.143-73.143zM1024 438.286c0 80-66.286 146.857-146.286 146.857h-96.571c-1.714 24-9.143 46.857-21.143 68 1.143 8 1.714 16.571 1.714 24.571 0 36.571-12 73.143-34.286 101.714 1.143 108-72.571 171.429-178.286 171.429-64 0-124.571-17.714-184-39.429-34.857-12.571-91.429-33.714-127.429-33.714h-164.571c-40.571 0-73.143-32.571-73.143-73.143v-365.714c0-40.571 32.571-73.143 73.143-73.143h164.571c27.429 0 66.286-49.143 82.857-68 20.571-23.429 40-46.857 57.143-73.714 33.143-53.143 57.714-150.857 134.286-150.857 90.857 0 164.571 49.714 164.571 146.286 0 25.143-4 49.714-12.571 73.143h213.714c78.857 0 146.286 66.857 146.286 145.714z"></path>
        </svg>
        <span className="text tooltip">{props.text}</span>
      </div>
      <style jsx>
        {`
          .tip {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-primary-900);
          }
          .icon {
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            flex-shrink: 0;
          }
          .text {
            max-width: 600px;
            margin-left: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

Tip.defaultProps = {
  text: 'Press Ctrl/Cmd + Arrow Down for the next step',
}

Tip.propTypes = {
  text: PropTypes.string,
}

export default Tip
