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
      v-model="selectedValue"
    >
      <option
        v-for="(option, key) in options"
        :key="key"
        :value="option.value"
      >
        {{ option.text }}
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
  name: 'SelectInput',
  props: {
    id: {
      type: String
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
      type: String
    },
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Object, Number, Boolean]
    }
  },
  computed: {
    errorClass () {
      if (this.hasError) return 'select-input__field--error'

      return ''
    },
    selectedValue: {
      get () {
        return this.value
      },
      set (newSelectedValue) {
        this.$emit('input', newSelectedValue)
      }
    }
  }
}
</script>
