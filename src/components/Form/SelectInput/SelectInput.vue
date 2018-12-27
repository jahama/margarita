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
      :class="errorClass"
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

export default {
  name: 'SelectInput',

  mixins: [ FormMixin ],

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
      type: [ String, Number, Object ],
      default: ''
    }
  },

  computed: {
    errorClass () {
      if (this.hasError) return 'select-input__field--error'

      return ''
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
