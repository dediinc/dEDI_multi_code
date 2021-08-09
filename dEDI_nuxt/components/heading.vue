<template>
  <div class="heading-container">
    <img
      alt="image"
      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket.teleporthq.io_/03d14fbb1e2aa53317ceb7d1e6be7560"
      class="heading-image"
    />
    <h1 class="heading-text heading">{{ heading1 }}</h1>
    <span class="heading-text1 subheading">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    heading1: {
      type: String,
      default: 'Heading',
    },
    text: {
      type: String,
      default:
        'Let’s walk through this tutorial together to get you ready for building your next projects',
    },
  },
}
</script>

<style scoped>
.heading-container {
  display: flex;
  max-width: 600px;
  margin-top: var(--dl-space-space-tripleunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-doubleunit);
  flex-direction: column;
  justify-content: flex-start;
}
.heading-image {
  width: 150px;
  object-fit: cover;
  margin-bottom: var(--dl-space-space-doubleunit);
}
.heading-text {
  width: 100%;
  text-align: left;
  margin-bottom: var(--dl-space-space-halfunit);
}
.heading-text1 {
  text-align: left;
}
</style>
