import React from 'react'

import PropTypes from 'prop-types'

const Component5 = (props) => {
  return (
    <>
      <div className="container">
        <img alt={props.image_alt} src={props.image_src} className="image" />
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 10%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .image {
            height: 80%;
            object-fit: cover;
          }
        `}
      </style>
    </>
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
