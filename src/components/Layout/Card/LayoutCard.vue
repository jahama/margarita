<style lang="scss" src="./LayoutCard.scss"></style>

<template>
  <div
    :class="getClasses"
    class="layout-card"
  >
    <slot/>
  </div>
</template>

<script>
export default {

  props: {
    gray: {
      type: Boolean,
      default: false
    },

    hasMarginTop: {
      type: Boolean,
      default: false
    },

    white: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getClasses () {
      const classes = []

      if (this.hasMarginTop) classes.push('layout-card--has-margin-top')
      if (this.gray) classes.push('layout-card--gray')
      if (this.white) classes.push('layout-card--white')

      return classes
    }
  }
}
</script>
