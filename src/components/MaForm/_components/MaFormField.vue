<template>
  <component
    :is="component"
    v-model="model"
    v-bind="{ ...$attrs, ...$props }"
    :placeholder="placeholder ? placeholder : label"
    :has-error="!!errorMessage"
    :error-message="errorMessage"
    :label="label"
    @blur="onBlur"
    >{{ label }}</component
  >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator: (v) => ['text', 'radio', 'checkbox', 'select'].includes(v),
      default: 'text',
    },
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    validators: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      hasBeenBlurred: false,
    }
  },
  computed: {
    component() {
      switch (this.type) {
        case 'radio':
          return 'MaOption'
        case 'checkbox':
          return 'MaOption'
        case 'select':
          return 'MaSelect'
      }
      return 'MaTextField'
    },
    errorMessages() {
      return this.validators
        .map((validator) => validator(this.model))
        .filter((v) => v)
    },
    hasError() {
      return !!this.errorMessages.length
    },
    errorMessage() {
      if (!this.hasBeenBlurred || !this.hasError) return ''
      const [errorMessage] = this.errorMessages
      if (this.$t) return this.$t(errorMessage)
      return errorMessage
    },
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
  methods: {
    onBlur() {
      this.hasBeenBlurred = true
    },
  },
}
</script>
