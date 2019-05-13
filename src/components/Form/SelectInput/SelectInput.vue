<style scoped lang="scss" src="./SelectInput.scss"></style>

<template>
  <div class="select-input">
    <label
      :for="id"
      :class="getLabelClass"
      class="select-input__label"
      v-text="label"
    />
    <select
      :id="id"
      v-model="selected"
      v-bind="$attrs"
      :class="computedClass"
      class="select-input__field"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :label="option.label"
        :value="option.value"
        :disabled="isPlaceholder(option.value)"
        v-text="option.text"
      />
    </select>
    <div
      v-if="hasError"
      class="select-input__error-message"
      v-text="errorMessage"
    />
  </div>
</template>

<script>
import uuid from '@margarita/utils/uuid'

const AVAILABLE_WEIGHTS = [ 'bold', 'semibold', 'medium', 'regular' ]

export default {
  inheritAttrs: false,

  name: 'SelectInput',

  model: {
    // By default, `v-model` reacts to the `input` event for updating the
    // value, we change this to `change` for similar behavior as the native
    // `<select>` element.
    event: 'change',
  },

  props: {
    options: {
      type: Array,
      required: true,
    },

    value: {
      type: [ String, Number, Boolean, Object ],
      default: '',
    },

    id: {
      type: String,
      default: uuid,
    },

    label: {
      type: String,
      required: true,
    },

    errorMessage: {
      type: String,
      default: '',
    },

    hasError: {
      type: Boolean,
      default: false,
    },

    fieldClass: {
      type: String,
      default: '',
    },

    weight: {
      type: String,
      default: '',
      validator: value => !value || AVAILABLE_WEIGHTS.includes(value),
    },
  },

  mounted () {
    // By default, SelectInput will not emit a change event on the initial
    // default select of one of the options. If an event is needed on this
    // default select, subscribe to the mount event.
    this.$emit('mount', this.selected)
  },

  computed: {
    // Warning: select will be blank (empty) if `this.value` doesn't find a
    // match in the options list.
    selected: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('change', newVal)
      },
    },

    computedClass () {
      return {
        'select-input__field--error': this.hasError,
        [`select-input__field--${this.weight}`]: this.weight,
        [`${this.fieldClass}`]: this.fieldClass,
      }
    },

    getLabelClass () {
      return {
        'select-input__label--hidden': this.$attrs['aria-label'],
      }
    },
  },

  methods: {
    isPlaceholder (value) {
      return typeof value !== 'boolean' && !value
    },
  },

}
</script>
