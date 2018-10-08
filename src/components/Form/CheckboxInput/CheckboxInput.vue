<style scoped lang="scss" src="./CheckboxInput.scss"></style>

<template>
  <div class="checkbox-input">
    <label
      class="checkbox-input__label"
      :for="id"
    >
      {{ label }}
      <input
        type="checkbox"
        class="checkbox-input__field"
        :id="id"
        :checked="checked"
        :disabled="disabled"
      >
      <span class="checkmark-box"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxInput',
  props: {
    id: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>
