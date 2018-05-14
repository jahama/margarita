<template lang="pug">
  .m-container(:class="getComputedClasses")
    slot
</template>

<script>
export default {
  name: 'm-container',

  props: {
    fluid: Boolean
  },

  computed: {
    getComputedClasses () {
      return {
        'm-container--fluid': this.fluid
      }
    }
  }
}
</script>

<style lang="scss">
.m-container {
  display: flex;
  min-width: 992px;
  max-width: 992px;
}
.m-container--fluid {
  max-width: 100vw;
}
</style>
