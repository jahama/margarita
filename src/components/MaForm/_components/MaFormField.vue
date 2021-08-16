<template>
  <ma-text-field
    v-model="model"
    :placeholder="placeholder ? placeholder : label"
    :has-error="!!errorMessage"
    :error-message="errorMessage"
    :label="label"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
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
      isFocused: false,
      hasBeenBlurred: false,
    }
  },
  computed: {
    errorMessages() {
      return this.validators
        .map((validator) => validator(this.model))
        .filter((v) => v)
    },
    hasError() {
      return !!this.errorMessages.length
    },
    errorMessage() {
      if (this.isFocused || !this.hasBeenBlurred || !this.hasError) return ''
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
      this.isFocused = false
    },
    onFocus() {
      this.isFocused = true
    },
  },
}
</script>
