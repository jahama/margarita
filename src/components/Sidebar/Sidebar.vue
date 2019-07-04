<style lang="scss" src="./Sidebar.scss" scoped></style>

<template>
  <div>
    <transition :name="slideDirection">
      <aside v-if="show" class="sidebar-drawer" :class="computeClass">
        <slot />
      </aside>
    </transition>
    <div v-if="show" :class="displayOverlay" @click="handleClick" />
  </div>
</template>

<script>
const SLIDE_DIRECTIONS = ['left', 'right']
const DRAWER_TYPES = ['attached', 'fixed']

export default {
  name: 'ma-sidebar',

  props: {
    type: {
      type: String,
      default: 'attached',
      validator: value => DRAWER_TYPES.includes(value),
    },

    position: {
      type: String,
      default: 'left',
      validator: value => SLIDE_DIRECTIONS.includes(value),
    },

    overlay: {
      type: Boolean,
      default: true,
    },

    show: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    slideDirection() {
      return `horizontal-slide-animation-${this.position}`
    },

    computeClass() {
      return {
        [`sidebar-drawer--${this.position}`]: this.position,
        [`sidebar-drawer--${this.type}`]: this.type,
      }
    },

    displayOverlay() {
      return this.overlay && this.type === 'fixed'
        ? 'sidebar-drawer--overlay'
        : ''
    },
  },

  methods: {
    handleClick(event) {
      this.$emit('click-overlay', event)
    },
  },
}
</script>
