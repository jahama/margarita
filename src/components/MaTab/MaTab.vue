<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MaTab',

  props: {
    title: {
      type: String,
      default: 'Tab',
    },
  },

  data() {
    return {
      isActive: false,
    }
  },
}
</script>
