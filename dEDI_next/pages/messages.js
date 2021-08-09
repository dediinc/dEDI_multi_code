import React from 'react'
import Head from 'next/head'

const Messages = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>messages - dEDI Icn</title>
          <meta property="og:title" content="messages - dEDI Icn" />
        </Head>
        <div id="msg_container" className="container1">
          <div id="msg_body" className="body">
            <div id="msg_footer" className="footer">
              <img
                id="msg_footer_logo"
                alt="image"
                src="/playground_assets/dedi_logo1%20-1000h.png"
                className="footerlogo"
              />
              <span id="msg_footer_copy" className="copyright">
                © 2021 dEDI Incorporated
              </span>
            </div>
            <div id="msg_header" className="header">
              <img
                id="msg_header_logo"
                alt="dEDI logo"
                src="/playground_assets/dedi_logo_trans-1000h.png"
                className="logo"
              />
            </div>
            <div id="msg_sidebar" className="sidebar">
              <div id="msg_menu" className="menu">
                <div id="msg_menu-link_1" className="dashdashlink">
                  <svg
                    id="msg_menu_icon_1"
                    viewBox="0 0 1024 1024"
                    className="dashdashicon"
                  >
                    <path d="M219.429 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM329.143 402.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM573.714 677.143l57.714-218.286c4.571-19.429-6.857-39.429-26.286-44.571v0c-19.429-5.143-39.429 6.857-44.571 26.286l-57.714 218.286c-45.143 3.429-84.571 34.857-97.143 81.143-15.429 58.857 20 118.857 78.286 134.286 58.857 15.429 118.857-20 134.286-78.286 12-46.286-7.429-93.143-44.571-118.857zM950.857 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM585.143 292.571c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM841.143 402.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM1024 658.286c0 98.286-28 193.143-80.571 276-6.857 10.286-18.286 16.571-30.857 16.571h-801.143c-12.571 0-24-6.286-30.857-16.571-52.571-82.286-80.571-177.714-80.571-276 0-282.286 229.714-512 512-512s512 229.714 512 512z"></path>
                  </svg>
                  <span id="msg_menu_title_1" className="dashdashtitle">
                    dashboard
                  </span>
                </div>
                <div id="msg_menu-link_2" className="dashworkinglink">
                  <svg
                    id="msg_menu_icon_2"
                    viewBox="0 0 1024 1024"
                    className="dashworkingicon"
                  >
                    <path d="M710 72l242 242-242 240h186v342h-342v-342h156l-240-240v156h-342v-342h342v186zM128 896v-342h342v342h-342z"></path>
                  </svg>
                  <span id="msg_menu_title_1" className="dashworkingtitle">
                    working
                  </span>
                </div>
                <div id="msg_menu-link_3" className="dashformslink">
                  <svg
                    id="msg_menu_icon_3"
                    viewBox="0 0 877.7142857142857 1024"
                    className="dashformsicon"
                  >
                    <path d="M838.857 272c5.714 5.714 10.857 12.571 16 20.571h-269.714v-269.714c8 5.143 14.857 10.286 20.571 16zM566.857 365.714h310.857v603.429c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h457.143v310.857c0 30.286 24.571 54.857 54.857 54.857zM658.286 786.286v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 640v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 493.714v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286z"></path>
                  </svg>
                  <span id="msg_menu_title_3" className="dashformstitle">
                    <span>forms</span>
                  </span>
                </div>
                <div id="msg_menu-link_4" className="dashmsgslink">
                  <svg
                    id="msg_menu_icon_4"
                    viewBox="0 0 1024 1024"
                    className="dashmsgsicon"
                  >
                    <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
                  </svg>
                  <span id="forms_menu_title_4" className="dashmsgstitle">
                    <span>msgs</span>
                  </span>
                </div>
                <div id="forms_menu-link_5" className="dashpartnerslink">
                  <svg
                    id="forms_menu_icon_5"
                    viewBox="0 0 1097.142857142857 1024"
                    className="dashpartnersicon"
                  >
                    <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
                  </svg>
                  <span id="forms_menu_title_5" className="dashpartnerstitle">
                    <span>partners</span>
                  </span>
                </div>
                <div id="forms_menu-link_6" className="dashtrackinglink">
                  <svg
                    id="forms_menu_icon_6"
                    viewBox="0 0 1024 1024"
                    className="dashtrackingicon"
                  >
                    <path d="M1024 576l-128-256h-192v-128c0-35.2-28.8-64-64-64h-576c-35.2 0-64 28.8-64 64v512l64 64h81.166c-10.898 18.832-17.166 40.678-17.166 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.268-45.168-17.166-64h354.334c-10.898 18.832-17.168 40.678-17.168 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.27-45.168-17.168-64h81.168v-192zM704 576v-192h132.668l96 192h-228.668z"></path>
                  </svg>
                  <span id="forms_menu_title_6" className="dashtrackingtitle">
                    <span>tracking</span>
                  </span>
                </div>
                <div id="forms_menu-link_7" className="dashinventorylink">
                  <svg
                    id="forms_menu_icon_7"
                    viewBox="0 0 1024 1024"
                    className="dashinventoryicon"
                  >
                    <path d="M512 298v-84h-384v84h384zM512 470v-86h-384v86h384zM896 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-768q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h768z"></path>
                  </svg>
                  <span id="forms_menu_title_7" className="dashinventorytitle">
                    <span>inventory</span>
                  </span>
                </div>
                <div id="forms_menu-link_8" className="dashfinanciallink">
                  <svg
                    id="forms_menu_icon_8"
                    viewBox="0 0 1097.142857142857 1024"
                    className="dashfinancialicon"
                  >
                    <path d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"></path>
                  </svg>
                  <span id="forms_menu_title_8" className="dashfinancialtitle">
                    <span>financial</span>
                  </span>
                </div>
              </div>
              <svg
                id="forms_user_icon"
                viewBox="0 0 1024 1024"
                className="usericon"
              >
                <path d="M512 0c282.857 0 512 229.143 512 512 0 281.143-228 512-512 512-283.429 0-512-230.286-512-512 0-282.857 229.143-512 512-512zM865.714 772c53.143-73.143 85.143-162.857 85.143-260 0-241.714-197.143-438.857-438.857-438.857s-438.857 197.143-438.857 438.857c0 97.143 32 186.857 85.143 260 20.571-102.286 70.286-186.857 174.857-186.857 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c104.571 0 154.286 84.571 174.857 186.857zM731.429 402.286c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429z"></path>
              </svg>
            </div>
            <div id="forms_content" className="main">
              <div id="forms_content_container" className="contentcolumn">
                <div id="msg_msg_preview" className="msgpreview">
                  <div id="contact_preview_1" className="contactpreview">
                    <svg
                      id="contact_msg_icon_1"
                      viewBox="0 0 1024 1024"
                      className="icon09"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="contact_msg_name_1" className="msgcompanyname">
                      <span className="text06">Company c</span>
                    </span>
                    <span id="contact_msg_1" className="text07">
                      ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                      ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                    </span>
                    <span id="contact_msg_rcvd_1" className="text08">
                      today 1354
                    </span>
                  </div>
                  <div id="contact_preview_2" className="contactpreview01">
                    <svg
                      id="contact_msg_icon_2"
                      viewBox="0 0 1024 1024"
                      className="icon11"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="contact_msg_name_2" className="msgcompanyname01">
                      <span className="text09">Company c</span>
                    </span>
                    <span id="contact_msg_2" className="text10">
                      ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                      ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                    </span>
                    <span id="contact_msg_rcvd_2" className="text11">
                      today 1354
                    </span>
                  </div>
                  <div id="contact_preview_3" className="contactpreview02">
                    <svg
                      id="contact_msg_icon_3"
                      viewBox="0 0 1024 1024"
                      className="icon13"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="contact_msg_name_3" className="msgcompanyname02">
                      <span className="text12">Company c</span>
                    </span>
                    <span id="contact_msg_3" className="text13">
                      ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                      ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                    </span>
                    <span id="contact_msg_rcvd_3" className="text14">
                      today 1354
                    </span>
                  </div>
                  <div id="contact_preview_4" className="contactpreview03">
                    <svg
                      id="contact_msg_icon_4"
                      viewBox="0 0 1024 1024"
                      className="icon15"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="contact_msg_name_4" className="msgcompanyname03">
                      <span className="text15">Company c</span>
                    </span>
                    <span id="contact_msg_4" className="text16">
                      ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                      ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                    </span>
                    <span id="contact_msg_rcvd_4" className="text17">
                      today 1354
                    </span>
                  </div>
                  <div id="contact_preview_5" className="contactpreview04">
                    <svg
                      id="contact_msg_icon_5"
                      viewBox="0 0 1024 1024"
                      className="icon17"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="contact_msg_name_5" className="msgcompanyname04">
                      <span className="text18">Company c</span>
                    </span>
                    <span id="contact_msg_5" className="text19">
                      ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                      ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                    </span>
                    <span id="contact_msg_rcvd_5" className="text20">
                      today 1354
                    </span>
                  </div>
                  <div id="contact_preview_6" className="contactpreview05">
                    <svg
                      id="contact_msg_icon_6"
                      viewBox="0 0 1024 1024"
                      className="icon19"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="contact_msg_name_6" className="msgcompanyname05">
                      <span className="text21">Company c</span>
                    </span>
                    <span id="contact_msg_6" className="text22">
                      ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                      ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                    </span>
                    <span id="contact_msg_rcvd_6" className="text23">
                      today 1354
                    </span>
                  </div>
                  <div id="contact_preview_7" className="contactpreview06">
                    <svg
                      id="contact_msg_icon_7"
                      viewBox="0 0 1024 1024"
                      className="icon21"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="contact_msg_name_7" className="msgcompanyname06">
                      <span className="text24">Company c</span>
                    </span>
                    <span id="contact_msg_7" className="text25">
                      ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                      ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                    </span>
                    <span id="contact_msg_rcvd_7" className="text26">
                      today 1354
                    </span>
                  </div>
                  <div id="contact_preview_8" className="contactpreview07">
                    <svg
                      id="contact_msg_icon_8"
                      viewBox="0 0 1024 1024"
                      className="icon23"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="contact_msg_name_8" className="msgcompanyname07">
                      <span className="text27">Company c</span>
                    </span>
                    <span id="contact_msg_8" className="text28">
                      ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                      ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                    </span>
                    <span id="contact_msg_rcvd_8" className="text29">
                      today 1354
                    </span>
                  </div>
                  <div id="contact_preview_9" className="contactpreview08">
                    <svg
                      id="contact_msg_icon_9"
                      viewBox="0 0 1024 1024"
                      className="icon25"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="contact_msg_name_9" className="msgcompanyname08">
                      <span className="text30">Company c</span>
                    </span>
                    <span id="contact_msg_9" className="text31">
                      ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                      ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                    </span>
                    <span id="contact_msg_rcvd_9" className="text32">
                      today 1354
                    </span>
                  </div>
                  <div id="contact_preview_10" className="contactpreview09">
                    <svg
                      id="contact_msg_icon_10"
                      viewBox="0 0 1024 1024"
                      className="icon27"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="contact_msg_name_10" className="msgcompanyname09">
                      <span className="text33">Company c</span>
                    </span>
                    <span id="contact_msg_10" className="text34">
                      ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                      ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                    </span>
                    <span id="contact_msg_rcvd_10" className="text35">
                      today 1354
                    </span>
                  </div>
                </div>
                <div id="active_msg_form" className="activemsgform">
                  <div id="active_msg_container_2" className="container2">
                    <svg
                      id="active_msg_user_icon"
                      viewBox="0 0 1024 1024"
                      className="icon29"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="active_msg_msg_2" className="text36">
                      <span>
                        This would be a message from the user in response to his
                        trading partner.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span id="active_msg_msg_3" className="text38">
                      <span>
                        This would be a message from the user in response to his
                        trading partner.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span id="active_msg_time_2" className="text40">
                      <span>Today 1501</span>
                    </span>
                    <span id="active_msg_time_3" className="text42">
                      <span>Today 1503</span>
                    </span>
                  </div>
                  <div id="active_msg_container_3" className="container3">
                    <svg
                      id="active_msg_partner_icon_2"
                      viewBox="0 0 1024 1024"
                      className="icon31"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="active_msg_msg_4" className="text44">
                      This would be a message the last message received in this
                      message.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span id="active_msg_time_4" className="text45">
                      <span>Today 1530</span>
                    </span>
                  </div>
                  <div id="active_msg_container_1" className="container4">
                    <svg
                      id="active_msg_partner_icon_1"
                      viewBox="0 0 1024 1024"
                      className="icon33"
                    >
                      <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                    </svg>
                    <span id="active_msg_msg_1" className="text47">
                      This would be a message from the partner if this were a
                      real message it would say something REALLY important.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span id="active_msg_time_1" className="text48">
                      <span>Today 1436</span>
                    </span>
                  </div>
                  <div id="active_msg_entry_container" className="container5">
                    <div id="active_msg_entry_text" className="container6">
                      <textarea
                        id="msg_msg_input"
                        name="msg_input"
                        placeholder="message here"
                        className="textarea thqTextArea"
                      ></textarea>
                    </div>
                    <button
                      id="active_msg_send_button"
                      name="send_button"
                      className="button thqButton"
                    >
                      send
                    </button>
                  </div>
                </div>
              </div>
              <h1 id="forms_content_header" className="text50">
                <span>messages</span>
              </h1>
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
            padding-left: 40px;
            margin-bottom: auto;
            padding-right: 40px;
            flex-direction: row;
            padding-bottom: 2%;
            justify-content: center;
            background-color: #e0e0e0;
          }
          .body {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            flex-direction: row;
            background-color: #ffffff;
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
            flex-direction: row;
          }
          .footerlogo {
            top: auto;
            left: 1%;
            right: auto;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .copyright {
            top: auto;
            right: 1%;
            bottom: 30%;
            position: absolute;
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
          }
          .logo {
            height: 100%;
            margin: auto;
            object-fit: cover;
          }
          .sidebar {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: auto;
            width: 10%;
            bottom: auto;
            height: 94%;
            display: flex;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
          }
          .menu {
            top: 11%;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 50%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashdashlink {
            flex: 0 0 auto;
            width: 99%;
            height: 12%;
            display: flex;
            align-self: flex-start;
            margin-top: 1%;
            flex-direction: column;
          }
          .dashdashicon {
            fill: #b3b0b0;
            width: 35%;
            align-self: center;
          }
          .dashdashtitle {
            color: #b3b0b0;
            align-self: center;
          }
          .dashworkinglink {
            width: 99%;
            height: 12%;
            display: flex;
            align-self: flex-start;
            margin-top: 1%;
            flex-direction: column;
          }
          .dashworkingicon {
            fill: #b3b0b0;
            width: 35%;
            align-self: center;
          }
          .dashworkingtitle {
            color: #b3b0b0;
            align-self: center;
          }
          .dashformslink {
            flex: 0 0 auto;
            width: 99%;
            height: 12%;
            display: flex;
            align-self: flex-start;
            margin-top: 1%;
            flex-direction: column;
          }
          .dashformsicon {
            fill: #b3b0b0;
            width: 35%;
            align-self: center;
          }
          .dashformstitle {
            color: #b3b0b0;
            align-self: center;
          }
          .dashmsgslink {
            flex: 0 0 auto;
            width: 99%;
            height: 12%;
            display: flex;
            align-self: flex-start;
            margin-top: 1%;
            flex-direction: column;
          }
          .dashmsgsicon {
            fill: #b3b0b0;
            width: 35%;
            align-self: center;
          }
          .dashmsgstitle {
            color: #b3b0b0;
            align-self: center;
          }
          .dashpartnerslink {
            flex: 0 0 auto;
            width: 99%;
            height: 12%;
            display: flex;
            align-self: flex-start;
            margin-top: 1%;
            flex-direction: column;
          }
          .dashpartnersicon {
            fill: #b3b0b0;
            width: 35%;
            align-self: center;
          }
          .dashpartnerstitle {
            color: #b3b0b0;
            align-self: center;
          }
          .dashtrackinglink {
            flex: 0 0 auto;
            width: 99%;
            height: 12%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .dashtrackingicon {
            fill: #b3b0b0;
            width: 35%;
            align-self: center;
          }
          .dashtrackingtitle {
            color: #b3b0b0;
            align-self: center;
          }
          .dashinventorylink {
            flex: 0 0 auto;
            width: 99%;
            height: 12%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .dashinventoryicon {
            fill: #b3b0b0;
            width: 35%;
            align-self: center;
          }
          .dashinventorytitle {
            color: #b3b0b0;
            align-self: center;
          }
          .dashfinanciallink {
            flex: 0 0 auto;
            width: 99%;
            height: 12%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .dashfinancialicon {
            fill: #b3b0b0;
            width: 35%;
            align-self: center;
          }
          .dashfinancialtitle {
            color: #b3b0b0;
            align-self: center;
          }
          .usericon {
            top: 2%;
            fill: #b3b0b0;
            width: 50%;
            margin: auto;
            position: absolute;
            align-self: center;
          }
          .main {
            top: 10%;
            flex: 0 0 auto;
            left: 15%;
            right: auto;
            width: 80%;
            bottom: auto;
            height: 84%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .contentcolumn {
            flex: 0 0 auto;
            width: 100%;
            height: 90%;
            display: flex;
            position: relative;
            align-self: flex-end;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .msgpreview {
            flex: 0 0 auto;
            width: 30%;
            height: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .contactpreview {
            flex: 0 0 auto;
            width: 100%;
            height: 10%;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
            justify-content: center;
          }
          .icon09 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: auto;
            width: 18%;
            bottom: auto;
            height: 100%;
            position: absolute;
          }
          .msgcompanyname {
            top: 13%;
            left: 25%;
            color: #b3b0b0;
            right: 0px;
            bottom: auto;
            margin: 1%;
            position: absolute;
            font-size: 70%;
          }
          .text06 {
            font-style: normal;
            font-weight: 700;
          }
          .text07 {
            color: #b3b0b0;
            width: 70%;
            height: 70%;
            font-size: 50%;
            align-self: center;
            margin-top: 12%;
            margin-left: 20%;
          }
          .text08 {
            top: 18%;
            left: auto;
            color: #b3b0b0;
            right: 1%;
            bottom: 0px;
            position: absolute;
            font-size: 70%;
          }
          .contactpreview01 {
            flex: 0 0 auto;
            width: 100%;
            height: 10%;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
            justify-content: center;
          }
          .icon11 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: auto;
            width: 18%;
            bottom: auto;
            height: 100%;
            position: absolute;
          }
          .msgcompanyname01 {
            top: 13%;
            left: 25%;
            color: #b3b0b0;
            right: 0px;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .text09 {
            font-style: normal;
            font-weight: 700;
          }
          .text10 {
            color: #b3b0b0;
            width: 70%;
            height: 70%;
            font-size: 50%;
            align-self: center;
            margin-top: 12%;
            margin-left: 20%;
          }
          .text11 {
            top: 18%;
            left: auto;
            color: #b3b0b0;
            right: 1%;
            bottom: 0px;
            position: absolute;
            font-size: 70%;
          }
          .contactpreview02 {
            flex: 0 0 auto;
            width: 100%;
            height: 10%;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
            justify-content: center;
          }
          .icon13 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: auto;
            width: 18%;
            bottom: auto;
            height: 100%;
            position: absolute;
          }
          .msgcompanyname02 {
            top: 13%;
            left: 25%;
            color: #b3b0b0;
            right: 0px;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .text12 {
            font-style: normal;
            font-weight: 700;
          }
          .text13 {
            color: #b3b0b0;
            width: 70%;
            height: 70%;
            font-size: 50%;
            align-self: center;
            margin-top: 12%;
            margin-left: 20%;
            margin-right: 0px;
            margin-bottom: 0px;
          }
          .text14 {
            top: 18%;
            left: auto;
            color: #b3b0b0;
            right: 1%;
            bottom: 0px;
            position: absolute;
            font-size: 70%;
          }
          .contactpreview03 {
            flex: 0 0 auto;
            width: 100%;
            height: 10%;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
            justify-content: center;
          }
          .icon15 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: auto;
            width: 18%;
            bottom: auto;
            height: 100%;
            position: absolute;
          }
          .msgcompanyname03 {
            top: 13%;
            left: 25%;
            color: #b3b0b0;
            right: 0px;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .text15 {
            font-style: normal;
            font-weight: 700;
          }
          .text16 {
            color: #b3b0b0;
            width: 70%;
            height: 70%;
            font-size: 50%;
            align-self: center;
            margin-top: 13%;
            margin-left: 20%;
            margin-right: 0px;
            margin-bottom: 0px;
          }
          .text17 {
            top: 18%;
            left: auto;
            color: #b3b0b0;
            right: 1%;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .contactpreview04 {
            flex: 0 0 auto;
            width: 100%;
            height: 10%;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
            justify-content: center;
          }
          .icon17 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: auto;
            width: 18%;
            bottom: auto;
            height: 100%;
            position: absolute;
          }
          .msgcompanyname04 {
            top: 13%;
            left: 25%;
            color: #b3b0b0;
            right: 0px;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .text18 {
            font-style: normal;
            font-weight: 700;
          }
          .text19 {
            color: #b3b0b0;
            width: 70%;
            height: 70%;
            font-size: 50%;
            align-self: center;
            margin-top: 13%;
            margin-left: 20%;
          }
          .text20 {
            top: 18%;
            left: auto;
            color: #b3b0b0;
            right: 1%;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .contactpreview05 {
            flex: 0 0 auto;
            width: 100%;
            height: 10%;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
            justify-content: center;
          }
          .icon19 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: auto;
            width: 18%;
            bottom: auto;
            height: 100%;
            position: absolute;
          }
          .msgcompanyname05 {
            top: 13%;
            left: 25%;
            color: #b3b0b0;
            right: 0px;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .text21 {
            font-style: normal;
            font-weight: 700;
          }
          .text22 {
            color: #b3b0b0;
            width: 70%;
            height: 70%;
            font-size: 50%;
            align-self: center;
            margin-top: 13%;
            margin-left: 20%;
            margin-right: 0px;
            margin-bottom: 0px;
          }
          .text23 {
            top: 18%;
            left: auto;
            color: #b3b0b0;
            right: 1%;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .contactpreview06 {
            flex: 0 0 auto;
            width: 100%;
            height: 10%;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .icon21 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: auto;
            width: 18%;
            bottom: auto;
            height: 100%;
            position: absolute;
          }
          .msgcompanyname06 {
            top: 13%;
            left: 25%;
            color: #b3b0b0;
            right: auto;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .text24 {
            font-style: normal;
            font-weight: 700;
          }
          .text25 {
            color: #b3b0b0;
            width: 70%;
            height: 70%;
            font-size: 50%;
            align-self: center;
            margin-top: 13%;
            margin-left: 20%;
          }
          .text26 {
            top: 18%;
            left: auto;
            color: #b3b0b0;
            right: 1%;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .contactpreview07 {
            flex: 0 0 auto;
            width: 100%;
            height: 10%;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
            justify-content: center;
          }
          .icon23 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: auto;
            width: 18%;
            bottom: auto;
            height: 100%;
            position: absolute;
          }
          .msgcompanyname07 {
            top: 13%;
            left: 25%;
            color: #b3b0b0;
            right: auto;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .text27 {
            font-style: normal;
            font-weight: 700;
          }
          .text28 {
            color: #b3b0b0;
            width: 70%;
            height: 70%;
            font-size: 50%;
            align-self: center;
            margin-top: 13%;
            margin-left: 20%;
          }
          .text29 {
            top: 18%;
            left: auto;
            color: #b3b0b0;
            right: 1%;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .contactpreview08 {
            flex: 0 0 auto;
            width: 100%;
            height: 10%;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
            justify-content: center;
          }
          .icon25 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: auto;
            width: 18%;
            bottom: auto;
            height: 100%;
            position: absolute;
          }
          .msgcompanyname08 {
            top: 13%;
            left: 25%;
            color: #b3b0b0;
            right: auto;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .text30 {
            font-style: normal;
            font-weight: 700;
          }
          .text31 {
            color: #b3b0b0;
            width: 70%;
            height: 70%;
            font-size: 50%;
            align-self: center;
            margin-top: 13%;
            margin-left: 20%;
          }
          .text32 {
            top: 18%;
            left: auto;
            color: #b3b0b0;
            right: 1%;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .contactpreview09 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .icon27 {
            top: auto;
            fill: #b3b0b0;
            left: auto;
            right: auto;
            width: 18%;
            bottom: auto;
            height: 100%;
            position: absolute;
          }
          .msgcompanyname09 {
            top: 13%;
            left: 25%;
            color: #b3b0b0;
            right: auto;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .text33 {
            font-style: normal;
            font-weight: 700;
          }
          .text34 {
            color: #b3b0b0;
            width: 70%;
            height: 70%;
            font-size: 50%;
            align-self: center;
            margin-top: 13%;
            margin-left: 20%;
          }
          .text35 {
            top: 18%;
            left: auto;
            color: #b3b0b0;
            right: 1%;
            bottom: auto;
            position: absolute;
            font-size: 70%;
          }
          .activemsgform {
            top: 0px;
            flex: 0 0 auto;
            right: 0px;
            width: 70%;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
          }
          .container2 {
            top: 19%;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 30%;
            margin: auto;
            display: flex;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
          }
          .icon29 {
            top: 20%;
            fill: #b3b0b0;
            right: 2%;
            width: 15%;
            height: 30%;
            margin: auto;
            position: absolute;
          }
          .text36 {
            top: 30%;
            left: 10%;
            color: #ffffff;
            width: 70%;
            bottom: auto;
            position: absolute;
            border-color: #b3b0b0;
            border-width: 1px;
            padding-left: 1%;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #D9D9D9;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: var(--dl-radius-radius-radius8);
            border-bottom-right-radius: var(--dl-radius-radius-radius8);
          }
          .text38 {
            top: auto;
            left: 10%;
            color: #ffffff;
            right: auto;
            width: 70%;
            bottom: 12px;
            position: absolute;
            border-color: #b3b0b0;
            border-width: 1px;
            padding-left: 1%;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #D9D9D9;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: var(--dl-radius-radius-radius8);
            border-bottom-right-radius: var(--dl-radius-radius-radius8);
          }
          .text40 {
            top: 5%;
            left: auto;
            color: #b3b0b0;
            right: 5%;
            bottom: auto;
            position: absolute;
            font-size: 80%;
          }
          .text42 {
            top: auto;
            left: auto;
            color: #b3b0b0;
            right: 5%;
            bottom: 30%;
            position: absolute;
            font-size: 80%;
          }
          .container3 {
            top: 50%;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 20%;
            display: flex;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
          }
          .icon31 {
            top: 25%;
            fill: #b3b0b0;
            left: 0px;
            right: auto;
            width: 20%;
            height: 40%;
            margin: auto;
            position: absolute;
          }
          .text44 {
            top: 25%;
            left: 22%;
            color: #b3b0b0;
            right: auto;
            width: 70%;
            bottom: auto;
            position: absolute;
            border-color: #b3b0b0;
            border-width: 1px;
            padding-left: 1%;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .text45 {
            top: 5%;
            left: 5%;
            color: #b3b0b0;
            right: 0px;
            bottom: auto;
            position: absolute;
            font-size: 80%;
          }
          .container4 {
            top: auto;
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 20%;
            margin: auto;
            display: flex;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
          }
          .icon33 {
            top: 25%;
            fill: #b3b0b0;
            left: 0px;
            right: auto;
            width: 20%;
            height: 40%;
            margin: auto;
            position: absolute;
          }
          .text47 {
            top: 25%;
            left: 22%;
            color: #b3b0b0;
            right: auto;
            width: 70%;
            bottom: auto;
            position: absolute;
            border-color: #b3b0b0;
            border-width: 1px;
            padding-left: 1%;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .text48 {
            top: 5%;
            left: 5%;
            color: #b3b0b0;
            right: 0px;
            bottom: auto;
            position: absolute;
            font-size: 80%;
          }
          .container5 {
            flex: 0 0 auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 30%;
            margin: auto;
            display: flex;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            flex-direction: column;
            justify-content: space-between;
          }
          .container6 {
            top: 20%;
            flex: 0 0 auto;
            right: 2%;
            width: 90%;
            height: 40%;
            margin: auto;
            display: flex;
            position: absolute;
            flex-direction: row;
            justify-content: center;
          }
          .textarea {
            top: 20%;
            right: 2%;
            width: 100%;
            height: 100%;
            margin: auto;
            position: absolute;
            border-color: #b3b0b0;
          }
          .button {
            left: 66%;
            color: #080000;
            right: auto;
            width: 30%;
            bottom: 15%;
            margin: auto;
            position: absolute;
            border-color: #b3b0b0;
            background-color: #cecece;
          }
          .text50 {
            top: 2%;
            left: 2%;
            color: #b3b0b0;
            bottom: auto;
            position: absolute;
          }
          @media (max-width: 991px) {
            .container1 {
              top: 0px;
              height: 100%;
              margin: auto;
              position: absolute;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              padding-top: 2%;
              padding-left: 40px;
              padding-right: 40px;
              padding-bottom: 2%;
              justify-content: center;
              background-color: #e0e0e0;
            }
            .body {
              width: 100%;
              height: 100%;
              position: relative;
              background-color: #ffffff;
            }
            .footer {
              top: auto;
              left: 0px;
              right: 0px;
              width: 100%;
              bottom: 1%;
              height: 5%;
              position: absolute;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .footerlogo {
              top: auto;
              left: 1%;
              right: auto;
              width: auto;
              bottom: 0px;
              height: 100%;
              position: absolute;
            }
            .copyright {
              top: auto;
              right: 1%;
              bottom: 30%;
              position: absolute;
            }
            .header {
              top: autp;
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
              top: 0px;
              left: 0px;
              right: 0px;
              width: auto;
              bottom: 0px;
              height: 100%;
              position: absolute;
              margin-top: auto;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: auto;
            }
            .sidebar {
              top: 0px;
              left: 0px;
              right: auto;
              width: 10%;
              bottom: auto;
              height: 94%;
              position: absolute;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .menu {
              top: 11%;
              left: auto;
              right: 0px;
              width: 100%;
              bottom: auto;
              height: 50%;
              position: absolute;
              align-items: flex-start;
            }
            .dashdashlink {
              width: 99%;
              height: 12%;
              align-self: flex-start;
              margin-top: 1%;
            }
            .dashdashicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashdashtitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashworkinglink {
              width: 99%;
              height: 12%;
            }
            .dashworkingicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              align-self: center;
              margin-top: 1%;
            }
            .dashworkingtitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashformslink {
              width: 99%;
              height: 12%;
            }
            .dashformsicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              align-self: center;
              margin-top: 1%;
            }
            .dashformstitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashmsgslink {
              width: 99%;
              height: 12%;
            }
            .dashmsgsicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              align-self: center;
              margin-top: 1%;
            }
            .dashmsgstitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashpartnerslink {
              width: 99%;
              height: 12%;
            }
            .dashpartnersicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              align-self: center;
              margin-top: 1%;
            }
            .dashpartnerstitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashtrackinglink {
              width: 99%;
              height: 12%;
            }
            .dashtrackingicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              align-self: center;
            }
            .dashtrackingtitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashinventorylink {
              width: 99%;
              height: 12%;
            }
            .dashinventoryicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              align-self: center;
            }
            .dashinventorytitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashfinanciallink {
              width: 99%;
              height: 12%;
            }
            .dashfinancialicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              align-self: center;
              margin-top: 1%;
            }
            .dashfinancialtitle {
              color: #b3b0b0;
              align-self: center;
            }
            .usericon {
              top: 1%;
              left: 30%;
              width: 50%;
              height: auto;
            }
            .main {
              top: 10%;
              left: 15%;
              right: auto;
              width: 80%;
              bottom: auto;
              height: 84%;
              position: absolute;
              align-items: flex-start;
              justify-content: center;
            }
            .contentcolumn {
              width: 100%;
              height: 90%;
              position: relative;
              align-self: flex-end;
            }
            .msgpreview {
              width: 30%;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .contactpreview {
              width: 100%;
              height: 10%;
              position: relative;
              justify-content: center;
            }
            .icon09 {
              top: auto;
              fill: #b3b0b0;
              left: auto;
              width: 20%;
              height: 50%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .msgcompanyname {
              top: 13%;
              left: 25%;
              color: #b3b0b0;
              width: auto;
              height: auto;
              margin: 1%;
              position: absolute;
              font-size: 70%;
              font-family: Noto Sans;
            }
            .text07 {
              color: #b3b0b0;
              width: 70%;
              height: 70%;
              font-size: 50%;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              margin-top: 15%;
              margin-left: 20%;
            }
            .text08 {
              top: 18%;
              color: #b3b0b0;
              right: 1%;
              position: absolute;
              font-size: 70%;
            }
            .contactpreview01 {
              width: 100%;
              height: 10%;
              position: relative;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              padding-top: 0px;
              justify-content: center;
            }
            .icon11 {
              top: auto;
              fill: #b3b0b0;
              left: auto;
              width: 20%;
              height: 50%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .msgcompanyname01 {
              top: 13%;
              left: 25%;
              color: #b3b0b0;
              width: auto;
              height: auto;
              margin: 1%;
              position: absolute;
              font-size: 70%;
              font-family: Noto Sans;
            }
            .text10 {
              color: #b3b0b0;
              width: 70%;
              height: 70%;
              font-size: 50%;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              margin-top: 15%;
              margin-left: 20%;
            }
            .text11 {
              top: 18%;
              color: #b3b0b0;
              right: 1%;
              position: absolute;
              font-size: 70%;
            }
            .contactpreview02 {
              width: 100%;
              height: 10%;
              position: relative;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              padding-top: 0px;
              justify-content: center;
            }
            .icon13 {
              fill: #b3b0b0;
              width: 20%;
              height: 50%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .msgcompanyname02 {
              top: 13%;
              left: 25%;
              color: #b3b0b0;
              width: auto;
              height: auto;
              margin: 1%;
              position: absolute;
              font-size: 70%;
              font-family: Noto Sans;
            }
            .text13 {
              color: #b3b0b0;
              width: 70%;
              height: 70%;
              font-size: 50%;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              margin-top: 15%;
              margin-left: 20%;
            }
            .text14 {
              top: 18%;
              color: #b3b0b0;
              right: 1%;
              position: absolute;
              font-size: 70%;
            }
            .contactpreview03 {
              width: 100%;
              height: 10%;
              position: relative;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              padding-top: 0px;
              justify-content: center;
            }
            .icon15 {
              fill: #b3b0b0;
              width: 20%;
              height: 50%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .msgcompanyname03 {
              top: 13%;
              left: 25%;
              color: #b3b0b0;
              width: auto;
              height: auto;
              margin: 1%;
              position: absolute;
              font-size: 70%;
              font-family: Noto Sans;
            }
            .text16 {
              color: #b3b0b0;
              width: 70%;
              height: 70%;
              font-size: 50%;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              margin-top: 15%;
              margin-left: 20%;
            }
            .text17 {
              top: 18%;
              color: #b3b0b0;
              right: 1%;
              position: absolute;
              font-size: 70%;
            }
            .contactpreview04 {
              width: 100%;
              height: 10%;
              position: relative;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              padding-top: 0px;
              justify-content: center;
            }
            .icon17 {
              fill: #b3b0b0;
              width: 20%;
              height: 50%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .msgcompanyname04 {
              top: 13%;
              left: 25%;
              color: #b3b0b0;
              width: auto;
              height: auto;
              margin: 1%;
              position: absolute;
              font-size: 70%;
              font-family: Noto Sans;
            }
            .text19 {
              color: #b3b0b0;
              width: 70%;
              height: 70%;
              font-size: 50%;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              margin-top: 15%;
              margin-left: 20%;
            }
            .text20 {
              top: 18%;
              color: #b3b0b0;
              right: 1%;
              position: absolute;
              font-size: 70%;
            }
            .contactpreview05 {
              width: 100%;
              height: 10%;
              position: relative;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              padding-top: 0px;
              justify-content: center;
            }
            .icon19 {
              fill: #b3b0b0;
              width: 20%;
              height: 50%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .msgcompanyname05 {
              top: 13%;
              left: 25%;
              color: #b3b0b0;
              width: auto;
              height: auto;
              margin: 1%;
              position: absolute;
              font-size: 70%;
              font-family: Noto Sans;
            }
            .text22 {
              color: #b3b0b0;
              width: 70%;
              height: 70%;
              font-size: 50%;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              margin-top: 15%;
              margin-left: 20%;
            }
            .text23 {
              top: 18%;
              color: #b3b0b0;
              right: 1%;
              position: absolute;
              font-size: 70%;
            }
            .contactpreview06 {
              width: 100%;
              height: 10%;
              position: relative;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              padding-top: 0px;
              justify-content: center;
            }
            .icon21 {
              fill: #b3b0b0;
              width: 20%;
              height: 50%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .msgcompanyname06 {
              top: 13%;
              left: 25%;
              color: #b3b0b0;
              width: auto;
              height: auto;
              margin: 1%;
              position: absolute;
              font-size: 70%;
              font-family: Noto Sans;
            }
            .text25 {
              color: #b3b0b0;
              width: 70%;
              height: 70%;
              font-size: 50%;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              margin-top: 15%;
              margin-left: 20%;
            }
            .text26 {
              top: 18%;
              color: #b3b0b0;
              right: 1%;
              position: absolute;
              font-size: 70%;
            }
            .contactpreview07 {
              width: 100%;
              height: 10%;
              position: relative;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              padding-top: 0px;
              justify-content: center;
            }
            .icon23 {
              fill: #b3b0b0;
              width: 20%;
              height: 50%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .msgcompanyname07 {
              top: 13%;
              left: 25%;
              color: #b3b0b0;
              width: auto;
              height: auto;
              margin: 1%;
              position: absolute;
              font-size: 70%;
              font-family: Noto Sans;
            }
            .text28 {
              color: #b3b0b0;
              width: 70%;
              height: 70%;
              font-size: 50%;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              margin-top: 15%;
              margin-left: 20%;
            }
            .text29 {
              top: 18%;
              color: #b3b0b0;
              right: 1%;
              position: absolute;
              font-size: 70%;
            }
            .contactpreview08 {
              width: 100%;
              height: 10%;
              position: relative;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              padding-top: 0px;
              justify-content: center;
            }
            .icon25 {
              fill: #b3b0b0;
              width: 20%;
              height: 50%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .msgcompanyname08 {
              top: 13%;
              left: 25%;
              color: #b3b0b0;
              width: auto;
              height: auto;
              margin: 1%;
              position: absolute;
              font-size: 70%;
              font-family: Noto Sans;
            }
            .text31 {
              color: #b3b0b0;
              width: 70%;
              height: 70%;
              font-size: 50%;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              margin-top: 15%;
              margin-left: 20%;
            }
            .text32 {
              top: 18%;
              color: #b3b0b0;
              right: 1%;
              position: absolute;
              font-size: 70%;
            }
            .contactpreview09 {
              width: 100%;
              height: 10%;
              position: relative;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              padding-top: 0px;
              justify-content: center;
            }
            .icon27 {
              fill: #b3b0b0;
              width: 20%;
              height: 50%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .msgcompanyname09 {
              top: 13%;
              left: 25%;
              color: #b3b0b0;
              width: auto;
              height: auto;
              margin: 1%;
              position: absolute;
              font-size: 70%;
              font-family: Noto Sans;
            }
            .text34 {
              color: #b3b0b0;
              width: 70%;
              height: 70%;
              font-size: 50%;
              align-self: center;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              margin-top: 15%;
              margin-left: 20%;
            }
            .text35 {
              top: 18%;
              color: #b3b0b0;
              right: 1%;
              position: absolute;
              font-size: 70%;
            }
            .activemsgform {
              top: 0px;
              width: 70%;
              height: 100%;
              margin: auto;
              position: absolute;
              align-self: flex-end;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              align-items: center;
              flex-direction: column;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .container2 {
              top: 19%;
              left: auto;
              right: auto;
              width: 100%;
              bottom: auto;
              height: 30%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
              justify-content: space-between;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .icon29 {
              top: 20%;
              fill: #b3b0b0;
              right: 3%;
              width: 15%;
              height: 30%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .text36 {
              top: 25%;
              left: 10%;
              color: #ffffff;
              width: 70%;
              bottom: auto;
              position: absolute;
              align-self: center;
              border-color: #b3b0b0;
              border-width: 1px;
              padding-left: 1%;
              border-radius: var(--dl-radius-radius-radius4);
              background-color: #D9D9D9;
              border-top-left-radius: var(--dl-radius-radius-radius8);
              border-top-right-radius: var(--dl-radius-radius-radius8);
              border-bottom-left-radius: var(--dl-radius-radius-radius8);
              border-bottom-right-radius: var(--dl-radius-radius-radius8);
            }
            .text38 {
              top: auto;
              left: 10%;
              color: #ffffff;
              right: auto;
              width: 70%;
              bottom: 12px;
              position: absolute;
              align-self: center;
              border-color: #b3b0b0;
              border-width: 1px;
              padding-left: 1%;
              border-radius: var(--dl-radius-radius-radius4);
              background-color: #D9D9D9;
              border-top-left-radius: var(--dl-radius-radius-radius8);
              border-top-right-radius: var(--dl-radius-radius-radius8);
              border-bottom-left-radius: var(--dl-radius-radius-radius8);
            }
            .text40 {
              top: 5%;
              left: auto;
              color: #b3b0b0;
              right: 5%;
              width: auto;
              bottom: auto;
              position: absolute;
              font-size: 80%;
              align-self: flex-end;
            }
            .text42 {
              top: auto;
              left: auto;
              color: #b3b0b0;
              right: 17px;
              width: auto;
              bottom: 67px;
              position: absolute;
              font-size: 80%;
              align-self: flex-end;
            }
            .container3 {
              top: 50%;
              left: auto;
              right: 0px;
              width: 100%;
              bottom: auto;
              height: 20%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
              justify-content: space-between;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .icon31 {
              top: 25%;
              fill: #b3b0b0;
              left: 0px;
              right: auto;
              width: 20%;
              height: 40%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .text44 {
              top: 25%;
              left: 22%;
              color: #b3b0b0;
              right: auto;
              width: 70%;
              bottom: auto;
              position: absolute;
              align-self: center;
              border-color: #b3b0b0;
              border-width: 1px;
              padding-left: 1%;
              border-radius: var(--dl-radius-radius-radius4);
              border-top-left-radius: var(--dl-radius-radius-radius8);
              border-top-right-radius: var(--dl-radius-radius-radius8);
              border-bottom-left-radius: var(--dl-radius-radius-radius8);
              border-bottom-right-radius: var(--dl-radius-radius-radius8);
            }
            .text45 {
              top: 5%;
              left: 5%;
              color: #b3b0b0;
              right: auto;
              width: auto;
              bottom: auto;
              position: absolute;
              font-size: 80%;
              align-self: flex-start;
            }
            .container4 {
              top: auto;
              left: auto;
              right: 0px;
              width: 100%;
              bottom: auto;
              height: 20%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
              justify-content: space-between;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .icon33 {
              top: 25%;
              fill: #b3b0b0;
              left: 0px;
              right: auto;
              width: 20%;
              height: 40%;
              margin: auto;
              position: absolute;
              align-self: flex-start;
            }
            .text47 {
              top: 25%;
              left: 22%;
              color: #b3b0b0;
              right: auto;
              width: 70%;
              bottom: auto;
              position: absolute;
              align-self: center;
              border-color: #b3b0b0;
              border-width: 1px;
              padding-left: 1%;
              border-radius: var(--dl-radius-radius-radius4);
              border-top-left-radius: var(--dl-radius-radius-radius8);
              border-top-right-radius: var(--dl-radius-radius-radius8);
              border-bottom-left-radius: var(--dl-radius-radius-radius8);
              border-bottom-right-radius: var(--dl-radius-radius-radius8);
            }
            .text48 {
              top: 5%;
              left: 5%;
              color: #b3b0b0;
              right: auto;
              width: auto;
              bottom: auto;
              position: absolute;
              font-size: 80%;
              align-self: flex-start;
            }
            .container5 {
              left: auto;
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 30%;
              position: absolute;
              align-self: flex-start;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              justify-content: space-between;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .container6 {
              top: 20%;
              right: 2%;
              width: 90%;
              height: 40%;
              margin: auto;
              position: absolute;
              justify-content: center;
            }
            .textarea {
              width: 100%;
              height: 100%;
              border-color: #b3b0b0;
            }
            .button {
              left: 68%;
              color: #080000;
              right: auto;
              width: 30%;
              bottom: 15%;
              position: absolute;
              background-color: #cecece;
            }
          }
          @media (max-width: 767px) {
            .container1 {
              height: 100%;
            }
            .body {
              height: 1002px;
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
              flex-direction: row;
            }
            .footerlogo {
              top: auto;
              left: 1%;
              right: auto;
              width: auto;
              bottom: 0px;
              height: 100%;
              position: absolute;
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
              width: 99%;
              bottom: auto;
              height: 10%;
              position: absolute;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .logo {
              top: auto;
              right: 30%;
              width: auto;
              bottom: 0px;
              height: 100%;
              position: absolute;
              margin-top: auto;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: auto;
            }
            .sidebar {
              top: 0px;
              left: 0px;
              right: auto;
              width: 15%;
              bottom: auto;
              height: 94%;
              position: absolute;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .menu {
              top: 11%;
              left: auto;
              right: 0px;
              width: 100%;
              bottom: auto;
              height: 50%;
              position: absolute;
              align-items: flex-start;
              flex-direction: column;
              justify-content: space-between;
            }
            .dashdashlink {
              width: 99%;
              height: 12%;
              align-self: flex-start;
              margin-top: 1%;
            }
            .dashdashicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashdashtitle {
              align-self: center;
            }
            .dashworkinglink {
              width: 99%;
              height: 12%;
            }
            .dashworkingicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashworkingtitle {
              align-self: center;
            }
            .dashformslink {
              width: 99%;
              height: 12%;
            }
            .dashformsicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashformstitle {
              align-self: center;
            }
            .dashmsgslink {
              width: 99%;
              height: 12%;
            }
            .dashmsgsicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashmsgstitle {
              align-self: center;
            }
            .dashpartnerslink {
              width: 99%;
              height: 12%;
            }
            .dashpartnersicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashpartnerstitle {
              align-self: center;
            }
            .dashtrackinglink {
              width: 99%;
              height: 12%;
            }
            .dashtrackingicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashtrackingtitle {
              align-self: center;
            }
            .dashinventorylink {
              width: 99%;
              height: 12%;
            }
            .dashinventoryicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashinventorytitle {
              align-self: center;
            }
            .dashfinanciallink {
              width: 99%;
              height: 12%;
            }
            .dashfinancialicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashfinancialtitle {
              align-self: center;
            }
            .usericon {
              top: 1%;
              left: 20%;
              width: 50%;
              height: auto;
              position: absolute;
              align-self: center;
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
            .contentcolumn {
              width: 50%;
              height: 100%;
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
            .footerlogo {
              top: auto;
              left: 1%;
              right: auto;
              width: auto;
              bottom: 0px;
              height: 100%;
              position: absolute;
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
            .sidebar {
              left: 0px;
              width: 15%;
              height: 94%;
              position: absolute;
              align-self: flex-start;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              margin-top: 0px;
              margin-left: auto;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              margin-right: auto;
              margin-bottom: auto;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .menu {
              top: 11%;
              left: auto;
              right: 0px;
              width: 100%;
              bottom: auto;
              height: 50%;
              position: absolute;
              align-self: flex-start;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              border-color: var(--dl-color-gray-black);
              border-style: double;
              border-width: 1px;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 0px;
            }
            .dashdashlink {
              width: 99%;
              height: 12%;
              align-self: flex-start;
            }
            .dashdashicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashdashtitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashworkinglink {
              width: 99%;
              height: 12%;
              align-self: center;
            }
            .dashworkingicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashworkingtitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashformslink {
              width: 99%;
              height: 12%;
              align-self: center;
            }
            .dashformsicon {
              fill: #b3b0b0;
              width: 30%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashformstitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashmsgslink {
              width: 99%;
              height: 12%;
            }
            .dashmsgsicon {
              fill: #b3b0b0;
              width: 40%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashmsgstitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashpartnerslink {
              width: 99%;
              height: 12%;
            }
            .dashpartnersicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashpartnerstitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashtrackinglink {
              width: 99%;
              height: 12%;
            }
            .dashtrackingicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashtrackingtitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashinventorylink {
              width: 99%;
              height: 12%;
            }
            .dashinventoryicon {
              fill: #b3b0b0;
              width: 40%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashinventorytitle {
              color: #b3b0b0;
              align-self: center;
            }
            .dashfinanciallink {
              width: 99%;
              height: 12%;
            }
            .dashfinancialicon {
              fill: #b3b0b0;
              width: 35%;
              height: auto;
              position: static;
              align-self: center;
            }
            .dashfinancialtitle {
              color: #b3b0b0;
              align-self: center;
            }
            .usericon {
              width: 50%;
              height: auto;
              position: static;
              align-self: center;
              margin-top: 25%;
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
            .contentcolumn {
              width: 50%;
              height: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Messages
