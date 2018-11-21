<style scoped lang="scss" src="./CheckboxInput.scss"></style>

<template>
  <div class="checkbox-input">
    <label
      class="checkbox-input__label"
      :for="id"
    >
      {{ label }}
      <input
        :id="id"
        v-model="isChecked"
        type="checkbox"
        class="checkbox-input__field"
        :checked="checked"
        :disabled="disabled"
      >
      <span class="checkmark-box" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxInput',

  props: {
    checked: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    id: {
      type: String,
      default: 'id'
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
