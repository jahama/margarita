<style scoped lang="scss" src="./ButtonInput.scss"></style>

<template>
  <button :class="`button-input button-input--${ type }`">{{ text }}</button>
</template>

<script>
  export default {
    name: 'ButtonInput',
    props: {
      text: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'primary'
      }
    }
  }
</script>
