<style scoped lang="scss" src="./ButtonInput.scss"></style>

<template>
  <Component
    :is="tag"
    :disabled="loading || disabled"
    :class="[getClasses, 'button-input']"
    data-testid="button-input"
    @click="handleClick"
  >
    <span>
      <slot v-if="!loading || !rounded" />
      <button-input-spinner v-if="loading" />
    </span>
  </Component>
</template>

<script>
import ButtonInputSpinner from './components/ButtonInputSpinner'

const AVAILABLE_CATEGORIES = [ 'primary', 'secondary', 'white', 'gradient', 'no-background' ]

export default {
  name: 'ButtonInput',

  components: {
    ButtonInputSpinner,
  },

  props: {
    fluid: {
      type: Boolean,
      default: false,
    },

    tag: {
      type: String,
      default: 'button',
    },

    rounded: {
      type: Boolean,
      default: false,
    },

    loading: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    category: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return AVAILABLE_CATEGORIES.includes(value)
      },
    },
  },

  computed: {
    getClasses () {
      return {
        'button-input--rounded': this.rounded,
        [`button-input--${this.category}`]: this.category,
        'button-input--fluid': this.fluid,
        'button-input--loading': this.loading,
      }
    },
  },

  methods: {
    handleClick (event) {
      this.$emit('click', event)
    },
  },
}
</script>
