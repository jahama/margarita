<style scoped lang="scss" src="./TextInput.scss"></style>

<template>
  <div class="text-input">
    <label
      class="text-input__label"
      v-text="label"
      :for="id"
    />
    <input
      class="text-input__field"
      :id="id"
      :class="errorClass"
      :disabled="disabled"
    >
    <div
      class="text-input__error-message "
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
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      errorClass () {
        if (this.hasError) return 'text-input__field--error'

        return ''
      }
    }
  }
</script>
