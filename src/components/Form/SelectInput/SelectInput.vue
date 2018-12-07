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
      @change="$emit('input', selectedValue)"
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
      default: ''
    },

    options: {
      type: Array,
      default: () => []
    },

    value: {
      type: [ String, Number ],
      default: ''
    }
  },

  mounted () {
    if (!this.value) {
      this.setDefaultOption()
      this.$emit('input', this.selectedValue)
    }
  },

  data () {
    return {
      selectedValue: this.value
    }
  },

  computed: {
    errorClass () {
      if (this.hasError) return 'select-input__field--error'

      return ''
    }
  },

  methods: {
    setDefaultOption () {
      const defaultOption = this.options[0]

      if (typeof defaultOption === 'object') {
        this.selectedValue = defaultOption.value
        return
      }

      this.selectedValue = defaultOption
    }
  }
}
</script>
