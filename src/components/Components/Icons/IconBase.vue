<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${viewBoxWidth} 18`"
    class="icon-base"
    :aria-labelledby="id"
    role="presentation"
  >
    <title
      :id="id"
    >
      {{ iconName }}
    </title>
    <g :fill="iconColor">
      <Component :is="componentLoader" />
    </g>
  </svg>
</template>

<script>
import uuid from '@/utils/uuid'

const AVAILABLE_ICONS = [
  'AddContract',
  'Arrow',
  'ArrowToEnd',
  'BulbOn',
  'DetailsContract',
  'DownloadContract',
  'Exit',
  'Gas',
  'Logo',
  'Phone'
]

export default {

  name: 'IconBase',

  props: {
    icon: {
      type: String,
      default: '',
      validator: function (value) {
        if (!value) return true
        return AVAILABLE_ICONS.includes(value)
      }
    },

    id: {
      type: String,
      default: uuid
    },

    width: {
      type: [ Number, String ],
      default: 18
    },

    height: {
      type: [ Number, String ],
      default: 18
    },

    viewBoxWidth: {
      type: [ Number, String ],
      default: 18
    },

    iconColor: {
      type: String,
      default: 'currentColor'
    },

    title: {
      type: String,
      default: ''
    }
  },

  computed: {
    componentLoader () {
      if (this.icon) {
        return () => import(/* webpackMode: "eager" */`../../Components/Icons/Icons/${this.icon}.vue`)
      }
      return null
    },

    iconName () {
      if (this.title) return this.title
      return `${this.icon}-icon`
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
