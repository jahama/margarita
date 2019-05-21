<style scoped lang="scss" src="./RadioButton.scss"></style>

<template>
  <div class="radio-button__group">
    <label
      v-for="(item, key) in items"
      :key="key"
      :for="`${item.value}-${uuid}`"
      class="radio-button"
    >
      <input
        :id="`${item.value}-${uuid}`"
        v-model="selectedValue"
        :disabled="disabled"
        :value="item.value"
        class="radio-button__input radio-button__control"
        type="radio"
        @change="emit"
      >
      <span class="radio-button__indicator" />
      <span
        class="radio-button__description"
        v-text="item.text"
      />
    </label>
  </div>
</template>

<script>
import uuid from '@margarita/utils/uuid'

export default {
  name: 'RadioButton',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    items: {
      type: Array,
      default: () => [],
    },

    value: {
      type: [ String, Object, Number, Boolean ],
      default: '',
    },
  },

  computed: {
    selectedValue: {
      get () {
        return this.value
      },

      set (newSelectedValue) {
        this.$emit('input', newSelectedValue)
      },
    },

    uuid () {
      return uuid()
    },
  },

  methods: {
    emit (e) {
      // TODO: Try if in bonasera works with change event
      this.$emit(e.type, e.target.value)
    },
  },

}
</script>
