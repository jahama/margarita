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

<style lang="scss" src="./MContainer.scss"></style>
