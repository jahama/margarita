<style scoped lang="scss" src="./ButtonInput.scss"></style>

<template>
  <button
    :class="`button-input--${ type }`"
    class="button-input"
    v-text="text"
    @click="onClick"
  />
</template>

<script>
  const AVAILABLE_TYPES = ['primary', 'secondary', 'gradient']
  export default {
    name: 'ButtonInput',
    props: {
      text: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'primary',
        validator: function (value) {
          return AVAILABLE_TYPES.indexOf(value) !== -1
        }
      }
    },
    methods: {
      onClick () {
        this.$emit('click');
      }
    }
  }
</script>
