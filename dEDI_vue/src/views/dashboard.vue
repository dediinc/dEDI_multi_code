<template>
  <div class="dashboard-container">
    <div id="c_dash_container" class="dashboard-container1">
      <div id="c_dash_body_a" class="dashboard-body">
        <div id="c_dash_footer" class="dashboard-footer">
          <img
            id="c_dash_footer_logo"
            alt="image"
            src="/playground_assets/dedi_logo1%20-1000h.png"
            class="dashboard-footerlogo"
          />
          <span id="c_dash_footer_copy" class="dashboard-copyright">
            © 2021 dEDI Incorporated
          </span>
        </div>
        <div id="c_dash_header" class="dashboard-header">
          <img
            id="c_dash_header_logo"
            alt="dEDI logo"
            src="/playground_assets/dedi_logo_trans-1000h.png"
            class="dashboard-logo"
          />
        </div>
        <div id="c_dash_sidebar" class="dashboard-sidebar">
          <div id="c_dash_menu" class="dashboard-menu">
            <router-link to="/dashboard" class="dashboard-navlink">
              <div id="c_dash_menu-link_1" class="dashboard-dashdashlink thqLink">
                <svg
                  id="c_dash_menu_icon_1"
                  viewBox="0 0 1024 1024"
                  class="dashboard-dashdashicon"
                >
                  <path
                    d="M219.429 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM329.143 402.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM573.714 677.143l57.714-218.286c4.571-19.429-6.857-39.429-26.286-44.571v0c-19.429-5.143-39.429 6.857-44.571 26.286l-57.714 218.286c-45.143 3.429-84.571 34.857-97.143 81.143-15.429 58.857 20 118.857 78.286 134.286 58.857 15.429 118.857-20 134.286-78.286 12-46.286-7.429-93.143-44.571-118.857zM950.857 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM585.143 292.571c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM841.143 402.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM1024 658.286c0 98.286-28 193.143-80.571 276-6.857 10.286-18.286 16.571-30.857 16.571h-801.143c-12.571 0-24-6.286-30.857-16.571-52.571-82.286-80.571-177.714-80.571-276 0-282.286 229.714-512 512-512s512 229.714 512 512z"
                  ></path>
                </svg>
                <span id="c_dash_menu_title_1" class="dashboard-dashdashtitle">
                  dashboard
                </span>
              </div>
            </router-link>
            <div id="c_dash_menu-link_2" class="dashboard-dashworkinglink">
              <svg
                id="c_dash_menu_icon_2"
                viewBox="0 0 1024 1024"
                class="dashboard-dashworkingicon"
              >
                <path
                  d="M710 72l242 242-242 240h186v342h-342v-342h156l-240-240v156h-342v-342h342v186zM128 896v-342h342v342h-342z"
                ></path>
              </svg>
              <span id="c_dash_menu_title_1" class="dashboard-dashworkingtitle">
                working
              </span>
            </div>
            <router-link to="/forms" class="dashboard-navlink1">
              <div
                id="c_dash_menu-link_3"
                class="dashboard-dashformslink thqLink"
              >
                <svg
                  id="c_dash_menu_icon_3"
                  viewBox="0 0 877.7142857142857 1024"
                  class="dashboard-dashformsicon"
                >
                  <path
                    d="M838.857 272c5.714 5.714 10.857 12.571 16 20.571h-269.714v-269.714c8 5.143 14.857 10.286 20.571 16zM566.857 365.714h310.857v603.429c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h457.143v310.857c0 30.286 24.571 54.857 54.857 54.857zM658.286 786.286v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 640v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 493.714v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286z"
                  ></path>
                </svg>
                <span id="c_dash_menu_title_3" class="dashboard-dashformstitle">
                  <span>forms</span>
                </span>
              </div>
            </router-link>
            <router-link to="/messages" class="dashboard-navlink2">
              <div id="c_dash_menu-link_4" class="dashboard-dashmsgslink thqLink">
                <svg
                  id="c_dash_menu_icon_4"
                  viewBox="0 0 1024 1024"
                  class="dashboard-dashmsgsicon"
                >
                  <path
                    d="M768 342v-86h-512v86h512zM768 470v-86h-512v86h512zM768 598v-86h-512v86h512zM854 86q34 0 59 25t25 59v512q0 34-25 60t-59 26h-598l-170 170v-768q0-34 25-59t59-25h684z"
                  ></path>
                </svg>
                <span id="c_dash_menu_title_4" class="dashboard-dashmsgstitle">
                  <span>msgs</span>
                </span>
              </div>
            </router-link>
            <div id="c_dash_menu-link_5" class="dashboard-dashpartnerslink">
              <svg
                id="c_dash_menu_icon_5"
                viewBox="0 0 1097.142857142857 1024"
                class="dashboard-dashpartnersicon"
              >
                <path
                  d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"
                ></path>
              </svg>
              <span id="c_dash_menu_title_5" class="dashboard-dashpartnerstitle">
                <span>partners</span>
              </span>
            </div>
            <div id="c_dash_menu-link_6" class="dashboard-dashtrackinglink">
              <svg
                id="c_dash_menu_icon_6"
                viewBox="0 0 1024 1024"
                class="dashboard-dashtrackingicon"
              >
                <path
                  d="M1024 576l-128-256h-192v-128c0-35.2-28.8-64-64-64h-576c-35.2 0-64 28.8-64 64v512l64 64h81.166c-10.898 18.832-17.166 40.678-17.166 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.268-45.168-17.166-64h354.334c-10.898 18.832-17.168 40.678-17.168 64 0 70.692 57.308 128 128 128s128-57.308 128-128c0-23.322-6.27-45.168-17.168-64h81.168v-192zM704 576v-192h132.668l96 192h-228.668z"
                ></path>
              </svg>
              <span id="c_dash_menu_title_6" class="dashboard-dashtrackingtitle">
                <span>tracking</span>
              </span>
            </div>
            <div id="c_dash_menu-link_7" class="dashboard-dashinventorylink">
              <svg
                id="c_dash_menu_icon_7"
                viewBox="0 0 1024 1024"
                class="dashboard-dashinventoryicon"
              >
                <path
                  d="M512 298v-84h-384v84h384zM512 470v-86h-384v86h384zM896 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-768q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h768z"
                ></path>
              </svg>
              <span id="c_dash_menu_title_7" class="dashboard-dashinventorytitle">
                <span>inventory</span>
              </span>
            </div>
            <div id="c_dash_menu-link_8" class="dashboard-dashfinanciallink">
              <svg
                id="c_dash_menu_icon_8"
                viewBox="0 0 1097.142857142857 1024"
                class="dashboard-dashfinancialicon"
              >
                <path
                  d="M548.571 0l548.571 219.429v73.143h-73.143c0 20-17.714 36.571-39.429 36.571h-872c-21.714 0-39.429-16.571-39.429-36.571h-73.143v-73.143zM146.286 365.714h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h73.143v-438.857h146.286v438.857h33.714c21.714 0 39.429 16.571 39.429 36.571v36.571h-950.857v-36.571c0-20 17.714-36.571 39.429-36.571h33.714v-438.857zM1057.714 914.286c21.714 0 39.429 16.571 39.429 36.571v73.143h-1097.143v-73.143c0-20 17.714-36.571 39.429-36.571h1018.286z"
                ></path>
              </svg>
              <span id="c_dash_menu_title_8" class="dashboard-dashfinancialtitle">
                <span>financial</span>
              </span>
            </div>
          </div>
          <svg
            id="c_dash_user_icon"
            viewBox="0 0 1024 1024"
            class="dashboard-usericon"
          >
            <path
              d="M512 0c282.857 0 512 229.143 512 512 0 281.143-228 512-512 512-283.429 0-512-230.286-512-512 0-282.857 229.143-512 512-512zM865.714 772c53.143-73.143 85.143-162.857 85.143-260 0-241.714-197.143-438.857-438.857-438.857s-438.857 197.143-438.857 438.857c0 97.143 32 186.857 85.143 260 20.571-102.286 70.286-186.857 174.857-186.857 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c104.571 0 154.286 84.571 174.857 186.857zM731.429 402.286c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429z"
            ></path>
          </svg>
        </div>
        <div id="c_dash_main" class="dashboard-main">
          <div id="c_dash_main_left_column" class="dashboard-leftcolumn">
            <div id="c_dash_left_column_dash_a" class="dashboard-dasha"></div>
            <div id="c_dash_left_column_dash_b" class="dashboard-dashb"></div>
            <div id="c_dash_left_column_dash_c" class="dashboard-dashc"></div>
            <div id="c_dash_left_column_dash_d" class="dashboard-dashd"></div>
          </div>
          <div id="c_dash_main_right_column" class="dashboard-rightcolumn">
            <div id="c_dash_right_columb_dash_e" class="dashboard-dashe"></div>
            <div id="c_dash_right_columb_dash_f" class="dashboard-dashf"></div>
            <div id="c_dash_right_columb_dash_g" class="dashboard-dashg"></div>
            <div id="c_dash_right_columb_dash_h" class="dashboard-dashh"></div>
          </div>
          <h1 class="dashboard-text6"><span>dashboard</span></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  metaInfo: {
    title: 'dashboard - dEDI Icn',
    meta: [
      {
        property: 'og:title',
        content: 'dashboard - dEDI Icn',
      },
    ],
  },
}
</script>

