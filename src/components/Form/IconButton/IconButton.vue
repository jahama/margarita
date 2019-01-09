<style scoped lang="scss" src="./IconButton.scss"></style>

<template>
  <button
    :is="tag"
    :class="`button-input--${ type }`"
    :href="href"
    :role="getRole"
    class="button-input"
    @click="onClick"
  >
    <img
      :src="`icons/${icon}.svg`"
      :alt="iconAlt"
    >
  </button>
</template>

<script>
const AVAILABLE_TYPES = [ 'primary', 'secondary', 'gradient' ]
const AVAILABLE_ICONS = [ 'icon-telephone-white' ]

export default {
  name: 'ButtonInput',

  props: {

    icon: {
      type: String,
      required: false,
      default: '',
      validator: function (value) {
        if (!value) return true
        return AVAILABLE_ICONS.includes(value)
      }
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
        return AVAILABLE_TYPES.indexOf(value) !== -1
      }
    }
  },

  computed: {
    getRole () {
      if (this.tag === 'a') return 'link'

      return 'button'
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
