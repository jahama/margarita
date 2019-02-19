<style scoped lang="scss" src="./ButtonInput.scss"></style>

<template>
  <component
    :is="tag"
    :class="getClasses"
    :href="href"
    class="button-input"
    :aria-label="ariaLabel"
    @click="onClick"
  >
    <span>
      <slot />
    </span>
  </component>
</template>

<script>
import IconBase from '../../Components/Icons/IconBase'

const AVAILABLE_TYPES = [ 'primary', 'secondary', 'gradient', 'no-background' ]

export default {
  name: 'ButtonInput',

  components: {
    IconBase
  },

  data () {
    return {
      slotIsAnIconOnly: !this.$slots.default[0].text && !this.$slots.default[1]
    }
  },

  props: {
    href: {
      type: String,
      default: null
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
    getClasses () {
      return {
        'button-input--rounded': this.rounded,
        [`button-input--${this.type}`]: this.type,
        'button-input--icon-only': this.slotIsAnIconOnly
      }
    },

    ariaLabel () {
      if (this.slotIsAnIconOnly) {
        return this.$slots.default[0].componentOptions.propsData.icon
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