<style scoped>
.dashboard-container {
  width: fit-content;
  height: fit-content;
  display: flex;
  z-index: 100;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.dashboard-container1 {
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
.dashboard-body {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: #ffffff;
}
.dashboard-footer {
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
}
.dashboard-footerlogo {
  top: auto;
  left: 1%;
  right: auto;
  bottom: 0px;
  height: 100%;
  position: absolute;
  object-fit: cover;
}
.dashboard-copyright {
  top: auto;
  right: 1%;
  bottom: 30%;
  position: absolute;
}
.dashboard-header {
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
.dashboard-logo {
  height: 100%;
  object-fit: cover;
}
.dashboard-sidebar {
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
.dashboard-menu {
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
.dashboard-navlink {
  display: contents;
}
.dashboard-dashdashlink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: center;
  margin-top: 1%;
  flex-direction: column;
  text-decoration: none;
}
.dashboard-dashdashicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.dashboard-dashdashtitle {
  color: #b3b0b0;
  align-self: center;
}
.dashboard-dashworkinglink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  margin-top: 1%;
  flex-direction: column;
}
.dashboard-dashworkingicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.dashboard-dashworkingtitle {
  color: #b3b0b0;
  align-self: center;
}
.dashboard-navlink1 {
  display: contents;
}
.dashboard-dashformslink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  margin-top: 1%;
  flex-direction: column;
  text-decoration: none;
}
.dashboard-dashformsicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.dashboard-dashformstitle {
  color: #b3b0b0;
  align-self: center;
}
.dashboard-navlink2 {
  display: contents;
}
.dashboard-dashmsgslink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  margin-top: 1%;
  flex-direction: column;
  text-decoration: none;
}
.dashboard-dashmsgsicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.dashboard-dashmsgstitle {
  color: #b3b0b0;
  align-self: center;
}
.dashboard-dashpartnerslink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  margin-top: 1%;
  flex-direction: column;
}
.dashboard-dashpartnersicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.dashboard-dashpartnerstitle {
  color: #b3b0b0;
  align-self: center;
}
.dashboard-dashtrackinglink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
}
.dashboard-dashtrackingicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.dashboard-dashtrackingtitle {
  color: #b3b0b0;
  align-self: center;
}
.dashboard-dashinventorylink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
}
.dashboard-dashinventoryicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.dashboard-dashinventorytitle {
  color: #b3b0b0;
  align-self: center;
}
.dashboard-dashfinanciallink {
  flex: 0 0 auto;
  width: 99%;
  height: 12%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
}
.dashboard-dashfinancialicon {
  fill: #b3b0b0;
  width: 35%;
  align-self: center;
}
.dashboard-dashfinancialtitle {
  color: #b3b0b0;
  align-self: center;
}
.dashboard-usericon {
  top: 2%;
  fill: #b3b0b0;
  width: 30%;
  margin: auto;
  position: absolute;
  align-self: center;
}
.dashboard-main {
  top: 10%;
  flex: 0 0 auto;
  left: 13%;
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
.dashboard-leftcolumn {
  flex: 0 0 auto;
  width: 50%;
  height: 99%;
  display: flex;
  align-self: flex-end;
  padding-top: 7%;
  flex-direction: column;
}
.dashboard-dasha {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 25%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.dashboard-dashb {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 25%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.dashboard-dashc {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 25%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.dashboard-dashd {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 25%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.dashboard-rightcolumn {
  flex: 0 0 auto;
  width: 50%;
  height: 99%;
  display: flex;
  align-self: flex-end;
  padding-top: 7%;
  flex-direction: column;
}
.dashboard-dashe {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 25%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: column;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.dashboard-dashf {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 25%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: column;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.dashboard-dashg {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 25%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: column;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.dashboard-dashh {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 25%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  flex-direction: column;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.dashboard-text6 {
  top: 2%;
  left: 2%;
  color: #b3b0b0;
  bottom: auto;
  position: absolute;
}
@media(max-width: 991px) {
  .dashboard-container1 {
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
  .dashboard-body {
    width: 100%;
    height: 100%;
    position: relative;
    margin-left: 0px;
    margin-right: 0px;
    background-color: #ffffff;
  }
  .dashboard-footer {
    top: auto;
    left: 0px;
    right: 0px;
    width: 100%;
    bottom: 1%;
    height: 5%;
    position: absolute;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .dashboard-footerlogo {
    top: auto;
    left: 1%;
    right: auto;
    width: auto;
    bottom: 0px;
    height: 100%;
    position: absolute;
  }
  .dashboard-copyright {
    top: auto;
    right: 1%;
    bottom: 30%;
    position: absolute;
  }
  .dashboard-header {
    top: autp;
    left: auto;
    right: auto;
    width: 100%;
    bottom: auto;
    height: 10%;
    position: absolute;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .dashboard-logo {
    top: auto;
    left: auto;
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
  .dashboard-sidebar {
    top: 0px;
    left: 0px;
    right: auto;
    width: 10%;
    bottom: auto;
    height: 94%;
    position: absolute;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .dashboard-menu {
    top: 11%;
    left: auto;
    right: 0px;
    width: 100%;
    bottom: auto;
    height: 50%;
    position: absolute;
    align-items: flex-start;
  }
  .dashboard-dashdashlink {
    width: 99%;
    height: 12%;
    align-self: flex-start;
    margin-top: 1%;
  }
  .dashboard-dashdashicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashdashtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashworkinglink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashworkingicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
    margin-top: 1%;
  }
  .dashboard-dashworkingtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashformslink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashformsicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
    margin-top: 1%;
  }
  .dashboard-dashformstitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashmsgslink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashmsgsicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
    margin-top: 1%;
  }
  .dashboard-dashmsgstitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashpartnerslink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashpartnersicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
    margin-top: 1%;
  }
  .dashboard-dashpartnerstitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashtrackinglink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashtrackingicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
  }
  .dashboard-dashtrackingtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashinventorylink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashinventoryicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
  }
  .dashboard-dashinventorytitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashfinanciallink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashfinancialicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    align-self: center;
    margin-top: 1%;
  }
  .dashboard-dashfinancialtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-usericon {
    top: 1%;
    left: 30%;
    width: 50%;
    height: auto;
  }
  .dashboard-main {
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
  .dashboard-leftcolumn {
    width: 50%;
    height: 90%;
    align-self: flex-end;
    padding-top: 5%;
  }
  .dashboard-dasha {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashb {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashc {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashd {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-rightcolumn {
    width: 50%;
    height: 90%;
    align-self: flex-end;
    padding-top: 5%;
  }
  .dashboard-dashe {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashf {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashg {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashh {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-text6 {
    left: 1%;
  }
}
@media(max-width: 767px) {
  .dashboard-container1 {
    height: 100%;
  }
  .dashboard-body {
    height: 1002px;
    position: relative;
  }
  .dashboard-footer {
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
  .dashboard-footerlogo {
    top: auto;
    left: 1%;
    right: auto;
    width: auto;
    bottom: 0px;
    height: 100%;
    position: absolute;
  }
  .dashboard-copyright {
    top: auto;
    right: 1%;
    bottom: 30%;
    margin: auto;
    position: absolute;
  }
  .dashboard-header {
    top: auto;
    left: auto;
    right: auto;
    width: 99%;
    bottom: auto;
    height: 10%;
    position: absolute;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .dashboard-logo {
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
  .dashboard-sidebar {
    top: 0px;
    left: 0px;
    right: auto;
    width: 15%;
    bottom: auto;
    height: 94%;
    position: absolute;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .dashboard-menu {
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
  .dashboard-dashdashlink {
    width: 99%;
    height: 12%;
    align-self: flex-start;
    margin-top: 1%;
  }
  .dashboard-dashdashicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashdashtitle {
    align-self: center;
  }
  .dashboard-dashworkinglink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashworkingicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashworkingtitle {
    align-self: center;
  }
  .dashboard-dashformslink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashformsicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashformstitle {
    align-self: center;
  }
  .dashboard-dashmsgslink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashmsgsicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashmsgstitle {
    align-self: center;
  }
  .dashboard-dashpartnerslink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashpartnersicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashpartnerstitle {
    align-self: center;
  }
  .dashboard-dashtrackinglink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashtrackingicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashtrackingtitle {
    align-self: center;
  }
  .dashboard-dashinventorylink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashinventoryicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashinventorytitle {
    align-self: center;
  }
  .dashboard-dashfinanciallink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashfinancialicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashfinancialtitle {
    align-self: center;
  }
  .dashboard-usericon {
    top: 1%;
    left: 20%;
    width: 50%;
    height: auto;
    position: absolute;
    align-self: center;
  }
  .dashboard-main {
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
  .dashboard-leftcolumn {
    width: 50%;
    height: 100%;
  }
  .dashboard-dasha {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashb {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashc {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashd {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-rightcolumn {
    width: 50%;
    height: 100%;
  }
  .dashboard-dashe {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashf {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashg {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashh {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
}
@media(max-width: 479px) {
  .dashboard-body {
    height: 1002px;
    position: relative;
    border-top-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
  }
  .dashboard-footer {
    width: 100%;
    height: 5%;
    position: relative;
    align-self: flex-end;
    flex-direction: column;
    justify-content: flex-end;
  }
  .dashboard-footerlogo {
    top: auto;
    left: 1%;
    right: auto;
    width: auto;
    bottom: 0px;
    height: 100%;
    position: absolute;
  }
  .dashboard-copyright {
    top: auto;
    right: 1%;
    bottom: 16px;
    position: absolute;
  }
  .dashboard-header {
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
  .dashboard-logo {
    top: auto;
    right: 15%;
    width: auto;
    bottom: 0px;
    height: 100%;
    margin: auto;
    position: absolute;
  }
  .dashboard-sidebar {
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
  .dashboard-menu {
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
  .dashboard-dashdashlink {
    width: 99%;
    height: 12%;
    align-self: flex-start;
  }
  .dashboard-dashdashicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashdashtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashworkinglink {
    width: 99%;
    height: 12%;
    align-self: center;
  }
  .dashboard-dashworkingicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashworkingtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashformslink {
    width: 99%;
    height: 12%;
    align-self: center;
  }
  .dashboard-dashformsicon {
    fill: #b3b0b0;
    width: 30%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashformstitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashmsgslink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashmsgsicon {
    fill: #b3b0b0;
    width: 40%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashmsgstitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashpartnerslink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashpartnersicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashpartnerstitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashtrackinglink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashtrackingicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashtrackingtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashinventorylink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashinventoryicon {
    fill: #b3b0b0;
    width: 40%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashinventorytitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-dashfinanciallink {
    width: 99%;
    height: 12%;
  }
  .dashboard-dashfinancialicon {
    fill: #b3b0b0;
    width: 35%;
    height: auto;
    position: static;
    align-self: center;
  }
  .dashboard-dashfinancialtitle {
    color: #b3b0b0;
    align-self: center;
  }
  .dashboard-usericon {
    width: 50%;
    height: auto;
    position: static;
    align-self: center;
    margin-top: 25%;
  }
  .dashboard-main {
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
  .dashboard-leftcolumn {
    width: 50%;
    height: 100%;
  }
  .dashboard-dasha {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashb {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashc {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashd {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-rightcolumn {
    width: 50%;
    height: 100%;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .dashboard-dashe {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashf {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashg {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
  .dashboard-dashh {
    width: 100%;
    height: 25%;
    box-shadow: 5px 5px 10px 0px #d4d4d4;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
}
</style>
