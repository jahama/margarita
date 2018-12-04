<style scoped lang="scss" src="./CheckboxInput.scss"></style>

<template>
  <div class="checkbox-input">
    <label
      :for="id"
      class="checkbox-input__label"
    >
      {{ label }}
      <input
        :id="id"
        v-model="isChecked"
        :checked="checked"
        :disabled="disabled"
        type="checkbox"
        class="checkbox-input__field"
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
      default: () => `id_${new Date().getTime()}`
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
