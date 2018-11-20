<style lang="scss" src="./AlertBanner.scss"></style>

<template>
  <div
    :class="getClasses"
    class="alert-banner"
  >
    <span
      v-if="showAlertIcon"
      class="alert-banner__icon"
    />
    <h3
      v-if="alertWithTitle"
      class="alert-banner__title"
      v-text="title"
    />
    <p
      class="alert-banner__text"
      v-text="text"
    />
  </div>
</template>

<script>
const AVAILABLE_SIZES = ['small', 'medium', 'large']
const AVAILABLE_TYPES = ['error', 'info', 'success', 'warning']

export default {
  name: 'AlertBanner',

  props: {
    size: {
      default: 'medium',
      type: String,
      validator: function (value) {
        return AVAILABLE_SIZES.indexOf(value) !== -1
      }
    },

    title: {
      default: '',
      type: String,
      required: false
    },

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
  },

  computed: {
    getClasses () {
      const classes = []

      if (this.alertWithTitle()) {
        classes.push('alert-banner--with-title')
      }
      classes.push(`alert-banner--${this.size}`)
      classes.push(`alert-banner--${this.type}`)

      return classes
    },

    showAlertIcon () {
      return this.type === 'error' && this.size === 'medium'
    }
  },

  methods: {
    alertWithTitle () {
      return this.size === 'large' && this.title !== ''
    },
  }
}
</script>
