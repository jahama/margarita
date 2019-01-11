<style scoped lang="scss" src="./IconButton.scss"></style>

<template>
  <button
    :is="tag"
    :class="getClasses"
    :href="href"
    :role="getRole"
    class="icon-button"
    @click="onClick"
  >
    <IconBase
      :width="getSize"
      :height="getSize"
      :icon-name="`${icon}-icon`"
    >
      <Component :is="componentLoader" />
    </IconBase>
  </button>
</template>

<script>
import IconBase from '../../Components/Icons/IconBase'

const AVAILABLE_TYPES = [ 'primary', 'secondary', 'no-background' ]
const AVAILABLE_ICONS = [ 'DownloadContract', 'DetailsContract', 'AddContract', 'Arrow', 'ArrowToEnd', 'Exit' ]

export default {
  name: 'IconButton',

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
      required: false,
      default: '',
      validator: function (value) {
        if (!value) return true
        return AVAILABLE_ICONS.includes(value)
      }
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
        return AVAILABLE_TYPES.includes(value)
      }
    },

    size: {
      type: Number,
      default: 50
    }
  },

  computed: {
    getRole () {
      if (this.tag === 'a') return 'link'

      return 'button'
    },

    getClasses () {
      const classes = []

      if (this.rounded) classes.push('icon-button--rounded')
      if (this.type) classes.push(`icon-button--${this.type}`)

      return classes
    },

    getSize () {
      if (this.type !== 'no-background') return this.size - 24

      return this.size
    },

    componentLoader () {
      return () => import(`../../Components/Icons/Icons/${this.icon}.vue`)
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
