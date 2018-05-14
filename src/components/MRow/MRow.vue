<template lang="pug">
  .m-row
    slot
</template>

<script>
export default {
  name: 'm-row'
}
</script>

<style lang="scss">
.m-row {
  display: flex;
  flex: 0 0 100%;
}
</style>
