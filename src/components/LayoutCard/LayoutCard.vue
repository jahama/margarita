<style lang="scss" src="./LayoutCard.scss"></style>

<template>
  <div v-if="getSpacingClasses.length" :class="getSpacingClasses">
    <div :class="getColorClass" class="layout-card">
      <slot />
    </div>
  </div>
  <div v-else :class="getColorClass" class="layout-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayoutCard',

  props: {
    color: {
      type: String,
      default: 'gray',
    },

    hasPaddingTop: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    getColorClass() {
      return `layout-card--${this.color}`
    },

    getSpacingClasses() {
      const spacingClasses = []

      if (this.hasPaddingTop)
        spacingClasses.push('layout-card--has-padding-top')

      return spacingClasses
    },
  },
}
</script>
