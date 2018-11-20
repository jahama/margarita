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
    color: {
      type: String,
      default: 'gray'
    },

    hasMarginTop: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getClasses () {
      const classes = []

      if (this.hasMarginTop) classes.push('layout-card--has-margin-top')
      classes.push(`layout-card--${this.color}`)

      return classes
    }
  }
}
</script>
