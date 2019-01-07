<style scoped lang="scss" src="./ButtonInput.scss"></style>

<template>
  <button
    :is="tag"
    :class="`button-input--${ type }`"
    :href="href"
    :role="getRole"
    class="button-input"
    @click="onClick"
  >
    <template v-if="text">
      {{ text }}
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
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
      required: false,
      default: ''
    },

    type: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return AVAILABLE_TYPES.indexOf(value) !== -1
      }
    }
  },

  computed: {
    getRole () {
      if (this.tag === 'a') return 'link'

      return 'button'
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
