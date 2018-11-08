<style lang="scss" src="./TheHeader.scss"></style>

<template>
  <header class="header">
    <div class="header__logo">
      <the-burger @click="onClickBurger" />
      <a
        href="https://www.holaluz.com"
        class="header-logo__image"
      ></a>
    </div>
    <button-input
      tag="a"
      href="https://alta.holaluz.com/es/"
      text="Contratar"
      type="gradient"
    />
  </header>
</template>

<script>
import TheBurger from './components/TheBurger/TheBurger'
import ButtonInput from '../Form/ButtonInput/ButtonInput'

export default {

  name: 'TheHeader',

  data () {
    return {
      opened: false
    }
  },

  components: {
    TheBurger,
    ButtonInput
  },

  methods: {
    onClickBurger () {
      this.opened = true
    }
  }

}
</script>
