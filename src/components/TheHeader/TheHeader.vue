<style lang="scss" src="./TheHeader.scss" scoped></style>

<template>
  <header class="header">
    <grid-container>
      <grid-row>
        <grid-column class="grid-col--12">
          <div class="header__logo">
            <the-burger @click="opened = true" />
            <a
              href="https://www.holaluz.com"
              class="header-logo__image"
            ></a>
          </div>
          <div class="header__buttons">
            <button-input
              tag="a"
              href="https://clientes.holaluz.com/es/login"
              text="Zona Cliente"
              class="button-input--client-zone"
              type="secondary"
            />
            <button-input
              tag="a"
              href="https://alta.holaluz.com/es/"
              text="Contratar"
              class="button-input--signup"
              type="gradient"
            />
          </div>
        </grid-column>
      </grid-row>
    </grid-container>
  <transition name="slide-animation">
    <div class="mobile-navigation" v-show="opened">
      <div class="mobile-navigation__header">
        <mobile-lang
          :langs="langs"
          :currentLang="currentLang"
        />
        <the-burger
          isClose
          @click="opened = false"
        />
      </div>
      <ul>
        <li>Holi</li>
        <li>Ke ase</li>
        <li>Po nah</li>
        <li>I tu</li>
      </ul>
    </div>
  </transition>
</header>
</template>

<script>
import GridContainer from '../Grid/GridContainer/GridContainer'
import GridRow from '../Grid/GridRow/GridRow'
import GridColumn from '../Grid/GridColumn/GridColumn'

import TheBurger from './components/TheBurger/TheBurger'
import MobileLang from './components/MobileLang/MobileLang'
import ButtonInput from '../Form/ButtonInput/ButtonInput'

export default {

  name: 'TheHeader',

  props: {
    langs: {
      type: Array,
      default: () => [ 'es', 'ca', 'en' ]
    },
    currentLang: {
      type: String,
      default: 'es'
    }
  },

  components: {
    GridContainer,
    GridRow,
    GridColumn,
    TheBurger,
    ButtonInput,
    MobileLang
  },

  data () {
    return {
      opened: false
    }
  }

}
</script>
