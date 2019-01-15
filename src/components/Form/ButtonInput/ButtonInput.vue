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
      <IconBase
        v-if="icon"
        :width="iconSize"
        :height="iconSize"
        :icon="icon"
      />
    </template>
    <template v-else>
      <IconBase
        :width="iconSize"
        :height="iconSize"
        :icon="icon"
      />
    </template>
  </button>
</template>

<script>
import IconBase from '../../Components/Icons/IconBase'

const AVAILABLE_TYPES = [ 'primary', 'secondary', 'gradient', 'no-background' ]
const AVAILABLE_ICONS = [ 'DownloadContract', 'DetailsContract', 'AddContract', 'Arrow', 'ArrowToEnd', 'Exit' ]

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
      default: '',
      validator: function (value) {
        if (!value) return true
        return AVAILABLE_ICONS.includes(value)
      }
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
      const classes = []

      if (this.rounded) classes.push('button-input--rounded')
      if (this.type) classes.push(`button-input--${this.type}`)
      if (this.text) classes.push(`button-input--has-text`)

      return classes
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
