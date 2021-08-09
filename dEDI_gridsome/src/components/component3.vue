<template>
  <div class="component3-container">
    <svg viewBox="0 0 1024 1024" class="component3-icon">
      <path
        d="M832 64h-640l-192 192v672c0 17.674 14.326 32 32 32h960c17.672 0 32-14.326 32-32v-672l-192-192zM512 832l-320-256h192v-192h256v192h192l-320 256zM154.51 192l64-64h586.978l64 64h-714.978z"
      ></path>
    </svg>
    <a
      :href="link_dashboard"
      target="_blank"
      rel="noreferrer noopener"
      class="component3-dashboard thqLink"
    >
      <span>received</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Component3',
  props: {
    link_dashboard: {
      type: String,
      default: 'https://example.com',
    },
  },
}
</script>

<style scoped>
.component3-container {
  top: 20%;
  left: 0px;
  right: 0px;
  width: 98%;
  bottom: 0px;
  height: 8%;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.component3-icon {
  top: auto;
  fill: #b3b0b0;
  left: auto;
  right: auto;
  width: 20%;
  bottom: auto;
  position: absolute;
  margin-top: 1%;
}
.component3-dashboard {
  top: 50%;
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
@media(max-width: 991px) {
  .component3-icon {
    fill: #b3b0b0;
    width: 4%;
    height: auto;
  }
}
@media(max-width: 767px) {
  .component3-icon {
    fill: #b3b0b0;
    width: 6%;
    height: auto;
  }
}
@media(max-width: 479px) {
  .component3-icon {
    fill: #b3b0b0;
    width: 7%;
    height: auto;
  }
}
</style>
