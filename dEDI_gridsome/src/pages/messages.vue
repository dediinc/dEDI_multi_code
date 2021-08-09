<template>
  <div class="messages-container">
    <div id="msg_container" class="messages-container1">
      <div id="msg_body" class="messages-body">
        <div id="msg_footer" class="messages-footer">
          <img
            id="msg_footer_logo"
            alt="image"
            src="/playground_assets/dedi_logo1%20-1000h.png"
            class="messages-footerlogo"
          />
          <span id="msg_footer_copy" class="messages-copyright">
            © 2021 dEDI Incorporated
          </span>
        </div>
        <div id="msg_header" class="messages-header">
          <img
            id="msg_header_logo"
            alt="dEDI logo"
            src="/playground_assets/dedi_logo_trans-1000h.png"
            class="messages-logo"
          />
        </div>
        <div id="msg_sidebar" class="messages-sidebar">
          <div id="msg_menu" class="messages-menu">
            <div id="msg_menu-link_1" class="messages-dashdashlink">
              <svg
                id="msg_menu_icon_1"
                viewBox="0 0 1024 1024"
                class="messages-dashdashicon"
              >
                <path
                  d="M219.429 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM329.143 402.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM573.714 677.143l57.714-218.286c4.571-19.429-6.857-39.429-26.286-44.571v0c-19.429-5.143-39.429 6.857-44.571 26.286l-57.714 218.286c-45.143 3.429-84.571 34.857-97.143 81.143-15.429 58.857 20 118.857 78.286 134.286 58.857 15.429 118.857-20 134.286-78.286 12-46.286-7.429-93.143-44.571-118.857zM950.857 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM585.143 292.571c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM841.143 402.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM1024 658.286c0 98.286-28 193.143-80.571 276-6.857 10.286-18.286 16.571-30.857 16.571h-801.143c-12.571 0-24-6.286-30.857-16.571-52.571-82.286-80.571-177.714-80.571-276 0-282.286 229.714-512 512-512s512 229.714 512 512z"
                ></path>
              </svg>
              <span id="msg_menu_title_1" class="messages-dashdashtitle">
                dashboard
              </span>
            </div>
            <div id="msg_menu-link_2" class="messages-dashworkinglink">
              <svg
                id="msg_menu_icon_2"
                viewBox="0 0 1024 1024"
                class="messages-dashworkingicon"
              >
                <path
                  d="M710 72l242 242-242 240h186v342h-342v-342h156l-240-240v156h-342v-342h342v186zM128 896v-342h342v342h-342z"
                ></path>
              </svg>
              <span id="msg_menu_title_1" class="messages-dashworkingtitle">
                working
              </span>
            </div>
            <div id="msg_menu-link_3" class="messages-dashformslink">
              <svg
                id="msg_menu_icon_3"
                viewBox="0 0 877.7142857142857 1024"
                class="messages-dashformsicon"
              >
                <path
                  d="M838.857 272c5.714 5.714 10.857 12.571 16 20.571h-269.714v-269.714c8 5.143 14.857 10.286 20.571 16zM566.857 365.714h310.857v603.429c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h457.143v310.857c0 30.286 24.571 54.857 54.857 54.857zM658.286 786.286v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 640v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 493.714v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286z"
                ></path>
              </svg>
              <span id="msg_menu_title_3" class="messages-dashformstitle">
                <span>forms</span>
              </span>
            </div>
            <div id="msg_menu-link_4" class="messages-dashmsgslink">
              <svg
                id="msg_menu_icon_4"
                viewBox="0 0 1024 1024"
                class="messages-dashmsgsicon"
              >
                <path
                  d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"
                ></path>
              </svg>
              <span id="forms_menu_title_4" class="messages-dashmsgstitle">
                <span>msgs</span>
              </span>
            </div>
            <div id="forms_menu-link_5" class="messages-dashpartnerslink">
              <svg
                id="forms_menu_icon_5"
                viewBox="0 0 1097.142857142857 1024"
                class="messages-dashpartnersicon"
              >
                <path
                  d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"
                ></path>
              </svg>
              <span id="forms_menu_title_5" class="messages-dashpartnerstitle">
                <span>partners</span>
              </span>
            </div>
            <div id="forms_menu-link_6" class="messages-dashtrackinglink">
              <svg
                id="forms_menu_icon_6"
                viewBox="0 0 1024 1024"
                class="messages-dashtrackingicon"
              >
                <path
                  d="M1024 576l-128-256h-192v-128c0-35.2-28.8-64-64-64h-576c-35.2 0-64 28.8-64 64v512l64 64h81.166c-10.898 18.832-17.166 40.678-17.166 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.268-45.168-17.166-64h354.334c-10.898 18.832-17.168 40.678-17.168 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.27-45.168-17.168-64h81.168v-192zM704 576v-192h132.668l96 192h-228.668z"
                ></path>
              </svg>
              <span id="forms_menu_title_6" class="messages-dashtrackingtitle">
                <span>tracking</span>
              </span>
            </div>
            <div id="forms_menu-link_7" class="messages-dashinventorylink">
              <svg
                id="forms_menu_icon_7"
                viewBox="0 0 1024 1024"
                class="messages-dashinventoryicon"
              >
                <path
                  d="M512 298v-84h-384v84h384zM512 470v-86h-384v86h384zM896 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-768q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h768z"
                ></path>
              </svg>
              <span id="forms_menu_title_7" class="messages-dashinventorytitle">
                <span>inventory</span>
              </span>
            </div>
            <div id="forms_menu-link_8" class="messages-dashfinanciallink">
              <svg
                id="forms_menu_icon_8"
                viewBox="0 0 1097.142857142857 1024"
                class="messages-dashfinancialicon"
              >
                <path
                  d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"
                ></path>
              </svg>
              <span id="forms_menu_title_8" class="messages-dashfinancialtitle">
                <span>financial</span>
              </span>
            </div>
          </div>
          <svg
            id="forms_user_icon"
            viewBox="0 0 1024 1024"
            class="messages-usericon"
          >
            <path
              d="M512 0c282.857 0 512 229.143 512 512 0 281.143-228 512-512 512-283.429 0-512-230.286-512-512 0-282.857 229.143-512 512-512zM865.714 772c53.143-73.143 85.143-162.857 85.143-260 0-241.714-197.143-438.857-438.857-438.857s-438.857 197.143-438.857 438.857c0 97.143 32 186.857 85.143 260 20.571-102.286 70.286-186.857 174.857-186.857 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c104.571 0 154.286 84.571 174.857 186.857zM731.429 402.286c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429z"
            ></path>
          </svg>
        </div>
        <div id="forms_content" class="messages-main">
          <div id="forms_content_container" class="messages-contentcolumn">
            <div id="msg_msg_preview" class="messages-msgpreview">
              <div id="contact_preview_1" class="messages-contactpreview">
                <svg
                  id="contact_msg_icon_1"
                  viewBox="0 0 1024 1024"
                  class="messages-icon09"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="contact_msg_name_1" class="messages-msgcompanyname">
                  <span class="messages-text06">Company c</span>
                </span>
                <span id="contact_msg_1" class="messages-text07">
                  ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum
                  lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                </span>
                <span id="contact_msg_rcvd_1" class="messages-text08">
                  today 1354
                </span>
              </div>
              <div id="contact_preview_2" class="messages-contactpreview01">
                <svg
                  id="contact_msg_icon_2"
                  viewBox="0 0 1024 1024"
                  class="messages-icon11"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="contact_msg_name_2" class="messages-msgcompanyname01">
                  <span class="messages-text09">Company c</span>
                </span>
                <span id="contact_msg_2" class="messages-text10">
                  ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum
                  lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                </span>
                <span id="contact_msg_rcvd_2" class="messages-text11">
                  today 1354
                </span>
              </div>
              <div id="contact_preview_3" class="messages-contactpreview02">
                <svg
                  id="contact_msg_icon_3"
                  viewBox="0 0 1024 1024"
                  class="messages-icon13"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="contact_msg_name_3" class="messages-msgcompanyname02">
                  <span class="messages-text12">Company c</span>
                </span>
                <span id="contact_msg_3" class="messages-text13">
                  ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum
                  lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                </span>
                <span id="contact_msg_rcvd_3" class="messages-text14">
                  today 1354
                </span>
              </div>
              <div id="contact_preview_4" class="messages-contactpreview03">
                <svg
                  id="contact_msg_icon_4"
                  viewBox="0 0 1024 1024"
                  class="messages-icon15"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="contact_msg_name_4" class="messages-msgcompanyname03">
                  <span class="messages-text15">Company c</span>
                </span>
                <span id="contact_msg_4" class="messages-text16">
                  ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum
                  lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                </span>
                <span id="contact_msg_rcvd_4" class="messages-text17">
                  today 1354
                </span>
              </div>
              <div id="contact_preview_5" class="messages-contactpreview04">
                <svg
                  id="contact_msg_icon_5"
                  viewBox="0 0 1024 1024"
                  class="messages-icon17"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="contact_msg_name_5" class="messages-msgcompanyname04">
                  <span class="messages-text18">Company c</span>
                </span>
                <span id="contact_msg_5" class="messages-text19">
                  ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum
                  lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                </span>
                <span id="contact_msg_rcvd_5" class="messages-text20">
                  today 1354
                </span>
              </div>
              <div id="contact_preview_6" class="messages-contactpreview05">
                <svg
                  id="contact_msg_icon_6"
                  viewBox="0 0 1024 1024"
                  class="messages-icon19"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="contact_msg_name_6" class="messages-msgcompanyname05">
                  <span class="messages-text21">Company c</span>
                </span>
                <span id="contact_msg_6" class="messages-text22">
                  ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum
                  lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                </span>
                <span id="contact_msg_rcvd_6" class="messages-text23">
                  today 1354
                </span>
              </div>
              <div id="contact_preview_7" class="messages-contactpreview06">
                <svg
                  id="contact_msg_icon_7"
                  viewBox="0 0 1024 1024"
                  class="messages-icon21"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="contact_msg_name_7" class="messages-msgcompanyname06">
                  <span class="messages-text24">Company c</span>
                </span>
                <span id="contact_msg_7" class="messages-text25">
                  ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum
                  lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                </span>
                <span id="contact_msg_rcvd_7" class="messages-text26">
                  today 1354
                </span>
              </div>
              <div id="contact_preview_8" class="messages-contactpreview07">
                <svg
                  id="contact_msg_icon_8"
                  viewBox="0 0 1024 1024"
                  class="messages-icon23"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="contact_msg_name_8" class="messages-msgcompanyname07">
                  <span class="messages-text27">Company c</span>
                </span>
                <span id="contact_msg_8" class="messages-text28">
                  ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum
                  lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                </span>
                <span id="contact_msg_rcvd_8" class="messages-text29">
                  today 1354
                </span>
              </div>
              <div id="contact_preview_9" class="messages-contactpreview08">
                <svg
                  id="contact_msg_icon_9"
                  viewBox="0 0 1024 1024"
                  class="messages-icon25"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="contact_msg_name_9" class="messages-msgcompanyname08">
                  <span class="messages-text30">Company c</span>
                </span>
                <span id="contact_msg_9" class="messages-text31">
                  ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum
                  lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                </span>
                <span id="contact_msg_rcvd_9" class="messages-text32">
                  today 1354
                </span>
              </div>
              <div id="contact_preview_10" class="messages-contactpreview09">
                <svg
                  id="contact_msg_icon_10"
                  viewBox="0 0 1024 1024"
                  class="messages-icon27"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="contact_msg_name_10" class="messages-msgcompanyname09">
                  <span class="messages-text33">Company c</span>
                </span>
                <span id="contact_msg_10" class="messages-text34">
                  ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum lorem ipsum
                  lorem ipsum lorem ipsum loremipsum lorem ipsum lor
                </span>
                <span id="contact_msg_rcvd_10" class="messages-text35">
                  today 1354
                </span>
              </div>
            </div>
            <div id="active_msg_form" class="messages-activemsgform">
              <div id="active_msg_container_2" class="messages-container2">
                <svg
                  id="active_msg_user_icon"
                  viewBox="0 0 1024 1024"
                  class="messages-icon29"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="active_msg_msg_2" class="messages-text36">
                  <span>
                    This would be a message from the user in response to his
                    trading partner.
                    <span v-html="rawtta5"></span>
                  </span>
                </span>
                <span id="active_msg_msg_3" class="messages-text38">
                  <span>
                    This would be a message from the user in response to his
                    trading partner.
                    <span v-html="rawqe79"></span>
                  </span>
                </span>
                <span id="active_msg_time_2" class="messages-text40">
                  <span>Today 1501</span>
                </span>
                <span id="active_msg_time_3" class="messages-text42">
                  <span>Today 1503</span>
                </span>
              </div>
              <div id="active_msg_container_3" class="messages-container3">
                <svg
                  id="active_msg_partner_icon_2"
                  viewBox="0 0 1024 1024"
                  class="messages-icon31"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="active_msg_msg_4" class="messages-text44">
                  This would be a message the last message received in this
                  message.
                  <span v-html="rawqcuq"></span>
                </span>
                <span id="active_msg_time_4" class="messages-text45">
                  <span>Today 1530</span>
                </span>
              </div>
              <div id="active_msg_container_1" class="messages-container4">
                <svg
                  id="active_msg_partner_icon_1"
                  viewBox="0 0 1024 1024"
                  class="messages-icon33"
                >
                  <path
                    d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"
                  ></path>
                </svg>
                <span id="active_msg_msg_1" class="messages-text47">
                  This would be a message from the partner if this were a real
                  message it would say something REALLY important.
                  <span v-html="rawkm2m"></span>
                </span>
                <span id="active_msg_time_1" class="messages-text48">
                  <span>Today 1436</span>
                </span>
              </div>
              <div id="active_msg_entry_container" class="messages-container5">
                <div id="active_msg_entry_text" class="messages-container6">
                  <textarea
                    id="msg_msg_input"
                    name="msg_input"
                    placeholder="message here"
                    class="messages-textarea thqTextArea"
                  ></textarea>
                </div>
                <button
                  id="active_msg_send_button"
                  name="send_button"
                  class="messages-button thqButton"
                >
                  send
                </button>
              </div>
            </div>
          </div>
          <h1 id="forms_content_header" class="messages-text50">
            <span>messages</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Messages',

  data() {
    return {
      rawtta5: ' ',
      rawqe79: ' ',
      rawqcuq: ' ',
      rawkm2m: ' ',
    }
  },

  metaInfo: {
    title: 'messages - dEDI Icn',
    meta: [
      {
        property: 'og:title',
        content: 'messages - dEDI Icn',
      },
    ],
  },
}
</script>

