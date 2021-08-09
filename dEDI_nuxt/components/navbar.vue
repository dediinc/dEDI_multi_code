<template>
  <nav id="sidebar" class="navbar-container" v-bind:class="rootClassName">
    <span id="dash_link" class="navbar-text">{{ text }}</span>
    <span id="sent_link" class="navbar-text1">{{ text1 }}</span>
    <span id="recv_link" class="navbar-text2">{{ text2 }}</span>
    <span id="forms_link" class="navbar-text3">{{ text3 }}</span>
    <span id="msg_link" class="navbar-text4">{{ text4 }}</span>
    <span id="partners_link" class="navbar-text5">{{ text5 }}</span>
    <span id="tracking_link" class="navbar-text6">{{ text6 }}</span>
    <span id="inventory_link" class="navbar-text7">{{ text7 }}</span>
    <span id="financial_link" class="navbar-text8">{{ text8 }}</span>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    text7: {
      type: String,
      default: 'Inventory',
    },
    text: {
      type: String,
      default: 'Dashboard',
    },
    text3: {
      type: String,
      default: 'Forms',
    },
    text4: {
      type: String,
      default: 'Messaging',
    },
    text2: {
      type: String,
      default: 'Received',
    },
    text1: {
      type: String,
      default: 'Sent',
    },
    text6: {
      type: String,
      default: 'Tracking',
    },
    text8: {
      type: String,
      default: 'Financial',
    },
    rootClassName: String,
    text5: {
      type: String,
      default: 'Partners',
    },
  },
}
</script>

<style scoped>
.navbar-container {
  width: 189px;
  height: 328px;
  display: flex;
  align-self: flex-start;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  margin-left: var(--dl-space-space-doubleunit);
  padding-top: 2rem;
  padding-left: 0px;
  flex-direction: column;
  justify-content: flex-start;
}
.navbar-text {
  color: rgba(18, 18, 18, 0.37);
  font-size: 20px;
  align-self: flex-start;
  font-family: Fira Sans;
  padding-left: var(--dl-space-space-tripleunit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: underline;
}
.navbar-text1 {
  color: rgba(18, 18, 18, 0.37);
  font-size: 20px;
  font-family: Fira Sans;
  padding-left: var(--dl-space-space-tripleunit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: underline;
}
.navbar-text2 {
  color: rgba(18, 18, 18, 0.37);
  font-size: 20px;
  align-self: flex-start;
  font-family: Fira Sans;
  padding-left: var(--dl-space-space-tripleunit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: underline;
}
.navbar-text3 {
  color: rgba(18, 18, 18, 0.37);
  font-size: 20px;
  align-self: flex-start;
  font-family: Fira Sans;
  margin-left: var(--dl-space-space-tripleunit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: underline;
}
.navbar-text4 {
  color: rgba(18, 18, 18, 0.37);
  font-size: 20px;
  align-self: flex-start;
  font-family: Fira Sans;
  padding-left: var(--dl-space-space-tripleunit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: underline;
}
.navbar-text5 {
  color: rgba(18, 18, 18, 0.37);
  font-size: 20px;
  align-self: flex-start;
  font-family: Fira Sans;
  padding-left: var(--dl-space-space-tripleunit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: underline;
}
.navbar-text6 {
  color: rgba(18, 18, 18, 0.37);
  font-size: 20px;
  align-self: flex-start;
  font-family: Fira Sans;
  padding-left: var(--dl-space-space-tripleunit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: underline;
}
.navbar-text7 {
  color: rgba(18, 18, 18, 0.37);
  font-size: 20px;
  align-self: flex-start;
  font-family: Fira Sans;
  padding-left: var(--dl-space-space-tripleunit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: underline;
}
.navbar-text8 {
  color: rgba(18, 18, 18, 0.37);
  font-size: 20px;
  align-self: flex-start;
  font-family: Fira Sans;
  padding-left: var(--dl-space-space-tripleunit);
  padding-bottom: var(--dl-space-space-halfunit);
  text-decoration: underline;
}
</style>
