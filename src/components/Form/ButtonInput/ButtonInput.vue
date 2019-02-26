<style scoped lang="scss" src="./ButtonInput.scss"></style>

<template>
  <component
    :is="tag"
    :class="getClasses"
    :href="href"
    class="button-input"
    :aria-label="ariaLabel"
    @click="onClick"
  >
    <span>
      <slot />
      <SpinnerButton v-if="loading" />
    </span>
  </component>
</template>

<script>
import IconBase from '../../Components/Icons/IconBase'
import SpinnerButton from './components/SpinnerButton'

const AVAILABLE_TYPES = [ 'primary', 'secondary', 'gradient', 'no-background' ]

export default {
  name: 'ButtonInput',

  components: {
    IconBase,
    SpinnerButton
  },

  props: {
    ariaLabel: {
      type: String,
      default: null
    },

    fluid: {
      type: Boolean,
      default: false
    },

    href: {
      type: String,
      default: null
    },

    tag: {
      type: String,
      default: 'button'
    },

    rounded: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
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
    getClasses () {
      return {
        'button-input--rounded': this.rounded,
        [`button-input--${this.type}`]: this.type,
        'button-input--fluid': this.fluid
      }
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
