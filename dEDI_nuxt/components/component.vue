<template>
  <div class="component-container">
    <img :alt="image_alt" :src="image_src" class="component-image" />
  </div>
</template>

<script>
export default {
  name: 'AppComponent',
  props: {
    image_src: {
      type: String,
      default: '8e884838-5948-499c-b7b6-16fe6fe575a7',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.component-container {
  width: 100%;
  height: 490px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.component-image {
  top: var(--dl-space-space-tripleunit);
  left: var(--dl-space-space-tripleunit);
  width: 50px;
  bottom: auto;
  position: absolute;
  object-fit: cover;
}
</style>
