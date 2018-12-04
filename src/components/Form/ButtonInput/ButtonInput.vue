<style scoped lang="scss" src="./ButtonInput.scss"></style>

<template>
  <button
    :is="tag"
    :class="`button-input--${ type }`"
    :href="href"
    class="button-input"
    @click="onClick"
    v-text="text"
  />
</template>

<script>
const AVAILABLE_TYPES = [ 'primary', 'secondary', 'gradient' ]

export default {
  name: 'ButtonInput',

  props: {
    href: {
      type: String,
      default: '',
      required: false
    },

    tag: {
      type: String,
      default: 'button'
    },

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
      this.$emit('click')
    }
  }
}
</script>
