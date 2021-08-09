<template>
  <div class="buttom-container" v-bind:class="rootClassName">
    <button
      id="login_button"
      name="Login"
      type="submit"
      class="buttom-loginbutton thqButton"
    >
      {{ loginbutton }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Buttom',
  props: {
    loginbutton: {
      type: String,
      default: 'Login',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.buttom-container {
  display: flex;
  position: relative;
}
.buttom-loginbutton {
  align-self: flex-start;
  margin-top: var(--dl-space-space-tripleunit);
  margin-left: 0px;
  border-color: rgba(18, 18, 18, 0.32);
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
}
</style>
