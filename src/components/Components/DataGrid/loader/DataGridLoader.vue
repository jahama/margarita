<style lang="scss" src="./DataGridLoader.scss"></style>

<template>
  <span>
    <div
      v-for="index in numberOfLoaders"
      :key="index"
      class="loader"
      :style="`width: ${Math.floor(Math.random() * 51) + 50}%;`"
    />
  </span>
</template>

<script>
export default {
  computed: {
    numberOfLoaders () {
      return Math.floor(Math.random() * 2) + 1
    }
  }
}
</script>
