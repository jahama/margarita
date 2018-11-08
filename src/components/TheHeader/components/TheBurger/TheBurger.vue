<style lang="scss" src="./TheBurger.scss"></style>

<template>
  <div class="btn-burger" @click="onClick">
    <div class="burger-bar--1"></div>
    <div class="burger-bar--2"></div>
    <div class="burger-bar--3"></div>
  </div>
</template>

<script>
export default {

  name: 'TheBurger',

  methods: {
    onClick () {
      this.$emit('click')
    }
  }

}
</script>

