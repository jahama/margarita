<style lang="scss" src="./TheBurger.scss"></style>

<template>
  <div
    class="btn-burger"
    :class="getComputedClass"
    @click="onClick"
  >
    <div class="burger-bar--1"></div>
    <div class="burger-bar--2"></div>
    <div class="burger-bar--3"></div>
  </div>
</template>

<script>
export default {

  name: 'TheBurger',

  props: {
    isClose: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getComputedClass () {
      const classes = []

      if (this.isClose) classes.push('btn-burger--close')

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

