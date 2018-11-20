<style scoped lang="scss" src="./RadioButton.scss"></style>

<template>
  <div class="radio-button__group">
    <label
      v-for="(item, key) in items"
      :for="key"
      :key="key"
      class="radio-button"
    >
      <input
        :disabled="disabled"
        :id="key"
        :value="item.value"
        v-model="selectedValue"
        class="radio-button__input radio-button__control"
        type="radio"
        @change="emit"
      >
      <span class="radio-button__indicator"/>
      <span
        class="radio-button__description"
        v-text="item.text"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    items: {
      type: Array,
      default: () => []
    },

    value: {
      type: [String, Object, Number, Boolean],
      default: ''
    }
  },

  computed: {
    selectedValue: {
      get () {
        return this.value
      },

      set (newSelectedValue) {
        this.$emit('input', newSelectedValue)
      }
    }
  },

  methods: {
    emit (e) {
      // TODO: Try if in bonasera works with change event
      this.$emit(e.type, e.target.value)
    }
  }

}
</script>
