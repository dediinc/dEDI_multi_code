<template>
  <div class="component5-container">
    <img :alt="image_alt" :src="image_src" class="component5-image" />
  </div>
</template>

<script>
export default {
  name: 'Component5',
  props: {
    image_src: {
      type: String,
      default: '/playground_assets/dedi_logo_trans-1000h.png',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.component5-container {
  width: 100%;
  height: 10%;
  display: flex;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.component5-image {
  height: 80%;
  object-fit: cover;
}
</style>
