<style lang="scss" src="./TheBurger.scss"></style>

<template>
  <div
    :class="getComputedClass"
    class="btn-burger"
    @click="onClick"
  >
    <div class="burger-bar--1" />
    <div class="burger-bar--2" />
    <div class="burger-bar--3" />
  </div>
</template>

<script>
export default {

  name: 'TheBurger',

  props: {
    isClose: {
      type: Boolean,
      default: false,
    },
    toolsHeader: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    getComputedClass () {
      const classes = []

      if (this.isClose) classes.push('btn-burger--close')
      if (this.toolsHeader) classes.push('btn-burger--tools-header')

      return classes
    },
  },

  methods: {
    onClick () {
      this.$emit('click')
    },
  },

}
</script>
