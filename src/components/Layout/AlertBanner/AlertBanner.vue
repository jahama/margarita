<style lang="scss" src="./AlertBanner.scss"></style>

<template>
  <div class="alert-banner">
    <span class="alert-banner__icon"/>
    <p
      class="alert-banner__text"
      v-text="text"
    />
  </div>
</template>

<script>
const AVAILABLE_TYPES = ['error', 'info', 'success', 'warning']

export default {
  name: 'AlertBanner',

  props: {
    text: {
      type: String,
      required: true
    },

    type: {
      default: 'info',
      type: String,
      validator: function (value) {
        return AVAILABLE_TYPES.indexOf(value) !== -1
      }
    }
  }
}
</script>
