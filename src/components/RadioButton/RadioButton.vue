<style scoped lang="scss" src="./RadioButton.scss"></style>

<template>
  <label class="radio-button">
    <input
      :id="id"
      v-model="model"
      :value="label"
      :disabled="disabled"
      class="radio-button__input"
      type="radio"
      v-bind="$attrs"
    />
    <span class="radio-button__indicator" />
    <span class="radio-button__description">
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
    id: {
      type: String,
      default: uuid,
    },

    label: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    checked: {
      type: [String, Object, Number, Boolean],
      default: '',
    },
  },

  computed: {
    model: {
      get() {
        return this.checked
      },

      set() {
        if (this.disabled) return false

        this.$emit('change', this.label)
      },
    },
  },
}
</script>
