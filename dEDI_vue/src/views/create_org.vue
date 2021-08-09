<template>
  <div class="create_org-container">
    <div id="org_container" class="create_org-container1">
      <div id="org_body" class="create_org-body">
        <div id="org_footer" class="create_org-footer">
          <span id="org_footer_copy" class="create_org-copyright">
            © 2021 dEDI Incorporated
          </span>
          <img
            id="org_footer_logo"
            alt="image"
            src="/playground_assets/dedi_logo_trans-1000h.png"
            class="create_org-image"
          />
        </div>
        <div id="org_header" class="create_org-header">
          <img
            id="org_header_logo"
            alt="dEDI logo"
            src="/playground_assets/dedi_logo_trans-1000h.png"
            class="create_org-logo"
          />
        </div>
        <div id="org_main" class="create_org-main">
          <div id="org_form_container" class="create_org-userformcontainer">
            <div id="org_form" class="create_org-userform">
              <input
                type="email"
                id="org_email_input"
                name="Email"
                required="true"
                placeholder="Email"
                autocomplete="off"
                class="create_org-emailinpute thqTextInput"
              />
              <input
                type="password"
                id="create_org_password"
                name="Password"
                required="true"
                placeholder="Password"
                autocomplete="off"
                class="create_org-passwordinput thqTextInput"
              />
              <input
                type="text"
                id="create_org_number"
                name="Org ID"
                required="true"
                autofocus="true"
                placeholder="Organization ID"
                autocomplete="off"
                class="create_org-organizationidinput thqTextInput"
              />
            </div>
            <button id="org_form_button" class="create_org-button thqButton">
              submit
            </button>
            <h1 id="org_form_header" class="create_org-text">
              Create New Organization
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateOrg',
  metaInfo: {
    title: 'create_org - dEDI Icn',
    meta: [
      {
        property: 'og:title',
        content: 'create_org - dEDI Icn',
      },
    ],
  },
}
</script>

<style scoped>
.create_org-container {
  width: fit-content;
  height: fit-content;
  display: flex;
  z-index: 100;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.create_org-container1 {
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
.create_org-body {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: #f5f5f5;
}
.create_org-footer {
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
.create_org-copyright {
  top: auto;
  right: 1%;
  bottom: 30%;
  position: absolute;
}
.create_org-image {
  width: 100px;
  object-fit: cover;
}
.create_org-header {
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
.create_org-logo {
  height: 100%;
  object-fit: cover;
}
.create_org-main {
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
.create_org-userformcontainer {
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
.create_org-userform {
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
.create_org-emailinpute {
  width: 85%;
  font-size: 22px;
  margin-top: 0px;
  border-style: inset;
  border-bottom-width: 1px;
}
.create_org-passwordinput {
  width: 85%;
  font-size: 22px;
  margin-top: 3rem;
  border-style: inset;
  border-bottom-width: 1px;
}
.create_org-organizationidinput {
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
.create_org-button {
  width: 35%;
  height: 5%;
  margin-top: 20%;
  text-align: center;
  background-color: #d8d8d8;
}
.create_org-text {
  top: 0px;
  color: #b3b0b0;
  margin: auto;
  position: absolute;
  font-style: normal;
  font-family: Noto Sans;
  font-weight: 400;
}
@media(max-width: 991px) {
  .create_org-container1 {
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
  .create_org-body {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #f5f5f5;
  }
  .create_org-footer {
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
  .create_org-copyright {
    top: auto;
    right: 1%;
    bottom: 30%;
    position: absolute;
  }
  .create_org-header {
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
  .create_org-logo {
    width: auto;
    height: 100%;
  }
  .create_org-main {
    top: 11%;
    left: 13%;
    right: auto;
    width: 80%;
    bottom: auto;
    height: 83%;
    position: absolute;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .create_org-userformcontainer {
    align-items: center;
    justify-content: center;
  }
  .create_org-button {
    margin-top: 20%;
    background-color: #d8d8d8;
  }
}
@media(max-width: 767px) {
  .create_org-container {
    align-items: center;
    justify-content: flex-start;
  }
  .create_org-container1 {
    justify-content: center;
  }
  .create_org-body {
    height: 100%;
    position: relative;
  }
  .create_org-footer {
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
  .create_org-copyright {
    top: auto;
    right: 1%;
    bottom: 30%;
    margin: auto;
    position: absolute;
  }
  .create_org-header {
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
  .create_org-logo {
    width: auto;
    height: 100%;
  }
  .create_org-main {
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
@media(max-width: 479px) {
  .create_org-body {
    height: 1002px;
    position: relative;
    border-top-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
  }
  .create_org-footer {
    width: 100%;
    height: 5%;
    position: relative;
    align-self: flex-end;
    flex-direction: column;
    justify-content: flex-end;
  }
  .create_org-copyright {
    top: auto;
    right: 1%;
    bottom: 16px;
    position: absolute;
  }
  .create_org-header {
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
  .create_org-logo {
    top: auto;
    right: 15%;
    width: auto;
    bottom: 0px;
    height: 100%;
    margin: auto;
    position: absolute;
  }
  .create_org-main {
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
