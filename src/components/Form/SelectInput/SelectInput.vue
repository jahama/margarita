<style scoped lang="scss" src="./SelectInput.scss"></style>

<template>
  <div class="select-input">
    <label
      :for="id"
      class="select-input__label"
      v-text="label"
    />
    <select
      :id="id"
      v-model="selectedValue"
      :class="errorClass"
      :disabled="disabled"
      class="select-input__field"
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
      v-if="hasError"
      class="select-input__error-message"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectInput',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    errorMessage: {
      type: String,
      default: ''
    },

    id: {
      type: String,
      default: () => `id_${new Date().getTime()}`
    },

    hasError: {
      type: Boolean,
      default: false
    },

    label: {
      type: String,
      default: 'label'
    },

    options: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      value: ''
    }
  },

  computed: {
    errorClass () {
      if (this.hasError) return 'select-input__field--error'

      return ''
    },

    selectedValue: {
      get () {
        if (this.value !== '') return this.value
        if (this.options[0]) {
          this.setInitialValue(this.options[0].value)
          return this.options[0].value
        }
        return ''
      },

      set (newSelectedValue) {
        this.value = newSelectedValue
        this.$emit('input', newSelectedValue)
      }
    }
  },

  methods: {
    setInitialValue: function (initialValue) {
      if (this.value === '') {
        this.value = initialValue
        this.$emit('input', initialValue)
      }
    }
  }
}
</script>
