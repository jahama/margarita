<style scoped lang="scss" src="./Checkbox.scss"></style>

<template>
  <label class="checkbox">
    <input
      :id="id"
      v-model="isChecked"
      :checked="checked"
      :disabled="disabled"
      type="checkbox"
      class="checkbox__input"
    />
    <span class="checkbox__description">{{ label }}</span>
    <span class="checkbox__indicator" />
  </label>
</template>

<script>
import uuid from '@margarita/utils/uuid'

export default {
  name: 'ma-checkbox',

  props: {
    checked: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    id: {
      type: String,
      default: uuid,
    },

    label: {
      type: String,
      required: true,
    },
  },

  computed: {
    isChecked: {
      get() {
        return this.checked
      },

      set(checkedValue) {
        this.$emit('input', checkedValue)
      },
    },
  },
}
</script>
