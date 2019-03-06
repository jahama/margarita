<style scoped lang="scss" src="./ButtonInput.scss"></style>

<template>
  <component
    :is="tag"
    :class="getClasses"
    class="button-input"
    :disabled="loading || disabled"
    @click="onClick"
  >
    <span>
      <slot v-if="!loading || !rounded" />
      <ButtonInputSpinner v-if="loading" />
    </span>
  </component>
</template>

<script>
import IconBase from '../../Components/Icons/IconBase'
import ButtonInputSpinner from './components/ButtonInputSpinner'

const AVAILABLE_CATEGORIES = [ 'primary', 'secondary', 'gradient', 'no-background' ]

export default {
  name: 'ButtonInput',

  components: {
    IconBase,
    ButtonInputSpinner
  },

  props: {
    fluid: {
      type: Boolean,
      default: false
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

    disabled: {
      type: Boolean,
      default: false
    },

    category: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return AVAILABLE_CATEGORIES.indexOf(value) !== -1
      }
    }
  },

  computed: {
    getClasses () {
      return {
        'button-input--rounded': this.rounded,
        [`button-input--${this.category}`]: this.category,
        'button-input--fluid': this.fluid,
        'button-input--loading': this.loading
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
