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
      :class="getComputedClass"
      :disabled="disabled"
      :id="id"
      @blur="emit"
      @change="emit"
      @input="emit"
      @keyup.enter="removeFocus"
      v-model="inputValue"
    />
    <div
      class="text-input__error-message "
      v-if="hasError"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>

  const INPUT_CLASSES = {
    hasError: 'text-input__field--error'
  }

  export default {
    name: 'TextInput',
    props: {
      id: {
        type: String
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
      },
      value: {
        type: [String, Number],
        default: ''
      }
    },
    data () {
      return {
        inputValue: this.value
      }
    },
    computed: {
      getComputedClass () {
        return Object.keys(INPUT_CLASSES)
          .filter((className) => !!this[className])
          .map((className) => INPUT_CLASSES[className])
      }
    },
    methods: {

      emit (e) {
        this.$emit(e.type, this.inputValue)
      },

      removeFocus () {
        this.$el.querySelector('input').blur()
      }

    }
  }
</script>
