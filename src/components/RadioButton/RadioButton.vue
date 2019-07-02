<style scoped lang="scss" src="./RadioButton.scss"></style>

<template>
  <label :class="radioButtonClass">
    <input
      :id="id"
      v-model="model"
      :value="value"
      :disabled="disabled"
      class="radio-input visually-hidden"
      type="radio"
      v-bind="$attrs"
    />
    <span class="radio-indicator" />
    <span class="radio-description">
      <slot />
    </span>
  </label>
</template>

<script>
import uuid from '@margarita/utils/uuid'

export default {
  name: 'RadioButton',

  inheritAttrs: false,

  // Per docs: radio buttons use checked property and change event
  // Source: https://vuejs.org/v2/guide/forms.html#Basic-Usage
  model: {
    prop: 'checked',
    event: 'change',
  },

  props: {
    checked: {
      type: [String, Boolean, Number],
      required: true,
    },

    id: {
      type: String,
      default: uuid,
    },

    value: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    card: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    model: {
      get() {
        return this.checked
      },

      set() {
        if (this.disabled) return false

        this.$emit('change', this.value)
      },
    },

    radioButtonClass() {
      return this.card ? 'radio-button-card' : 'radio-button'
    },
  },
}
</script>
