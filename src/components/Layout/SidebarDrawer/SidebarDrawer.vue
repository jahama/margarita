<style lang="scss" src="./SidebarDrawer.scss" scoped></style>

<template>
  <transition :name="slideDirection">
    <div
      v-if="show"
      class="sidebar-drawer"
      :class="computeClass"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
const SLIDE_DIRECTIONS = [ 'left', 'right' ]
const DRAWER_TYPES = [ 'attached', 'fixed' ]

export default {
  name: 'SidebarDrawer',

  props: {
    type: {
      type: String,
      default: 'attached',
      validator: value => DRAWER_TYPES.includes(value)
    },

    position: {
      type: String,
      default: 'left',
      validator: value => SLIDE_DIRECTIONS.includes(value)
    },

    shadow: {
      type: Boolean,
      default: true
    },

    show: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    slideDirection () {
      return `horizontal-slide-animation-${this.position}`
    },

    computeClass () {
      return {
        [`sidebar-drawer--${this.position}`]: this.position,
        [`sidebar-drawer--${this.type}`]: this.type,
        'sidebar-drawer--shadow': this.shadow
      }
    }
  }
}
</script>
