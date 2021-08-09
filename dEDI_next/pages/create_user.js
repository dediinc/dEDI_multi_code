import React from 'react'
import Head from 'next/head'

const CreateUser = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>create_user - dEDI Icn</title>
          <meta property="og:title" content="create_user - dEDI Icn" />
        </Head>
        <div id="user_container" className="container1">
          <div id="user_body" className="body">
            <div id="user_footer" className="footer">
              <span id="user_footer_copy" className="copyright">
                © 2021 dEDI Incorporated
              </span>
              <img
                id="user_footer_logo"
                alt="image"
                src="/playground_assets/dedi_logo_trans-1000h.png"
                className="image"
              />
            </div>
            <div id="user_header" className="header">
              <img
                id="user_header_logo"
                alt="dEDI logo"
                src="/playground_assets/dedi_logo_trans-1000h.png"
                className="logo"
              />
            </div>
            <div id="user_main" className="main">
              <div id="user_form_container" className="userformcontainer">
                <div id="user_form" className="userform">
                  <input
                    type="email"
                    id="user_email_input"
                    name="Email"
                    required="true"
                    placeholder="Email"
                    autoComplete="off"
                    className="emailinpute thqTextInput"
                  />
                  <input
                    type="password"
                    id="create_user_password"
                    name="Password"
                    required="true"
                    placeholder="Password"
                    autoComplete="off"
                    className="passwordinput thqTextInput"
                  />
                  <input
                    type="text"
                    id="create_user_org"
                    name="Org ID"
                    required="true"
                    autoFocus="true"
                    placeholder="Organization ID"
                    autoComplete="off"
                    className="organizationidinput thqTextInput"
                  />
                  <div id="create_user_form" className="container2"></div>
                </div>
                <h1 id="user_form_header" className="text">
                  Create New User
                </h1>
                <button id="org_form_button" className="button thqButton">
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: fit-content;
            height: fit-content;
            display: flex;
            z-index: 100;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container1 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            margin-top: auto;
            align-items: flex-start;
            margin-left: auto;
            padding-top: 2%;
            margin-right: auto;
            padding-left: 100px;
            margin-bottom: auto;
            padding-right: 100px;
            flex-direction: row;
            padding-bottom: 2%;
            background-color: #e0e0e0;
          }
          .body {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            flex-direction: row;
            background-color: #f5f5f5;
          }
          .footer {
            top: auto;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 1%;
            height: 5%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #f5f5f5;
          }
          .copyright {
            top: auto;
            right: 1%;
            bottom: 30%;
            position: absolute;
          }
          .image {
            width: 100px;
            object-fit: cover;
          }
          .header {
            top: auto;
            flex: 0 0 auto;
            left: auto;
            right: auto;
            width: 100%;
            bottom: auto;
            height: 10%;
            display: flex;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: row;
            justify-content: center;
            background-color: #ffffff;
          }
          .logo {
            height: 100%;
            object-fit: cover;
          }
          .main {
            top: 11%;
            flex: 0 0 auto;
            left: 13%;
            right: auto;
            width: 80%;
            bottom: auto;
            height: 83%;
            display: flex;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #f9f9f9;
          }
          .userformcontainer {
            top: 99px;
            flex: 0 0 auto;
            width: 45%;
            bottom: auto;
            height: 75%;
            margin: auto;
            display: flex;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .userform {
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
            border-top-left-radius: var(--dl-radius-radius-radius2);
            border-top-right-radius: var(--dl-radius-radius-radius2);
            border-bottom-right-radius: var(--dl-radius-radius-radius2);
          }
          .emailinpute {
            color: #b3b0b0;
            width: 85%;
            font-size: 22px;
            margin-top: 0px;
            border-style: inset;
            border-bottom-width: 1px;
          }
          .passwordinput {
            color: #b3b0b0;
            width: 85%;
            font-size: 22px;
            margin-top: 3rem;
            border-style: inset;
            border-bottom-width: 1px;
          }
          .organizationidinput {
            color: #b3b0b0;
            width: 85%;
            font-size: 22px;
            margin-top: 3rem;
            border-style: solid;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .container2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            position: relative;
          }
          .text {
            top: 0px;
            color: #b3b0b0;
            margin: auto;
            position: absolute;
            font-style: normal;
            font-family: Noto Sans;
            font-weight: 400;
          }
          .button {
            margin-top: 20%;
            background-color: #d8d8d8;
          }
          @media (max-width: 991px) {
            .container1 {
              top: auto;
              height: 100%;
              margin: auto;
              position: absolute;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              padding-top: 2%;
              padding-left: 100px;
              padding-right: 100px;
              padding-bottom: 2%;
              justify-content: center;
              background-color: #e0e0e0;
            }
            .body {
              width: 100%;
              height: 100%;
              position: relative;
              background-color: #f5f5f5;
            }
            .footer {
              top: auto;
              left: 0px;
              right: 0px;
              width: 100%;
              bottom: 1%;
              height: 5%;
              position: absolute;
              align-items: center;
              justify-content: flex-start;
              background-color: #f5f5f5;
            }
            .copyright {
              top: auto;
              right: 1%;
              bottom: 30%;
              position: absolute;
            }
            .header {
              top: auto;
              left: auto;
              right: auto;
              width: 100%;
              bottom: auto;
              height: 10%;
              position: absolute;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              justify-content: center;
            }
            .logo {
              width: auto;
              height: 100%;
            }
            .main {
              top: 11%;
              left: 13%;
              right: auto;
              width: 80%;
              bottom: auto;
              height: 83%;
              position: absolute;
              align-items: center;
              justify-content: center;
            }
            .userformcontainer {
              align-items: center;
              justify-content: center;
            }
            .button {
              margin-top: 20%;
              background-color: #d8d8d8;
            }
          }
          @media (max-width: 767px) {
            .container {
              align-items: center;
              justify-content: flex-start;
            }
            .container1 {
              justify-content: center;
            }
            .body {
              height: 100%;
              position: relative;
            }
            .footer {
              top: auto;
              left: 0px;
              right: 0px;
              width: 100%;
              bottom: 1%;
              height: 5%;
              position: absolute;
              align-self: flex-end;
              align-items: center;
              flex-direction: row;
              justify-content: flex-start;
            }
            .copyright {
              top: auto;
              right: 1%;
              bottom: 30%;
              margin: auto;
              position: absolute;
            }
            .header {
              top: auto;
              left: auto;
              right: auto;
              width: 100%;
              bottom: auto;
              height: 10%;
              position: absolute;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              justify-content: center;
            }
            .logo {
              width: auto;
              height: 100%;
            }
            .main {
              top: 10%;
              left: 20%;
              right: auto;
              width: 80%;
              bottom: auto;
              height: 84%;
              position: absolute;
              align-items: flex-start;
              justify-content: flex-start;
            }
          }
          @media (max-width: 479px) {
            .body {
              height: 1002px;
              position: relative;
              border-top-width: 1px;
              border-left-width: 1px;
              border-right-width: 1px;
              border-bottom-width: 1px;
            }
            .footer {
              width: 100%;
              height: 5%;
              position: relative;
              align-self: flex-end;
              flex-direction: column;
              justify-content: flex-end;
            }
            .copyright {
              top: auto;
              right: 1%;
              bottom: 16px;
              position: absolute;
            }
            .header {
              top: auto;
              left: auto;
              right: auto;
              width: 99%;
              bottom: auto;
              height: 10%;
              margin: 0px;
              position: absolute;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .logo {
              top: auto;
              right: 15%;
              width: auto;
              bottom: 0px;
              height: 100%;
              margin: auto;
              position: absolute;
            }
            .main {
              top: 10%;
              left: 20%;
              right: auto;
              width: 80%;
              bottom: auto;
              height: 84%;
              position: absolute;
              align-items: flex-start;
              justify-content: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

export default CreateUser
