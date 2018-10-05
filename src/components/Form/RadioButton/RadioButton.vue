<style scoped lang="scss" src="./RadioButton.scss"></style>

<template>
  <label for="Prepago" class="radio-button">
    <input :id="id" :name="id" type="radio" class="radio-button__input radio-button__control">
    <span class="radio-button__indicator"></span>
    <span class="radio-button__description">
      {{ text }}
    </span>
    <span class="radio-button__description radio-button__description--subtitle">
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
    }
  },
  computed: {

  }
}
</script>
