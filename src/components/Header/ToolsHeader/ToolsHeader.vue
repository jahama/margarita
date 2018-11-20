<style lang="scss" src="./ToolsHeader.scss" scoped></style>

<template>
  <div class="tools-header">
    <header class="tools-header__toolbar">
      <TheBurger/>
      <div>a</div>
      <div>b</div>
    </header>
    <nav class="tools-header__navbar">
    </nav>
  </div>
</template>

<script>
import TheBurger from '../common/TheBurger/TheBurger'

export default {
  name: 'ToolsHeader',

  components: {
    TheBurger
  },
}
</script>
