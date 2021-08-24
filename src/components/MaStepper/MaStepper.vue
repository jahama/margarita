<template>
  <ma-stack space="large" class="ma-stepper" :class="[numberSize, numberTone]">
    <slot />
  </ma-stack>
</template>

<script>
import { breakpointsEnum } from '../../tokens'
/**
 * Renders a stepper component following the Design System guidelines
 *
 * [Component's API documentation](https://holaluz.github.io/margarita/?path=/story/components-stepper--stepper)
 */
export default {
  name: 'MaStepper',

  props: {
    /**
     * Sets the size of the number
     * @values small, large
     */
    size: {
      type: String,
      default: 'large',
      validator: (val) => ['small', 'large'].includes(val),
    },

    /**
     * Sets the number and line elements color tone
     * @values pink, white
     */
    tone: {
      type: String,
      default: 'pink',
      validator: (val) => ['pink', 'white'].includes(val),
    },
  },

  computed: {
    calculatedSize() {
      if (
        this.size === 'large' &&
        this.$layout.currentBreakpoint === breakpointsEnum.mobile
      ) {
        return 'small'
      }
      return this.size
    },

    numberSize() {
      return `ma-stepper-number-${this.calculatedSize}`
    },

    numberTone() {
      return `ma-stepper-${this.tone}`
    },
  },
}
</script>

<style src="./MaStepper.css"></style>
