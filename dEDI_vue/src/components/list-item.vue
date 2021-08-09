<template>
  <div class="list-item-container">
    <svg viewBox="0 0 1024 1024" class="list-item-icon">
      <path
        d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"
      ></path>
    </svg>
    <span class="list-item-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    text: {
      type: String,
      default:
        'We’ll start with simple tasks and quickly get to the advanced concepts',
    },
  },
}
</script>

<style scoped>
.list-item-container {
  display: flex;
  margin-top: 0;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: flex-start;
}
.list-item-icon {
  width: 12px;
  height: 12px;
  margin-top: 2px;
  flex-shrink: 0;
  margin-right: var(--dl-space-space-halfunit);
}
.list-item-text {
  max-width: 600px;
}
</style>
