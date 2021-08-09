<template>
  <div class="component11-container">
    <svg viewBox="0 0 1024 1024" class="component11-icon">
      <path
        d="M726 726v-172h84v256h-512v128l-170-170 170-170v128h428zM298 298v172h-84v-256h512v-128l170 170-170 170v-128h-428z"
      ></path>
    </svg>
    <a
      :href="link_dashboard"
      target="_blank"
      rel="noreferrer noopener"
      class="component11-dashboard thqLink"
    >
      <span>Working</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Component11',
  props: {
    link_dashboard: {
      type: String,
      default: 'https://example.com',
    },
  },
}
</script>

<style scoped>
.component11-container {
  width: 98%;
  height: 73px;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.component11-icon {
  width: 24px;
  height: 24px;
}
.component11-dashboard {
  top: 5%;
  left: auto;
  color: #b3b0b0;
  right: auto;
  bottom: auto;
  position: absolute;
  font-size: 120%;
  align-self: center;
  font-style: normal;
  text-align: left;
  font-family: Noto Sans;
  font-weight: 400;
}
@media(max-width: 479px) {
  .component11-container {
    height: 7%;
  }
  .component11-icon {
    fill: #b3b0b0;
    width: 60%;
    height: auto;
  }
  .component11-dashboard {
    top: auto;
    font-size: 50%;
    font-style: normal;
    margin-top: 60%;
    font-weight: 700;
    letter-spacing: 100%;
  }
}
</style>
