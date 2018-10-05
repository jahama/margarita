<style scoped lang="scss" src="./SelectInput.scss"></style>

<template>
  <div class="select-input">
    <label
      class="select-input__label"
      v-text="label"
      :for="id"
    />
    <select
      class="select-input__field"
      :id="id"
      :class="errorClass"
      :disabled="disabled"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
    <div
      class="select-input__error-message"
      v-if="hasError"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    id: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ''
    },
    hasError: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    errorClass () {
      if (this.hasError) return 'select-input__field--error'

      return ''
    }
  }
}
</script>
