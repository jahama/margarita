<style scoped lang="scss" src="./IconButton.scss"></style>

<template>
  <button
    :is="tag"
    :class="getClasses"
    :href="href"
    :role="getRole"
    class="icon-button"
    @click="onClick"
  >
    <img
      :src="`icons/${icon}.svg`"
      :alt="iconAlt"
    >
  </button>
</template>

<script>
const AVAILABLE_TYPES = [ 'primary', 'secondary' ]
const AVAILABLE_ICONS = [ 'icon-telephone-white', 'download-pink-icon' ]

export default {
  name: 'IconButton',

  props: {
    href: {
      type: String,
      default: '',
      required: false
    },

    tag: {
      type: String,
      default: 'button'
    },

    icon: {
      type: String,
      required: false,
      default: '',
      validator: function (value) {
        if (!value) return true
        return AVAILABLE_ICONS.includes(value)
      }
    },

    rounded: {
      type: Boolean,
      default: false
    },

    iconAlt: {
      type: String,
      required: false,
      default: ''
    },

    type: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return AVAILABLE_TYPES.includes(value)
      }
    }
  },

  computed: {
    getRole () {
      if (this.tag === 'a') return 'link'

      return 'button'
    },

    getClasses () {
      const classes = []

      if (this.rounded) classes.push('icon-button--rounded')
      if (this.type) classes.push(`icon-button--${this.type}`)

      return classes
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
