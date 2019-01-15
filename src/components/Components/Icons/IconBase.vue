<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    class="icon-base"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <Component :is="componentLoader" />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'box'
    },
    width: {
      type: [ Number, String ],
      default: 18
    },
    height: {
      type: [ Number, String ],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
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
