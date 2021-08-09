import React from 'react'

import PropTypes from 'prop-types'

import Component2 from './component2'
import Component3 from './component3'
import Component4 from './component4'

const Component7 = (props) => {
  return (
    <>
      <div className="container">
        <svg viewBox="0 0 1024 1024" className="icon">
          <path d="M512 0c282.857 0 512 229.143 512 512 0 281.143-228 512-512 512-283.429 0-512-230.286-512-512 0-282.857 229.143-512 512-512zM865.714 772c53.143-73.143 85.143-162.857 85.143-260 0-241.714-197.143-438.857-438.857-438.857s-438.857 197.143-438.857 438.857c0 97.143 32 186.857 85.143 260 20.571-102.286 70.286-186.857 174.857-186.857 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c104.571 0 154.286 84.571 174.857 186.857zM731.429 402.286c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="icon02">
          <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
        </svg>
        <svg viewBox="0 0 950.8571428571428 1024" className="icon04">
          <path d="M686.286 707.429c0-101.143-24.571-213.714-126.286-213.714-31.429 18.286-74.286 49.714-121.143 49.714s-89.714-31.429-121.143-49.714c-101.714 0-126.286 112.571-126.286 213.714 0 56.571 37.143 97.143 82.857 97.143h329.143c45.714 0 82.857-40.571 82.857-97.143zM587.429 368c0-82.286-66.857-148.571-148.571-148.571s-148.571 66.286-148.571 148.571c0 81.714 66.857 148 148.571 148s148.571-66.286 148.571-148zM950.857 676.571v109.714c0 10.286-8 18.286-18.286 18.286h-54.857v128c0 50.286-41.143 91.429-91.429 91.429h-694.857c-50.286 0-91.429-41.143-91.429-91.429v-841.143c0-50.286 41.143-91.429 91.429-91.429h694.857c50.286 0 91.429 41.143 91.429 91.429v128h54.857c10.286 0 18.286 8 18.286 18.286v109.714c0 10.286-8 18.286-18.286 18.286h-54.857v73.143h54.857c10.286 0 18.286 8 18.286 18.286v109.714c0 10.286-8 18.286-18.286 18.286h-54.857v73.143h54.857c10.286 0 18.286 8 18.286 18.286z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="icon06">
          <path d="M896 640v256h-256l98-98-124-122 62-62 122 124zM384 896h-256v-256l98 98 122-124 62 62-124 122zM128 384v-256h256l-98 98 124 122-62 62-122-124zM640 128h256v256l-98-98-122 124-62-62 124-122z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="icon08">
          <path d="M746 612q52 0 108 10v64q-40-10-108-10-120 0-192 42v-72q76-34 192-34zM554 532q84-34 192-34 52 0 108 10v64q-40-10-108-10-120 0-192 42v-72zM746 448q-120 0-192 42v-70q80-36 192-36 52 0 108 10v66q-48-12-108-12zM896 790v-492q-66-20-150-20-130 0-234 64v490q104-64 234-64 78 0 150 22zM746 192q152 0 236 64v622q0 8-7 15t-15 7q-6 0-10-2-82-44-204-44-130 0-234 64-86-64-234-64-108 0-204 46-2 0-5 1t-5 1q-8 0-15-6t-7-14v-626q86-64 236-64 148 0 234 64 86-64 234-64z"></path>
        </svg>
        <svg viewBox="0 0 1097.142857142857 1024" className="icon10">
          <path d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"></path>
        </svg>
        <div className="container1">
          <div className="container2">
            <svg viewBox="0 0 1024 1024" className="icon12">
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
          <Component2></Component2>
          <Component3></Component3>
          <Component4></Component4>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            top: 2%;
            flex: 0 0 auto;
            left: 11%;
            right: auto;
            width: 10%;
            bottom: auto;
            height: 95%;
            display: flex;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .icon {
            top: 3%;
            fill: #b3b0b0;
            left: 35%;
            right: auto;
            width: 30%;
            bottom: auto;
            position: absolute;
          }
          .icon02 {
            top: 501px;
            fill: #b3b0b0;
            left: auto;
            right: -296px;
            width: 19%;
            bottom: auto;
            position: absolute;
          }
          .icon04 {
            top: 554px;
            fill: #b3b0b0;
            left: auto;
            right: -286px;
            width: 16%;
            bottom: auto;
            position: absolute;
          }
          .icon06 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: -294px;
            width: 19%;
            bottom: 323px;
            position: absolute;
          }
          .icon08 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: -287px;
            width: 18%;
            bottom: 286px;
            position: absolute;
          }
          .icon10 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: -283px;
            width: 18%;
            bottom: 246px;
            position: absolute;
          }
          .container1 {
            top: 10%;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 75%;
            display: flex;
            position: absolute;
            align-self: stretch;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .container2 {
            width: 98%;
            height: 73px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .icon12 {
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
            .icon02 {
              fill: #b3b0b0;
              width: 5%;
              height: auto;
            }
            .icon04 {
              fill: #b3b0b0;
              width: 4%;
              height: auto;
            }
            .icon06 {
              fill: #b3b0b0;
              width: 5%;
              height: auto;
            }
            .icon08 {
              fill: #b3b0b0;
              width: 5%;
              height: auto;
            }
            .icon10 {
              fill: #b3b0b0;
              width: 5%;
              height: auto;
            }
            .icon12 {
              fill: #b3b0b0;
              width: 5%;
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .icon02 {
              fill: #b3b0b0;
              width: 7%;
              height: auto;
            }
            .icon04 {
              fill: #b3b0b0;
              width: 5%;
              height: auto;
            }
            .icon06 {
              fill: #b3b0b0;
              width: 7%;
              height: auto;
            }
            .icon08 {
              fill: #b3b0b0;
              width: 7%;
              height: auto;
            }
            .icon10 {
              fill: #b3b0b0;
              width: 6%;
              height: auto;
            }
            .icon12 {
              fill: #b3b0b0;
              width: 7%;
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .icon02 {
              fill: #b3b0b0;
              width: 8%;
              height: auto;
            }
            .icon04 {
              fill: #b3b0b0;
              width: 6%;
              height: auto;
            }
            .icon06 {
              fill: #b3b0b0;
              width: 8%;
              height: auto;
            }
            .icon08 {
              fill: #b3b0b0;
              width: 8%;
              height: auto;
            }
            .icon10 {
              fill: #b3b0b0;
              width: 7%;
              height: auto;
            }
            .icon12 {
              fill: #b3b0b0;
              width: 8%;
              height: auto;
            }
            .dashboard {
              font-size: 100%;
              letter-spacing: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Component7.defaultProps = {
  link_dashboard: 'https://example.com',
}

Component7.propTypes = {
  link_dashboard: PropTypes.string,
}

export default Component7
