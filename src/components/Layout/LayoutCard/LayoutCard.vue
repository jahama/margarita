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
    hasMarginTop: {
      type: Boolean,
      default: false
    },

    color: {
      type: String,
      default: 'gray'
    }
  },

  computed: {
    getClasses () {
      const classes = []

      if (this.hasMarginTop) classes.push('layout-card--has-margin-top')
      if (this.color === 'gray') classes.push('layout-card--gray')
      if (this.color === 'white') classes.push('layout-card--white')

      return classes
    }
  }
}
</script>
