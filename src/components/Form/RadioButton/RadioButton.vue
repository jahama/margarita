<style scoped lang="scss" src="./RadioButton.scss"></style>

<template>
  <div class="radio-button__group">
      <label
        v-for="item in items"
        class="radio-button"
        :for="item.value"
        :key="item.value"
      >
        <input
          class="radio-button__input radio-button__control"
          type="radio"
          :disabled="disabled"
          :id="item.value"
          :value="item.value"
          @change="emit"
          v-model="selectedValue"
        />
        <span class="radio-button__indicator"></span>
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
      value: {
        type: [ String, Boolean ],
        default: ''
      },
      items: {
        type: Array,
        default: () => []
      }

    },

    data () {
      return {
        selectedValue: this.value
      }
    },

    methods: {
      emit (e) {
        // TODO: Try if in bonasera works with change event
        this.$emit('input', this.selectedValue)
        this.$emit(e.type, this.selectedValue)
      }
    }

  }
</script>
