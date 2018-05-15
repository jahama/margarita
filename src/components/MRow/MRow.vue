<template lang="pug">
  .m-row(:class="getComputedClasses")
    slot
</template>

<script>
export default {
  name: 'm-row',

  props: {
    noGutters: Boolean
  },

  computed: {
    getComputedClasses () {
      return {
        'm-row--no-gutters': this.noGutters
      }
    }
  }
}
</script>

<style lang="scss" src="./MRow.scss"></style>
