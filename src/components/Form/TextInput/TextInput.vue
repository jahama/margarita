<style scoped lang="scss" src="./TextInput.scss"></style>

<template>
  <div class="text-input">
    <label
      class="text-input__label"
      :for="id"
      v-text="label"
    />
    <input
      :id="id"
      v-model="lazyValue"
      class="text-input__field"
      :class="getComputedClass"
      :disabled="disabled"
      :type="type"
      @blur="emit"
      @change="emit"
      @input="emit"
      @keyup.enter="removeFocus"
    >
    <div
      v-if="hasError"
      class="text-input__error-message"
      v-text="errorMessage"
    />
  </div>
</template>

<script>
const INPUT_CLASSES = {
  hasError: 'text-input__field--error'
}

export default {
  name: 'TextInput',

  props: {
    disabled: Boolean,

    errorMessage: {
      type: String,
      default: 'Error message'
    },

    id: {
      type: String,
      default: () => `id_${new Date().getTime()}`
    },

    hasError: Boolean,

    label: {
      type: String,
      required: true
    },

    mask: {
      type: Function,
      default: () => {}
    },

    type: {
      type: String,
      default: 'text'
    },

    value: {
      type: [ String, Number ],
      default: ''
    }
  },

  data () {
    return {
      lazyValue: this.value
    }
  },

  computed: {
    getComputedClass () {
      const propKeys = Object.keys(INPUT_CLASSES)

      return propKeys
        .filter(this._filterByExistProp)
        .map(this._getClassNameByProp)
    }
  },

  watch: {
    value (newValue) {
      this.lazyValue = newValue
    }
  },

  methods: {
    emit (e) {
      this.$emit(e.type, this.lazyValue)
    },

    removeFocus () {
      this.$el.querySelector('input').blur()
    },

    _filterByExistProp (className) {
      return !!this[className]
    },

    _getClassNameByProp (className) {
      return INPUT_CLASSES[className]
    }
  }
}
</script>
