<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${viewBoxWidth} 18`"
    class="icon-base"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
    >
      {{ title ? title : iconName }}
    </title>
    <g :fill="iconColor">
      <Component :is="componentLoader" />
    </g>
  </svg>
</template>

<script>
const AVAILABLE_ICONS = [ 'DownloadContract', 'DetailsContract', 'AddContract', 'Arrow', 'ArrowToEnd', 'Exit', 'Phone', 'Logo' ]

export default {
  props: {
    icon: {
      type: String,
      default: '',
      validator: function (value) {
        if (!value) return true
        return AVAILABLE_ICONS.includes(value)
      }
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
    },
    iconName () {
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
