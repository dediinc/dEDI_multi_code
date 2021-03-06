import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './messages.module.css'

const Messages = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>messages - dEDI Icn</title>
        <meta property="og:title" content="messages - dEDI Icn" />
      </Helmet>
      <div id="msg_container" className={styles['container1']}>
        <div id="msg_body" className={styles['body']}>
          <div id="msg_footer" className={styles['footer']}>
            <img
              id="msg_footer_logo"
              alt="image"
              src="/playground_assets/dedi_logo1%20-1000h.png"
              className={styles['footerlogo']}
            />
            <span id="msg_footer_copy" className={styles['copyright']}>
              © 2021 dEDI Incorporated
            </span>
          </div>
          <div id="msg_header" className={styles['header']}>
            <img
              id="msg_header_logo"
              alt="dEDI logo"
              src="/playground_assets/dedi_logo_trans-1000h.png"
              className={styles['logo']}
            />
          </div>
          <div id="msg_sidebar" className={styles['sidebar']}>
            <div id="msg_menu" className={styles['menu']}>
              <div id="msg_menu-link_1" className={styles['dashdashlink']}>
                <svg
                  id="msg_menu_icon_1"
                  viewBox="0 0 1024 1024"
                  className={styles['dashdashicon']}
                >
                  <path d="M219.429 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM329.143 402.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM573.714 677.143l57.714-218.286c4.571-19.429-6.857-39.429-26.286-44.571v0c-19.429-5.143-39.429 6.857-44.571 26.286l-57.714 218.286c-45.143 3.429-84.571 34.857-97.143 81.143-15.429 58.857 20 118.857 78.286 134.286 58.857 15.429 118.857-20 134.286-78.286 12-46.286-7.429-93.143-44.571-118.857zM950.857 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM585.143 292.571c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM841.143 402.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM1024 658.286c0 98.286-28 193.143-80.571 276-6.857 10.286-18.286 16.571-30.857 16.571h-801.143c-12.571 0-24-6.286-30.857-16.571-52.571-82.286-80.571-177.714-80.571-276 0-282.286 229.714-512 512-512s512 229.714 512 512z"></path>
                </svg>
                <span id="msg_menu_title_1" className={styles['dashdashtitle']}>
                  dashboard
                </span>
              </div>
              <div id="msg_menu-link_2" className={styles['dashworkinglink']}>
                <svg
                  id="msg_menu_icon_2"
                  viewBox="0 0 1024 1024"
                  className={styles['dashworkingicon']}
                >
                  <path d="M710 72l242 242-242 240h186v342h-342v-342h156l-240-240v156h-342v-342h342v186zM128 896v-342h342v342h-342z"></path>
                </svg>
                <span
                  id="msg_menu_title_1"
                  className={styles['dashworkingtitle']}
                >
                  working
                </span>
              </div>
              <div id="msg_menu-link_3" className={styles['dashformslink']}>
                <svg
                  id="msg_menu_icon_3"
                  viewBox="0 0 877.7142857142857 1024"
                  className={styles['dashformsicon']}
                >
                  <path d="M838.857 272c5.714 5.714 10.857 12.571 16 20.571h-269.714v-269.714c8 5.143 14.857 10.286 20.571 16zM566.857 365.714h310.857v603.429c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h457.143v310.857c0 30.286 24.571 54.857 54.857 54.857zM658.286 786.286v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 640v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 493.714v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286z"></path>
                </svg>
                <span
                  id="msg_menu_title_3"
                  className={styles['dashformstitle']}
                >
                  <span>forms</span>
                </span>
              </div>
              <div id="msg_menu-link_4" className={styles['dashmsgslink']}>
                <svg
                  id="msg_menu_icon_4"
                  viewBox="0 0 1024 1024"
                  className={styles['dashmsgsicon']}
                >
                  <path d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"></path>
                </svg>
                <span
                  id="forms_menu_title_4"
                  className={styles['dashmsgstitle']}
                >
                  <span>msgs</span>
                </span>
              </div>
              <div
                id="forms_menu-link_5"
                className={styles['dashpartnerslink']}
              >
                <svg
                  id="forms_menu_icon_5"
                  viewBox="0 0 1097.142857142857 1024"
                  className={styles['dashpartnersicon']}
                >
                  <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
                </svg>
                <span
                  id="forms_menu_title_5"
                  className={styles['dashpartnerstitle']}
                >
                  <span>partners</span>
                </span>
              </div>
              <div
                id="forms_menu-link_6"
                className={styles['dashtrackinglink']}
              >
                <svg
                  id="forms_menu_icon_6"
                  viewBox="0 0 1024 1024"
                  className={styles['dashtrackingicon']}
                >
                  <path d="M1024 576l-128-256h-192v-128c0-35.2-28.8-64-64-64h-576c-35.2 0-64 28.8-64 64v512l64 64h81.166c-10.898 18.832-17.166 40.678-17.166 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.268-45.168-17.166-64h354.334c-10.898 18.832-17.168 40.678-17.168 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.27-45.168-17.168-64h81.168v-192zM704 576v-192h132.668l96 192h-228.668z"></path>
                </svg>
                <span
                  id="forms_menu_title_6"
                  className={styles['dashtrackingtitle']}
                >
                  <span>tracking</span>
                </span>
              </div>
              <div
                id="forms_menu-link_7"
                className={styles['dashinventorylink']}
              >
                <svg
                  id="forms_menu_icon_7"
                  viewBox="0 0 1024 1024"
                  className={styles['dashinventoryicon']}
                >
                  <path d="M512 298v-84h-384v84h384zM512 470v-86h-384v86h384zM896 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-768q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h768z"></path>
                </svg>
                <span
                  id="forms_menu_title_7"
                  className={styles['dashinventorytitle']}
                >
                  <span>inventory</span>
                </span>
              </div>
              <div
                id="forms_menu-link_8"
                className={styles['dashfinanciallink']}
              >
                <svg
                  id="forms_menu_icon_8"
                  viewBox="0 0 1097.142857142857 1024"
                  className={styles['dashfinancialicon']}
                >
                  <path d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"></path>
                </svg>
                <span
                  id="forms_menu_title_8"
                  className={styles['dashfinancialtitle']}
                >
                  <span>financial</span>
                </span>
              </div>
            </div>
            <svg
              id="forms_user_icon"
              viewBox="0 0 1024 1024"
              className={styles['usericon']}
            >
              <path d="M512 0c282.857 0 512 229.143 512 512 0 281.143-228 512-512 512-283.429 0-512-230.286-512-512 0-282.857 229.143-512 512-512zM865.714 772c53.143-73.143 85.143-162.857 85.143-260 0-241.714-197.143-438.857-438.857-438.857s-438.857 197.143-438.857 438.857c0 97.143 32 186.857 85.143 260 20.571-102.286 70.286-186.857 174.857-186.857 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c104.571 0 154.286 84.571 174.857 186.857zM731.429 402.286c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429z"></path>
            </svg>
          </div>
          <div id="forms_content" className={styles['main']}>
            <div
              id="forms_content_container"
              className={styles['contentcolumn']}
            >
              <div id="msg_msg_preview" className={styles['msgpreview']}>
                <div
                  id="contact_preview_1"
                  className={styles['contactpreview']}
                >
                  <svg
                    id="contact_msg_icon_1"
                    viewBox="0 0 1024 1024"
                    className={styles['icon09']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span
                    id="contact_msg_name_1"
                    className={styles['msgcompanyname']}
                  >
                    <span className={styles['text06']}>Company c</span>
                  </span>
                  <span id="contact_msg_1" className={styles['text07']}>
                    ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                    ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                  </span>
                  <span id="contact_msg_rcvd_1" className={styles['text08']}>
                    today 1354
                  </span>
                </div>
                <div
                  id="contact_preview_2"
                  className={styles['contactpreview01']}
                >
                  <svg
                    id="contact_msg_icon_2"
                    viewBox="0 0 1024 1024"
                    className={styles['icon11']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span
                    id="contact_msg_name_2"
                    className={styles['msgcompanyname01']}
                  >
                    <span className={styles['text09']}>Company c</span>
                  </span>
                  <span id="contact_msg_2" className={styles['text10']}>
                    ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                    ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                  </span>
                  <span id="contact_msg_rcvd_2" className={styles['text11']}>
                    today 1354
                  </span>
                </div>
                <div
                  id="contact_preview_3"
                  className={styles['contactpreview02']}
                >
                  <svg
                    id="contact_msg_icon_3"
                    viewBox="0 0 1024 1024"
                    className={styles['icon13']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span
                    id="contact_msg_name_3"
                    className={styles['msgcompanyname02']}
                  >
                    <span className={styles['text12']}>Company c</span>
                  </span>
                  <span id="contact_msg_3" className={styles['text13']}>
                    ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                    ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                  </span>
                  <span id="contact_msg_rcvd_3" className={styles['text14']}>
                    today 1354
                  </span>
                </div>
                <div
                  id="contact_preview_4"
                  className={styles['contactpreview03']}
                >
                  <svg
                    id="contact_msg_icon_4"
                    viewBox="0 0 1024 1024"
                    className={styles['icon15']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span
                    id="contact_msg_name_4"
                    className={styles['msgcompanyname03']}
                  >
                    <span className={styles['text15']}>Company c</span>
                  </span>
                  <span id="contact_msg_4" className={styles['text16']}>
                    ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                    ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                  </span>
                  <span id="contact_msg_rcvd_4" className={styles['text17']}>
                    today 1354
                  </span>
                </div>
                <div
                  id="contact_preview_5"
                  className={styles['contactpreview04']}
                >
                  <svg
                    id="contact_msg_icon_5"
                    viewBox="0 0 1024 1024"
                    className={styles['icon17']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span
                    id="contact_msg_name_5"
                    className={styles['msgcompanyname04']}
                  >
                    <span className={styles['text18']}>Company c</span>
                  </span>
                  <span id="contact_msg_5" className={styles['text19']}>
                    ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                    ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                  </span>
                  <span id="contact_msg_rcvd_5" className={styles['text20']}>
                    today 1354
                  </span>
                </div>
                <div
                  id="contact_preview_6"
                  className={styles['contactpreview05']}
                >
                  <svg
                    id="contact_msg_icon_6"
                    viewBox="0 0 1024 1024"
                    className={styles['icon19']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span
                    id="contact_msg_name_6"
                    className={styles['msgcompanyname05']}
                  >
                    <span className={styles['text21']}>Company c</span>
                  </span>
                  <span id="contact_msg_6" className={styles['text22']}>
                    ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                    ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                  </span>
                  <span id="contact_msg_rcvd_6" className={styles['text23']}>
                    today 1354
                  </span>
                </div>
                <div
                  id="contact_preview_7"
                  className={styles['contactpreview06']}
                >
                  <svg
                    id="contact_msg_icon_7"
                    viewBox="0 0 1024 1024"
                    className={styles['icon21']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span
                    id="contact_msg_name_7"
                    className={styles['msgcompanyname06']}
                  >
                    <span className={styles['text24']}>Company c</span>
                  </span>
                  <span id="contact_msg_7" className={styles['text25']}>
                    ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                    ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                  </span>
                  <span id="contact_msg_rcvd_7" className={styles['text26']}>
                    today 1354
                  </span>
                </div>
                <div
                  id="contact_preview_8"
                  className={styles['contactpreview07']}
                >
                  <svg
                    id="contact_msg_icon_8"
                    viewBox="0 0 1024 1024"
                    className={styles['icon23']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span
                    id="contact_msg_name_8"
                    className={styles['msgcompanyname07']}
                  >
                    <span className={styles['text27']}>Company c</span>
                  </span>
                  <span id="contact_msg_8" className={styles['text28']}>
                    ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                    ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                  </span>
                  <span id="contact_msg_rcvd_8" className={styles['text29']}>
                    today 1354
                  </span>
                </div>
                <div
                  id="contact_preview_9"
                  className={styles['contactpreview08']}
                >
                  <svg
                    id="contact_msg_icon_9"
                    viewBox="0 0 1024 1024"
                    className={styles['icon25']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span
                    id="contact_msg_name_9"
                    className={styles['msgcompanyname08']}
                  >
                    <span className={styles['text30']}>Company c</span>
                  </span>
                  <span id="contact_msg_9" className={styles['text31']}>
                    ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                    ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                  </span>
                  <span id="contact_msg_rcvd_9" className={styles['text32']}>
                    today 1354
                  </span>
                </div>
                <div
                  id="contact_preview_10"
                  className={styles['contactpreview09']}
                >
                  <svg
                    id="contact_msg_icon_10"
                    viewBox="0 0 1024 1024"
                    className={styles['icon27']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span
                    id="contact_msg_name_10"
                    className={styles['msgcompanyname09']}
                  >
                    <span className={styles['text33']}>Company c</span>
                  </span>
                  <span id="contact_msg_10" className={styles['text34']}>
                    ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem
                    ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                  </span>
                  <span id="contact_msg_rcvd_10" className={styles['text35']}>
                    today 1354
                  </span>
                </div>
              </div>
              <div id="active_msg_form" className={styles['activemsgform']}>
                <div
                  id="active_msg_container_2"
                  className={styles['container2']}
                >
                  <svg
                    id="active_msg_user_icon"
                    viewBox="0 0 1024 1024"
                    className={styles['icon29']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span id="active_msg_msg_2" className={styles['text36']}>
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
                  <span id="active_msg_msg_3" className={styles['text38']}>
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
                  <span id="active_msg_time_2" className={styles['text40']}>
                    <span>Today 1501</span>
                  </span>
                  <span id="active_msg_time_3" className={styles['text42']}>
                    <span>Today 1503</span>
                  </span>
                </div>
                <div
                  id="active_msg_container_3"
                  className={styles['container3']}
                >
                  <svg
                    id="active_msg_partner_icon_2"
                    viewBox="0 0 1024 1024"
                    className={styles['icon31']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span id="active_msg_msg_4" className={styles['text44']}>
                    This would be a message the last message received in this
                    message.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span id="active_msg_time_4" className={styles['text45']}>
                    <span>Today 1530</span>
                  </span>
                </div>
                <div
                  id="active_msg_container_1"
                  className={styles['container4']}
                >
                  <svg
                    id="active_msg_partner_icon_1"
                    viewBox="0 0 1024 1024"
                    className={styles['icon33']}
                  >
                    <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
                  </svg>
                  <span id="active_msg_msg_1" className={styles['text47']}>
                    This would be a message from the partner if this were a real
                    message it would say something REALLY important.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span id="active_msg_time_1" className={styles['text48']}>
                    <span>Today 1436</span>
                  </span>
                </div>
                <div
                  id="active_msg_entry_container"
                  className={styles['container5']}
                >
                  <div
                    id="active_msg_entry_text"
                    className={styles['container6']}
                  >
                    <textarea
                      id="msg_msg_input"
                      name="msg_input"
                      placeholder="message here"
                      className={` ${styles['textarea']} ${projectStyles['thqTextArea']} `}
                    ></textarea>
                  </div>
                  <button
                    id="active_msg_send_button"
                    name="send_button"
                    className={` ${styles['button']} ${projectStyles['thqButton']} `}
                  >
                    send
                  </button>
                </div>
              </div>
            </div>
            <h1 id="forms_content_header" className={styles['text50']}>
              <span>messages</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
