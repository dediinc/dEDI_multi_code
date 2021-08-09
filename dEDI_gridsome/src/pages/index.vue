<template>
  <div class="index-container">
    <div id="login_container" class="index-container1">
      <div id="login_body" class="index-body">
        <div id="login_footer" class="index-footer">
          <span id="login_footer_copy" class="index-copyright">
            © 2021 dEDI Incorporated
          </span>
          <img
            id="login_footer_logo"
            alt="image"
            src="/playground_assets/dedi_logo_trans-1000h.png"
            class="index-image"
          />
        </div>
        <div id="login_header" class="index-header">
          <img
            id="login_header_logo"
            alt="dEDI logo"
            src="/playground_assets/dedi_logo_trans-1000h.png"
            class="index-logo"
          />
        </div>
        <div id="login_main" class="index-main">
          <div id="login_form" class="index-container2">
            <input
              type="email"
              id="login_user_id_login"
              name="Username"
              required="true"
              placeholder="Username"
              autocomplete="on"
              class="index-username thqTextInput"
            />
            <input
              type="password"
              id="login_password"
              name="Password"
              required="true"
              placeholder="Password"
              autocomplete="on"
              class="index-password thqTextInput"
            />
            <div id="login_buttons_container" class="index-container3">
              <router-link
                to="/dashboard"
                id="login_login_button"
                name="Login"
                type="submit"
                class="index-loginbutton thqButton thqLink"
              >
                Login
              </router-link>
              <router-link
                to="/create_user"
                id="login_help_button"
                name="Help"
                type="Link"
                class="index-helpbutton thqButton thqLink"
              >
                <span id="login_create_acct">signup</span>
                <br />
              </router-link>
            </div>
            <span id="login_forgot_pass" class="index-text2">
              <span class="index-text3">Forgot Password</span>
            </span>
            <router-link
              to="/create_org"
              id="login_new_org_link"
              class="index-navlink thqLink"
            >
              New Organizatiion Signup
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  metaInfo: {
    title: 'dEDI Icn',
    meta: [
      {
        property: 'og:title',
        content: 'dEDI Icn',
      },
    ],
  },
}
</script>

<style scoped>
.index-container {
  width: fit-content;
  height: fit-content;
  display: flex;
  z-index: 100;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.index-container1 {
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
.index-body {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: #f5f5f5;
}
.index-footer {
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
.index-copyright {
  top: auto;
  right: 1%;
  bottom: 30%;
  position: absolute;
}
.index-image {
  width: 100px;
  object-fit: cover;
}
.index-header {
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
.index-logo {
  height: 100%;
  object-fit: cover;
}
.index-main {
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
.index-container2 {
  width: 40%;
  height: 60%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
}
.index-username {
  width: 90%;
  height: 10%;
  margin-top: 3px;
  border-style: inset;
  border-bottom-width: 1px;
}
.index-password {
  width: 90%;
  height: 10%;
  margin-top: 3rem;
  border-style: inset;
  border-bottom-width: 1px;
}
.index-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: flex-end;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.index-loginbutton {
  width: 35%;
  height: 40%;
  align-self: flex-start;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-tripleunit);
  text-align: center;
  margin-left: 0px;
  border-color: rgba(18, 18, 18, 0.32);
  text-decoration: none;
  background-color: #d8d8d8;
}
.index-helpbutton {
  width: 35%;
  height: 40%;
  align-self: flex-start;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  margin-top: var(--dl-space-space-tripleunit);
  text-align: center;
  margin-left: 0px;
  border-color: rgba(18, 18, 18, 0.32);
  text-decoration: none;
  background-color: #d8d8d8;
}
.index-text2 {
  margin-top: var(--dl-space-space-unit);
}
.index-text3 {
  text-decoration: underline;
}
.index-navlink {
  margin-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-gray-black);
  border-style: solid;
  border-width: 1px;
  text-decoration: none;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
}
@media(max-width: 991px) {
  .index-container1 {
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
  .index-body {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #f5f5f5;
  }
  .index-footer {
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
  .index-copyright {
    top: auto;
    right: 1%;
    bottom: 30%;
    position: absolute;
  }
  .index-header {
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
  .index-logo {
    width: auto;
    height: 100%;
  }
  .index-main {
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
}
@media(max-width: 767px) {
  .index-container {
    align-items: center;
    justify-content: flex-start;
  }
  .index-container1 {
    justify-content: center;
  }
  .index-body {
    height: 100%;
    position: relative;
  }
  .index-footer {
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
  .index-copyright {
    top: auto;
    right: 1%;
    bottom: 30%;
    margin: auto;
    position: absolute;
  }
  .index-header {
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
  .index-logo {
    width: auto;
    height: 100%;
  }
  .index-main {
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
  .index-username {
    width: 100%;
  }
  .index-password {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .index-body {
    height: 1002px;
    position: relative;
    border-top-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
  }
  .index-footer {
    width: 100%;
    height: 5%;
    position: relative;
    align-self: flex-end;
    flex-direction: column;
    justify-content: flex-end;
  }
  .index-copyright {
    top: auto;
    right: 1%;
    bottom: 16px;
    position: absolute;
  }
  .index-header {
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
  .index-logo {
    top: auto;
    right: 15%;
    width: auto;
    bottom: 0px;
    height: 100%;
    margin: auto;
    position: absolute;
  }
  .index-main {
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
</style>