<style scoped>
.messages-container {
  width: fit-content;
  height: fit-content;
  display: flex;
  z-index: 100;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.messages-container1 {
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
.messages-body {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: #ffffff;
}
.messages-footer {
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
.messages-footerlogo {
  top: auto;
  left: 1%;
  right: auto;
  bottom: 0px;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
.messages-copyright {
  top: auto;
  right: 1%;
  bottom: 30%;
  position: absolute;
}
.messages-header {
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
.messages-logo {
  height: 100%;
  margin: auto;
  object-fit: cover;
}
.messages-sidebar {
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
.messages-menu {
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
.messages-dashdashlink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  margin-top: 1%;
  flex-direction: column;
}
.messages-dashdashicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.messages-dashdashtitle {
  color: #b3b0b0;
  align-self: center;
}
.messages-dashworkinglink {
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  margin-top: 1%;
  flex-direction: column;
}
.messages-dashworkingicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.messages-dashworkingtitle {
  color: #b3b0b0;
  align-self: center;
}
.messages-dashformslink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  margin-top: 1%;
  flex-direction: column;
}
.messages-dashformsicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.messages-dashformstitle {
  color: #b3b0b0;
  align-self: center;
}
.messages-dashmsgslink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  margin-top: 1%;
  flex-direction: column;
}
.messages-dashmsgsicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.messages-dashmsgstitle {
  color: #b3b0b0;
  align-self: center;
}
.messages-dashpartnerslink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  margin-top: 1%;
  flex-direction: column;
}
.messages-dashpartnersicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.messages-dashpartnerstitle {
  color: #b3b0b0;
  align-self: center;
}
.messages-dashtrackinglink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
}
.messages-dashtrackingicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.messages-dashtrackingtitle {
  color: #b3b0b0;
  align-self: center;
}
.messages-dashinventorylink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
}
.messages-dashinventoryicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.messages-dashinventorytitle {
  color: #b3b0b0;
  align-self: center;
}
.messages-dashfinanciallink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
}
.messages-dashfinancialicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.messages-dashfinancialtitle {
  color: #b3b0b0;
  align-self: center;
}
.messages-usericon {
  top: 2%;
  fill: #b3b0b0;
  width: 50%;
  margin: auto;
  position: absolute;
  align-self: center;
}
.messages-main {
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
.messages-contentcolumn {
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
.messages-msgpreview {
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
.messages-contactpreview {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: column;
  justify-content: center;
}
.messages-icon09 {
  top: auto;
  fill: #b3b0b0;
  left: auto;
  right: auto;
  width: 18%;
  bottom: auto;
  height: 100%;
  position: absolute;
}
.messages-msgcompanyname {
  top: 13%;
  left: 25%;
  color: #b3b0b0;
  right: 0px;
  bottom: auto;
  margin: 1%;
  position: absolute;
  font-size: 70%;
}
.messages-text06 {
  font-style: normal;
  font-weight: 700;
}
.messages-text07 {
  color: #b3b0b0;
  width: 70%;
  height: 70%;
  font-size: 50%;
  align-self: center;
  margin-top: 12%;
  margin-left: 20%;
}
.messages-text08 {
  top: 18%;
  left: auto;
  color: #b3b0b0;
  right: 1%;
  bottom: 0px;
  position: absolute;
  font-size: 70%;
}
.messages-contactpreview01 {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: column;
  justify-content: center;
}
.messages-icon11 {
  top: auto;
  fill: #b3b0b0;
  left: auto;
  right: auto;
  width: 18%;
  bottom: auto;
  height: 100%;
  position: absolute;
}
.messages-msgcompanyname01 {
  top: 13%;
  left: 25%;
  color: #b3b0b0;
  right: 0px;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-text09 {
  font-style: normal;
  font-weight: 700;
}
.messages-text10 {
  color: #b3b0b0;
  width: 70%;
  height: 70%;
  font-size: 50%;
  align-self: center;
  margin-top: 12%;
  margin-left: 20%;
}
.messages-text11 {
  top: 18%;
  left: auto;
  color: #b3b0b0;
  right: 1%;
  bottom: 0px;
  position: absolute;
  font-size: 70%;
}
.messages-contactpreview02 {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: column;
  justify-content: center;
}
.messages-icon13 {
  top: auto;
  fill: #b3b0b0;
  left: auto;
  right: auto;
  width: 18%;
  bottom: auto;
  height: 100%;
  position: absolute;
}
.messages-msgcompanyname02 {
  top: 13%;
  left: 25%;
  color: #b3b0b0;
  right: 0px;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-text12 {
  font-style: normal;
  font-weight: 700;
}
.messages-text13 {
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
.messages-text14 {
  top: 18%;
  left: auto;
  color: #b3b0b0;
  right: 1%;
  bottom: 0px;
  position: absolute;
  font-size: 70%;
}
.messages-contactpreview03 {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: column;
  justify-content: center;
}
.messages-icon15 {
  top: auto;
  fill: #b3b0b0;
  left: auto;
  right: auto;
  width: 18%;
  bottom: auto;
  height: 100%;
  position: absolute;
}
.messages-msgcompanyname03 {
  top: 13%;
  left: 25%;
  color: #b3b0b0;
  right: 0px;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-text15 {
  font-style: normal;
  font-weight: 700;
}
.messages-text16 {
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
.messages-text17 {
  top: 18%;
  left: auto;
  color: #b3b0b0;
  right: 1%;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-contactpreview04 {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: column;
  justify-content: center;
}
.messages-icon17 {
  top: auto;
  fill: #b3b0b0;
  left: auto;
  right: auto;
  width: 18%;
  bottom: auto;
  height: 100%;
  position: absolute;
}
.messages-msgcompanyname04 {
  top: 13%;
  left: 25%;
  color: #b3b0b0;
  right: 0px;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-text18 {
  font-style: normal;
  font-weight: 700;
}
.messages-text19 {
  color: #b3b0b0;
  width: 70%;
  height: 70%;
  font-size: 50%;
  align-self: center;
  margin-top: 13%;
  margin-left: 20%;
}
.messages-text20 {
  top: 18%;
  left: auto;
  color: #b3b0b0;
  right: 1%;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-contactpreview05 {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: column;
  justify-content: center;
}
.messages-icon19 {
  top: auto;
  fill: #b3b0b0;
  left: auto;
  right: auto;
  width: 18%;
  bottom: auto;
  height: 100%;
  position: absolute;
}
.messages-msgcompanyname05 {
  top: 13%;
  left: 25%;
  color: #b3b0b0;
  right: 0px;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-text21 {
  font-style: normal;
  font-weight: 700;
}
.messages-text22 {
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
.messages-text23 {
  top: 18%;
  left: auto;
  color: #b3b0b0;
  right: 1%;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-contactpreview06 {
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
.messages-icon21 {
  top: auto;
  fill: #b3b0b0;
  left: auto;
  right: auto;
  width: 18%;
  bottom: auto;
  height: 100%;
  position: absolute;
}
.messages-msgcompanyname06 {
  top: 13%;
  left: 25%;
  color: #b3b0b0;
  right: auto;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-text24 {
  font-style: normal;
  font-weight: 700;
}
.messages-text25 {
  color: #b3b0b0;
  width: 70%;
  height: 70%;
  font-size: 50%;
  align-self: center;
  margin-top: 13%;
  margin-left: 20%;
}
.messages-text26 {
  top: 18%;
  left: auto;
  color: #b3b0b0;
  right: 1%;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-contactpreview07 {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: column;
  justify-content: center;
}
.messages-icon23 {
  top: auto;
  fill: #b3b0b0;
  left: auto;
  right: auto;
  width: 18%;
  bottom: auto;
  height: 100%;
  position: absolute;
}
.messages-msgcompanyname07 {
  top: 13%;
  left: 25%;
  color: #b3b0b0;
  right: auto;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-text27 {
  font-style: normal;
  font-weight: 700;
}
.messages-text28 {
  color: #b3b0b0;
  width: 70%;
  height: 70%;
  font-size: 50%;
  align-self: center;
  margin-top: 13%;
  margin-left: 20%;
}
.messages-text29 {
  top: 18%;
  left: auto;
  color: #b3b0b0;
  right: 1%;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-contactpreview08 {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: column;
  justify-content: center;
}
.messages-icon25 {
  top: auto;
  fill: #b3b0b0;
  left: auto;
  right: auto;
  width: 18%;
  bottom: auto;
  height: 100%;
  position: absolute;
}
.messages-msgcompanyname08 {
  top: 13%;
  left: 25%;
  color: #b3b0b0;
  right: auto;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-text30 {
  font-style: normal;
  font-weight: 700;
}
.messages-text31 {
  color: #b3b0b0;
  width: 70%;
  height: 70%;
  font-size: 50%;
  align-self: center;
  margin-top: 13%;
  margin-left: 20%;
}
.messages-text32 {
  top: 18%;
  left: auto;
  color: #b3b0b0;
  right: 1%;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-contactpreview09 {
  flex: 0 0 auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.messages-icon27 {
  top: auto;
  fill: #b3b0b0;
  left: auto;
  right: auto;
  width: 18%;
  bottom: auto;
  height: 100%;
  position: absolute;
}
.messages-msgcompanyname09 {
  top: 13%;
  left: 25%;
  color: #b3b0b0;
  right: auto;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-text33 {
  font-style: normal;
  font-weight: 700;
}
.messages-text34 {
  color: #b3b0b0;
  width: 70%;
  height: 70%;
  font-size: 50%;
  align-self: center;
  margin-top: 13%;
  margin-left: 20%;
}
.messages-text35 {
  top: 18%;
  left: auto;
  color: #b3b0b0;
  right: 1%;
  bottom: auto;
  position: absolute;
  font-size: 70%;
}
.messages-activemsgform {
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
.messages-container2 {
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
.messages-icon29 {
  top: 20%;
  fill: #b3b0b0;
  right: 2%;
  width: 15% ;
  height: 30%;
  margin: auto;
  position: absolute;
}
.messages-text36 {
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
.messages-text38 {
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
.messages-text40 {
  top: 5%;
  left: auto;
  color: #b3b0b0;
  right: 5%;
  bottom: auto;
  position: absolute;
  font-size: 80%;
}
.messages-text42 {
  top: auto;
  left: auto;
  color: #b3b0b0;
  right: 5%;
  bottom: 30%;
  position: absolute;
  font-size: 80%;
}
.messages-container3 {
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
.messages-icon31 {
  top: 25%;
  fill: #b3b0b0;
  left: 0px;
  right: auto;
  width: 20%;
  height: 40%;
  margin: auto;
  position: absolute;
}
.messages-text44 {
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
.messages-text45 {
  top: 5%;
  left: 5%;
  color: #b3b0b0;
  right: 0px;
  bottom: auto;
  position: absolute;
  font-size: 80%;
}
.messages-container4 {
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
.messages-icon33 {
  top: 25%;
  fill: #b3b0b0;
  left: 0px;
  right: auto;
  width: 20%;
  height: 40%;
  margin: auto;
  position: absolute;
}
.messages-text47 {
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
.messages-text48 {
  top: 5%;
  left: 5%;
  color: #b3b0b0;
  right: 0px;
  bottom: auto;
  position: absolute;
  font-size: 80%;
}
.messages-container5 {
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
.messages-container6 {
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
.messages-textarea {
  top: 20%;
  right: 2%;
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  border-color: #b3b0b0;
}
.messages-button {
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
.messages-text50 {
  top: 2%;
  left: 2%;
  color: #b3b0b0;
  bottom: auto;
  position: absolute;
}
@media(max-width: 991px) {
  .messages-container1 {
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
  .messages-body {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #ffffff;
  }
  .messages-footer {
    top: auto;
    left: 0px;
    right: 0px;
    width: 100%;
    bottom: 1%;
    height: 5%;
    position: absolute;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .messages-footerlogo {
    top: auto;
    left: 1%;
    right: auto;
    width: auto;
    bottom: 0px;
    height: 100%;
    position: absolute;
  }
  .messages-copyright {
    top: auto;
    right: 1%;
    bottom: 30%;
    position: absolute;
  }
  .messages-header {
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
  .messages-logo {
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
  .messages-sidebar {
    top: 0px;
    left: 0px;
    right: auto;
    width: 10%;
    bottom: auto;
    height: 94%;
    position: absolute;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .messages-menu {
    top: 11%;
    left: auto;
    right: 0px;
    width: 100%;
    bottom: auto;
    height: 50%;
    position: absolute;
    align-items: flex-start;
  }
  .messages-dashdashlink {
    width: 99%;
    height: 12%;
    align-self: flex-start;
    margin-top: 1%;
  }
  .messages-dashdashicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashdashtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashworkinglink {
    width: 99%;
    height: 12%;
  }
  .messages-dashworkingicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
    margin-top: 1%;
  }
  .messages-dashworkingtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashformslink {
    width: 99%;
    height: 12%;
  }
  .messages-dashformsicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
    margin-top: 1%;
  }
  .messages-dashformstitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashmsgslink {
    width: 99%;
    height: 12%;
  }
  .messages-dashmsgsicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
    margin-top: 1%;
  }
  .messages-dashmsgstitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashpartnerslink {
    width: 99%;
    height: 12%;
  }
  .messages-dashpartnersicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
    margin-top: 1%;
  }
  .messages-dashpartnerstitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashtrackinglink {
    width: 99%;
    height: 12%;
  }
  .messages-dashtrackingicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
  }
  .messages-dashtrackingtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashinventorylink {
    width: 99%;
    height: 12%;
  }
  .messages-dashinventoryicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
  }
  .messages-dashinventorytitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashfinanciallink {
    width: 99%;
    height: 12%;
  }
  .messages-dashfinancialicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
    margin-top: 1%;
  }
  .messages-dashfinancialtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-usericon {
    top: 1%;
    left: 30%;
    width: 50%;
    height: auto;
  }
  .messages-main {
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
  .messages-contentcolumn {
    width: 100%;
    height: 90%;
    position: relative;
    align-self: flex-end;
  }
  .messages-msgpreview {
    width: 30%;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .messages-contactpreview {
    width: 100%;
    height: 10%;
    position: relative;
    justify-content: center;
  }
  .messages-icon09 {
    top: auto;
    fill: #b3b0b0;
    left: auto;
    width: 20%;
    height: 50%;
    margin: auto;
    position: absolute;
    align-self: flex-start;
  }
  .messages-msgcompanyname {
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
  .messages-text07 {
    color: #b3b0b0;
    width: 70%;
    height: 70%;
    font-size: 50%;
    align-self: center;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    margin-top: 15%;
    margin-left: 20%;
  }
  .messages-text08 {
    top: 18%;
    color: #b3b0b0;
    right: 1%;
    position: absolute;
    font-size: 70%;
  }
  .messages-contactpreview01 {
    width: 100%;
    height: 10%;
    position: relative;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    padding-top: 0px;
    justify-content: center;
  }
  .messages-icon11 {
    top: auto;
    fill: #b3b0b0;
    left: auto;
    width: 20%;
    height: 50%;
    margin: auto;
    position: absolute;
    align-self: flex-start;
  }
  .messages-msgcompanyname01 {
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
  .messages-text10 {
    color: #b3b0b0;
    width: 70%;
    height: 70%;
    font-size: 50%;
    align-self: center;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    margin-top: 15%;
    margin-left: 20%;
  }
  .messages-text11 {
    top: 18%;
    color: #b3b0b0;
    right: 1%;
    position: absolute;
    font-size: 70%;
  }
  .messages-contactpreview02 {
    width: 100%;
    height: 10%;
    position: relative;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    padding-top: 0px;
    justify-content: center;
  }
  .messages-icon13 {
    fill: #b3b0b0;
    width: 20%;
    height: 50%;
    margin: auto;
    position: absolute;
    align-self: flex-start;
  }
  .messages-msgcompanyname02 {
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
  .messages-text13 {
    color: #b3b0b0;
    width: 70%;
    height: 70%;
    font-size: 50%;
    align-self: center;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    margin-top: 15%;
    margin-left: 20%;
  }
  .messages-text14 {
    top: 18%;
    color: #b3b0b0;
    right: 1%;
    position: absolute;
    font-size: 70%;
  }
  .messages-contactpreview03 {
    width: 100%;
    height: 10%;
    position: relative;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    padding-top: 0px;
    justify-content: center;
  }
  .messages-icon15 {
    fill: #b3b0b0;
    width: 20%;
    height: 50%;
    margin: auto;
    position: absolute;
    align-self: flex-start;
  }
  .messages-msgcompanyname03 {
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
  .messages-text16 {
    color: #b3b0b0;
    width: 70%;
    height: 70%;
    font-size: 50%;
    align-self: center;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    margin-top: 15%;
    margin-left: 20%;
  }
  .messages-text17 {
    top: 18%;
    color: #b3b0b0;
    right: 1%;
    position: absolute;
    font-size: 70%;
  }
  .messages-contactpreview04 {
    width: 100%;
    height: 10%;
    position: relative;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    padding-top: 0px;
    justify-content: center;
  }
  .messages-icon17 {
    fill: #b3b0b0;
    width: 20%;
    height: 50%;
    margin: auto;
    position: absolute;
    align-self: flex-start;
  }
  .messages-msgcompanyname04 {
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
  .messages-text19 {
    color: #b3b0b0;
    width: 70%;
    height: 70%;
    font-size: 50%;
    align-self: center;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    margin-top: 15%;
    margin-left: 20%;
  }
  .messages-text20 {
    top: 18%;
    color: #b3b0b0;
    right: 1%;
    position: absolute;
    font-size: 70%;
  }
  .messages-contactpreview05 {
    width: 100%;
    height: 10%;
    position: relative;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    padding-top: 0px;
    justify-content: center;
  }
  .messages-icon19 {
    fill: #b3b0b0;
    width: 20%;
    height: 50%;
    margin: auto;
    position: absolute;
    align-self: flex-start;
  }
  .messages-msgcompanyname05 {
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
  .messages-text22 {
    color: #b3b0b0;
    width: 70%;
    height: 70%;
    font-size: 50%;
    align-self: center;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    margin-top: 15%;
    margin-left: 20%;
  }
  .messages-text23 {
    top: 18%;
    color: #b3b0b0;
    right: 1%;
    position: absolute;
    font-size: 70%;
  }
  .messages-contactpreview06 {
    width: 100%;
    height: 10%;
    position: relative;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    padding-top: 0px;
    justify-content: center;
  }
  .messages-icon21 {
    fill: #b3b0b0;
    width: 20%;
    height: 50%;
    margin: auto;
    position: absolute;
    align-self: flex-start;
  }
  .messages-msgcompanyname06 {
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
  .messages-text25 {
    color: #b3b0b0;
    width: 70%;
    height: 70%;
    font-size: 50%;
    align-self: center;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    margin-top: 15%;
    margin-left: 20%;
  }
  .messages-text26 {
    top: 18%;
    color: #b3b0b0;
    right: 1%;
    position: absolute;
    font-size: 70%;
  }
  .messages-contactpreview07 {
    width: 100%;
    height: 10%;
    position: relative;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    padding-top: 0px;
    justify-content: center;
  }
  .messages-icon23 {
    fill: #b3b0b0;
    width: 20%;
    height: 50%;
    margin: auto;
    position: absolute;
    align-self: flex-start;
  }
  .messages-msgcompanyname07 {
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
  .messages-text28 {
    color: #b3b0b0;
    width: 70%;
    height: 70%;
    font-size: 50%;
    align-self: center;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    margin-top: 15%;
    margin-left: 20%;
  }
  .messages-text29 {
    top: 18%;
    color: #b3b0b0;
    right: 1%;
    position: absolute;
    font-size: 70%;
  }
  .messages-contactpreview08 {
    width: 100%;
    height: 10%;
    position: relative;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    padding-top: 0px;
    justify-content: center;
  }
  .messages-icon25 {
    fill: #b3b0b0;
    width: 20%;
    height: 50%;
    margin: auto;
    position: absolute;
    align-self: flex-start;
  }
  .messages-msgcompanyname08 {
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
  .messages-text31 {
    color: #b3b0b0;
    width: 70%;
    height: 70%;
    font-size: 50%;
    align-self: center;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    margin-top: 15%;
    margin-left: 20%;
  }
  .messages-text32 {
    top: 18%;
    color: #b3b0b0;
    right: 1%;
    position: absolute;
    font-size: 70%;
  }
  .messages-contactpreview09 {
    width: 100%;
    height: 10%;
    position: relative;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    padding-top: 0px;
    justify-content: center;
  }
  .messages-icon27 {
    fill: #b3b0b0;
    width: 20%;
    height: 50%;
    margin: auto;
    position: absolute;
    align-self: flex-start;
  }
  .messages-msgcompanyname09 {
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
  .messages-text34 {
    color: #b3b0b0;
    width: 70%;
    height: 70%;
    font-size: 50%;
    align-self: center;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    margin-top: 15%;
    margin-left: 20%;
  }
  .messages-text35 {
    top: 18%;
    color: #b3b0b0;
    right: 1%;
    position: absolute;
    font-size: 70%;
  }
  .messages-activemsgform {
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
  .messages-container2 {
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
  .messages-icon29 {
    top: 20%;
    fill: #b3b0b0;
    right: 3%;
    width: 15%;
    height: 30%;
    margin: auto;
    position: absolute;
    align-self: flex-start;
  }
  .messages-text36 {
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
  .messages-text38 {
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
  .messages-text40 {
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
  .messages-text42 {
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
  .messages-container3 {
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
  .messages-icon31 {
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
  .messages-text44 {
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
  .messages-text45 {
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
  .messages-container4 {
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
  .messages-icon33 {
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
  .messages-text47 {
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
  .messages-text48 {
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
  .messages-container5 {
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
  .messages-container6 {
    top: 20%;
    right: 2%;
    width: 90%;
    height: 40%;
    margin: auto;
    position: absolute;
    justify-content: center;
  }
  .messages-textarea {
    width: 100%;
    height: 100%;
    border-color: #b3b0b0;
  }
  .messages-button {
    left: 68%;
    color: #080000;
    right: auto;
    width: 30%;
    bottom: 15%;
    position: absolute;
    background-color: #cecece;
  }
}
@media(max-width: 767px) {
  .messages-container1 {
    height: 100%;
  }
  .messages-body {
    height: 1002px;
    position: relative;
  }
  .messages-footer {
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
  .messages-footerlogo {
    top: auto;
    left: 1%;
    right: auto;
    width: auto;
    bottom: 0px;
    height: 100%;
    position: absolute;
  }
  .messages-copyright {
    top: auto;
    right: 1%;
    bottom: 30%;
    margin: auto;
    position: absolute;
  }
  .messages-header {
    top: auto;
    left: auto;
    right: auto;
    width: 99%;
    bottom: auto;
    height: 10%;
    position: absolute;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .messages-logo {
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
  .messages-sidebar {
    top: 0px;
    left: 0px;
    right: auto;
    width: 15%;
    bottom: auto;
    height: 94%;
    position: absolute;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .messages-menu {
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
  .messages-dashdashlink {
    width: 99%;
    height: 12%;
    align-self: flex-start;
    margin-top: 1%;
  }
  .messages-dashdashicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashdashtitle {
    align-self: center;
  }
  .messages-dashworkinglink {
    width: 99%;
    height: 12%;
  }
  .messages-dashworkingicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashworkingtitle {
    align-self: center;
  }
  .messages-dashformslink {
    width: 99%;
    height: 12%;
  }
  .messages-dashformsicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashformstitle {
    align-self: center;
  }
  .messages-dashmsgslink {
    width: 99%;
    height: 12%;
  }
  .messages-dashmsgsicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashmsgstitle {
    align-self: center;
  }
  .messages-dashpartnerslink {
    width: 99%;
    height: 12%;
  }
  .messages-dashpartnersicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashpartnerstitle {
    align-self: center;
  }
  .messages-dashtrackinglink {
    width: 99%;
    height: 12%;
  }
  .messages-dashtrackingicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashtrackingtitle {
    align-self: center;
  }
  .messages-dashinventorylink {
    width: 99%;
    height: 12%;
  }
  .messages-dashinventoryicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashinventorytitle {
    align-self: center;
  }
  .messages-dashfinanciallink {
    width: 99%;
    height: 12%;
  }
  .messages-dashfinancialicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashfinancialtitle {
    align-self: center;
  }
  .messages-usericon {
    top: 1%;
    left: 20%;
    width: 50%;
    height: auto;
    position: absolute;
    align-self: center;
  }
  .messages-main {
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
  .messages-contentcolumn {
    width: 50%;
    height: 100%;
  }
}
@media(max-width: 479px) {
  .messages-body {
    height: 1002px;
    position: relative;
    border-top-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
  }
  .messages-footer {
    width: 100%;
    height: 5%;
    position: relative;
    align-self: flex-end;
    flex-direction: column;
    justify-content: flex-end;
  }
  .messages-footerlogo {
    top: auto;
    left: 1%;
    right: auto;
    width: auto;
    bottom: 0px;
    height: 100%;
    position: absolute;
  }
  .messages-copyright {
    top: auto;
    right: 1%;
    bottom: 16px;
    position: absolute;
  }
  .messages-header {
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
  .messages-logo {
    top: auto;
    right: 15%;
    width: auto;
    bottom: 0px;
    height: 100%;
    margin: auto;
    position: absolute;
  }
  .messages-sidebar {
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
  .messages-menu {
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
  .messages-dashdashlink {
    width: 99%;
    height: 12%;
    align-self: flex-start;
  }
  .messages-dashdashicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashdashtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashworkinglink {
    width: 99%;
    height: 12%;
    align-self: center;
  }
  .messages-dashworkingicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashworkingtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashformslink {
    width: 99%;
    height: 12%;
    align-self: center;
  }
  .messages-dashformsicon {
    fill: #b3b0b0;
    width: 30%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashformstitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashmsgslink {
    width: 99%;
    height: 12%;
  }
  .messages-dashmsgsicon {
    fill: #b3b0b0;
    width: 40%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashmsgstitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashpartnerslink {
    width: 99%;
    height: 12%;
  }
  .messages-dashpartnersicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashpartnerstitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashtrackinglink {
    width: 99%;
    height: 12%;
  }
  .messages-dashtrackingicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashtrackingtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashinventorylink {
    width: 99%;
    height: 12%;
  }
  .messages-dashinventoryicon {
    fill: #b3b0b0;
    width: 40%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashinventorytitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-dashfinanciallink {
    width: 99%;
    height: 12%;
  }
  .messages-dashfinancialicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .messages-dashfinancialtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .messages-usericon {
    width: 50%;
    height: auto;
    position: static;
    align-self: center;
    margin-top: 25%;
  }
  .messages-main {
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
  .messages-contentcolumn {
    width: 50%;
    height: 100%;
  }
}
</style>
