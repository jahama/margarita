<style scoped lang="scss" src="./Button.scss"></style>

<template>
  <component
    :is="tag"
    :disabled="loading || disabled"
    :class="[getClasses, 'button']"
    data-testid="button"
    @click="handleClick"
  >
    <span>
      <slot v-if="!loading || !rounded" />
      <button-spinner v-if="loading" />
    </span>
  </component>
</template>

<script>
import ButtonSpinner from './components/ButtonSpinner'

const AVAILABLE_CATEGORIES = [
  'primary',
  'secondary',
  'white',
  'gradient',
  'no-background',
]

export default {
  name: 'ma-button',

  components: {
    ButtonSpinner,
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
      validator: v => AVAILABLE_CATEGORIES.includes(v),
    },
  },

  computed: {
    getClasses() {
      return {
        'button--rounded': this.rounded,
        [`button--${this.category}`]: this.category,
        'button--fluid': this.fluid,
        'button--loading': this.loading,
      }
    },
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
}
</script>
