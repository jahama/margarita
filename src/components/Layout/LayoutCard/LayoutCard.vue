<style lang="scss" src="./LayoutCard.scss"></style>

<template>
  <div
    v-if="getMarginClasses.length"
    :class="getMarginClasses"
  >
    <div
      :class="getColorClasses"
      class="layout-card"
    >
      <slot/>
    </div>
  </div>
  <div
    v-else
    :class="getColorClasses"
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
    getColorClasses () {
      const colorClasses = []

      if (this.color === 'gray') colorClasses.push('layout-card--gray')
      if (this.color === 'white') colorClasses.push('layout-card--white')

      return colorClasses
    },

    getMarginClasses () {
      const marginClasses = []

      if (this.hasMarginTop) marginClasses.push('layout-card--has-margin-top')

      return marginClasses
    }
  }
}
</script>
