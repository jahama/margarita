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
        v-model="isChecked"
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
      type: String
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
  },

  computed: {
    isChecked: {
      get () {
        return this.checked
      },

      set (checkedValue) {
        this.$emit('input', checkedValue)
      }
    }
  }
}
</script>
