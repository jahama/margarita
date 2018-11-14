<style lang="scss" src="./LayoutCard.scss"></style>

<template>
  <div
    v-if="getSpacingClasses.length"
    :class="getSpacingClasses"
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
  name: 'LayoutCard',

  props: {
    hasPaddingTop: {
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

    getSpacingClasses () {
      const spacingClasses = []

      if (this.hasPaddingTop) spacingClasses.push('layout-card--has-padding-top')

      return spacingClasses
    }
  }
}
</script>
