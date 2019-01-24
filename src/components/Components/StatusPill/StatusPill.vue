<style scoped lang="scss" src="./StatusPill.scss"></style>

<template>
  <div>
    <div
      :class="getClasses"
      class="status-pill"
      v-text="text"
    />
  </div>
</template>

<script>
const AVAILABLE_COLORS = [
  'green',
  'orange',
  'red',
  'gray',
  'dark'
]

export default {
  name: 'StatusPill',

  props: {
    color: {
      type: String,
      default: 'green',
      validator: function (value) {
        return AVAILABLE_COLORS.indexOf(value) !== -1
      }
    },

    text: {
      type: String,
      default: ''
    }
  },

  computed: {
    getClasses () {
      const classes = []

      classes.push(`status-pill--${this.color}`)

      return classes
    }
  }
}
</script>
