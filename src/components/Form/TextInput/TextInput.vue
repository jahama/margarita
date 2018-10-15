<style scoped lang="scss" src="./TextInput.scss"></style>

<template>
  <div class="text-input">
    <label
      class="text-input__label"
      :for="id"
      v-text="label"
    />
    <input
      class="text-input__field"
      :class="getComputedClass"
      :disabled="disabled"
      :id="id"
      :type="type"
      @blur="onBlur"
      @change="emit"
      @input="onInput"
      @keyup.enter="removeFocus"
      v-model="lazyValue"
    />
    <div
      class="text-input__error-message"
      v-if="hasError"
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
      id: String,
      label: {
        type: String,
        required: true
      },
      value: [ String, Number ],
      hasError: Boolean,
      disabled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      mask: Function,
      validate: Function,
      errorMessage: String,
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
    methods: {

      emit (e) {
        this.$emit(e.type, this.lazyValue)
      },

      removeFocus () {
        this.$el.querySelector('input').blur()
      },

      onBlur (e) {
        if (this.validator) {
          // TODO: Create validator behavior if invalid
        }

        this.emit(e)
      },

      onInput (e) {
        if (this.mask) this._applyMask(e)

        this.emit(e)
      },

      _applyMask (e) {
        const inputEl = this.$el.querySelector('input')
        const position = inputEl.selectionStart
        this.lazyValue = this.mask(this.lazyValue) || ''

        this.$nextTick(() => {
          inputEl.value = this.lazyValue
          this._setCaretPosition(inputEl, position, e)
        })
      },

      _filterByExistProp (className) {
        return !!this[className]
      },

      _getClassNameByProp (className) {
        return INPUT_CLASSES[className]
      },

      _setCaretPosition (inputEl, position, e) {
        const isDelete = e.inputType === 'deleteContentBackward'
        const caretPos = (isDelete) ? position : position - 1

        if (this.lazyValue.charAt(caretPos) === ' ') {
          if (!isDelete) position++
        }

        inputEl.setSelectionRange(position, position)
      }

    },

    watch: {
      value (value) {
        this.lazyValue = value
      }
    }
  }
</script>
