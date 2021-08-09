<template>
  <div class="component2-container">
    <svg viewBox="0 0 877.7142857142857 1024" class="component2-icon">
      <path
        d="M585.143 292.571v-269.714c8 5.143 14.857 10.286 20.571 16l233.143 233.143c5.714 5.714 10.857 12.571 16 20.571h-269.714zM512 310.857c0 30.286 24.571 54.857 54.857 54.857h310.857v603.429c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h457.143v310.857z"
      ></path>
    </svg>
    <a
      :href="link_dashboard"
      target="_blank"
      rel="noreferrer noopener"
      class="component2-dashboard thqLink"
    >
      <span>forms</span>
      <span></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Component2',
  props: {
    link_dashboard: {
      type: String,
      default: 'https://example.com',
    },
  },
}
</script>

<style scoped>
.component2-container {
  top: 10%;
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
.component2-icon {
  top: auto;
  fill: #b3b0b0;
  left: auto;
  right: auto;
  width: 20%;
  bottom: auto;
  position: absolute;
  margin-top: 1%;
}
.component2-dashboard {
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
  .component2-icon {
    fill: #b3b0b0;
    width: 3%;
    height: auto;
  }
}
@media(max-width: 767px) {
  .component2-icon {
    fill: #b3b0b0;
    width: 5%;
    height: auto;
  }
}
@media(max-width: 479px) {
  .component2-icon {
    fill: #b3b0b0;
    width: 6%;
    height: auto;
  }
}
</style>
