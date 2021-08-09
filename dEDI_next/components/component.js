import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className="container">
        <img alt={props.image_alt} src={props.image_src} className="image" />
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: 490px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .image {
            top: var(--dl-space-space-tripleunit);
            left: var(--dl-space-space-tripleunit);
            width: 50px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
        `}
      </style>
    </>
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
