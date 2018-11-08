<style lang="scss" src="./TheHeader.scss"></style>

<template>
  <header class="header">
    <div class="header__logo">
      <the-burger/>
      <a href="https://www.holaluz.com" class="header-logo__image"></a>
    </div>
  </header>
</template>

<script>
import TheBurger from './components/TheBurger/TheBurger'

export default {
  components: {
    TheBurger
  }
}
</script>
