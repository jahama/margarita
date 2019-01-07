<style scoped lang="scss" src="./SelectInput.scss"></style>

<template>
  <div class="select-input">
    <label
      v-if="label"
      :for="id"
      class="select-input__label"
      v-text="label"
    />
    <select
      :id="id"
      v-model="lazyValue"
      :aria-label="ariaLabel"
      :class="computedClass"
      :disabled="disabled"
      class="select-input__field"
      @change="updateModel"
    >
      <option
        v-for="(option, key) in options"
        :key="key"
        :label="option.label"
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
import FormMixin from '../../../mixins/FormMixin'

const AVAILABLE_WEIGHTS = [ '', 'bold', 'semibold', 'medium', 'regular' ]

export default {
  name: 'SelectInput',

  mixins: [ FormMixin ],

  props: {
    ariaLabel: {
      type: String,
      default: ''
    },

    defaultBlank: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    errorMessage: {
      type: String,
      default: ''
    },

    fieldClass: {
      type: String,
      default: ''
    },

    hasError: {
      type: Boolean,
      default: false
    },

    id: {
      type: String,
      default: () => `id_${new Date().getTime()}`
    },

    label: {
      type: String,
      default: ''
    },

    options: {
      type: Array,
      default: () => []
    },

    weight: {
      type: String,
      default: '',
      validator: (value) => !value || AVAILABLE_WEIGHTS.includes(value)
    },

    value: {
      type: [ Boolean, String, Number, Object ],
      default: ''
    }
  },

  computed: {
    computedClass () {
      const classes = []

      if (this.hasError) classes.push('select-input__field--error')
      if (this.weight) classes.push(`select-input__field--${this.weight}`)
      if (this.fieldClass) classes.push(this.fieldClass)

      return classes
    }
  },

  // watch: FormMixin

  mounted () {
    this.setDefaultOption()
  },

  updated () {
    this.setDefaultOption()
  },

  methods: {
    setDefaultOption () {
      if (this.value) return
      if (!this.options[0]) return
      if (this.defaultBlank) return

      const defaultOption = this.options[0]

      if (typeof defaultOption === 'object') {
        this.lazyValue = defaultOption.value
        this.updateModel()
        return
      }

      this.lazyValue = defaultOption
      this.updateModel()
    }

    // updateModel: FormMixin
  }

}
</script>
