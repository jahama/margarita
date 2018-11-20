<style lang="scss" src="./WebHeader.scss" scoped></style>

<template>
  <header>
    <div class="header">
      <GridContainer>
        <GridRow>
          <GridColumn class="grid-col--12">
            <div class="header__logo">
              <TheBurger @click="opened = true" />
              <a
                href="https://www.holaluz.com"
                class="header-logo__image"
              ></a>
            </div>
            <div class="header__buttons">
              <ButtonInput
                tag="a"
                href="https://alta.holaluz.com/es/"
                text="Contratar"
                class="button-input--signup"
                type="gradient"
              />
              <ButtonInput
                tag="a"
                href="https://clientes.holaluz.com/es/login"
                text="Zona Cliente"
                class="button-input--client-zone"
                type="secondary"
              />
            </div>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </div>
    <div class="navigation">
      <GridContainer>
        <GridRow v-if="links">
          <GridColumn class="grid-col--12">
            <WebNavbar :links="links" />
          </GridColumn>
        </GridRow>
      </GridContainer>
    </div>
    <transition name="slide-animation">
      <div class="mobile-navigation" v-show="opened">
        <div class="mobile-navigation__header">
          <WebMobileLang
            :langs="langs"
            :currentLang="currentLang"
            @change:lang="onClickLangChanged"
          />
          <TheBurger
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
import GridContainer from '../../Grid/GridContainer/GridContainer'
import GridRow from '../../Grid/GridRow/GridRow'
import GridColumn from '../../Grid/GridColumn/GridColumn'

import TheBurger from '../common/TheBurger/TheBurger'
import WebMobileLang from './components/WebMobileLang/WebMobileLang'
import WebNavbar from './components/WebNavbar/WebNavbar'
import ButtonInput from '../../Form/ButtonInput/ButtonInput'

export default {

  name: 'WebHeader',

  props: {
    langs: {
      type: Array,
      default: () => [ 'es', 'ca', 'en' ]
    },

    currentLang: {
      type: String,
      default: 'es'
    },

    onLangChanged: {
      type: Function,
      default: () => {}
    },

    links: {
      type: Array
    }
  },

  components: {
    GridContainer,
    GridRow,
    GridColumn,
    TheBurger,
    WebNavbar,
    ButtonInput,
    WebMobileLang
  },

  data () {
    return {
      opened: false
    }
  },

  methods: {
    onClickLangChanged () {
      this.onLangChanged(...arguments)
    }
  }

}
</script>
