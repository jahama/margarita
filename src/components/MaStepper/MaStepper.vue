<template>
  <ma-stack :space="space" class="ma-stepper" :class="[numberSize, numberTone]">
    <slot />
  </ma-stack>
</template>

<script>
import { breakpointsEnum, spacing } from '../../tokens'
import { responsivePropValidator } from '@margarita/utils/responsivePropValidator'
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

    /**
     * Sets the space gap between steps.
     *
     * If an array is passed, values will target the design system breakpoints.
     * ```ts
     * // This would apply medium on all the different breakpoints
     * space = 'small'
     * // This would apply none on mobile, small on tablet and large on desktop
     * :space="['none', 'small', 'large']"
     * ```
     *
     * [Spacing tokens documentation](https://holaluz.github.io/margarita/?path=/story/tokens-spacing--page)
     * @values none, xsmall, small, medium, large, xlarge, 2x-large, 3x-large, 4x-large, 5x-large, 6x-large
     */
    space: {
      type: [Array, String],
      default: 'large',
      validator: responsivePropValidator(Object.keys(spacing)),
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
