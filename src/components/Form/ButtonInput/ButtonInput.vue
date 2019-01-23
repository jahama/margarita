<style scoped lang="scss" src="./ButtonInput.scss"></style>

<template>
  <button
    :is="tag"
    :class="getClasses"
    :href="href"
    :role="getRole"
    class="button-input"
    @click="onClick"
  >
    <template v-if="text">
      {{ text }}
    </template>
    <IconBase
      v-if="icon"
      :width="iconSize"
      :height="iconSize"
      :icon="icon"
      :title="iconAlt"
    />
  </button>
</template>

<script>
import IconBase from '../../Components/Icons/IconBase'

const AVAILABLE_TYPES = [ 'primary', 'secondary', 'gradient', 'no-background' ]

export default {
  name: 'ButtonInput',

  components: {
    IconBase
  },

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

    icon: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      required: false,
      default: ''
    },

    rounded: {
      type: Boolean,
      default: false
    },

    iconAlt: {
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
    },

    iconSize: {
      type: Number,
      default: 18
    }
  },

  computed: {
    getRole () {
      if (this.tag === 'a') return 'link'

      return 'button'
    },

    getClasses () {
      return {
        'button-input--rounded': this.rounded,
        'button-input--has-text': this.text,
        [`button-input--${this.type}`]: this.type
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
