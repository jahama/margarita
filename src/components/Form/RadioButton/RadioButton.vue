<style scoped lang="scss" src="./RadioButton.scss"></style>

<template>
  <label
    class="radio-button"
    :for="id"
  >
    <input
      type="radio"
      class="radio-button__input radio-button__control"
      :id="id"
      :disabled="disabled"
      :name="name"
      :value="id"
      v-model="isSelected"
    >
    <span class="radio-button__indicator"></span>
    <span class="radio-button__description">
      {{ text }}
    </span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'RadioButton',
  props: {
    id: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Boolean],
      default: ''
    }
  },
  computed: {
    isSelected: {
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
