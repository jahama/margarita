<style lang="scss" src="./MaCard.scss"></style>

<template>
  <div v-if="getSpacingClasses.length" :class="getSpacingClasses">
    <div :class="getColorClass" class="ma-card">
      <slot />
    </div>
  </div>
  <div v-else :class="getColorClass" class="ma-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ma-card',

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
      return `card--${this.color}`
    },

    getSpacingClasses() {
      const spacingClasses = []

      if (this.hasPaddingTop) spacingClasses.push('card--has-padding-top')

      return spacingClasses
    },
  },
}
</script>
