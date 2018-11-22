<style lang="scss" src="./WebHeader.scss" scoped></style>

<template>
  <header>
    <div class="header">
      <GridContainer>
        <GridRow>
          <GridColumn class="grid-col--12">
            <div class="header__logo">
              <TheBurger
                :is-close="burgerState"
                web-header
                @click="toggleBurgerState"
              />
              <a
                href="https://www.holaluz.com"
                class="header-logo__image"
              />
            </div>
            <div class="header__buttons">
              <ButtonInput
                v-if="!burgerState"
                tag="a"
                href="https://alta.holaluz.com/es/"
                text="Contratar"
                class="button-input--signup"
                type="gradient"
              />
              <ButtonInput
                v-if="!burgerState"
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
            <WebNavbar
              :links="links"
              active="https://www.holaluz.com/empresas/encuentra-tu-tarifa-electrica/"
            />
          </GridColumn>
        </GridRow>
      </GridContainer>
    </div>
    <transition name="slide-animation">
      <div
        v-show="burgerState"
        class="mobile-navigation"
      >
        <div class="mobile-navigation__header">
          <WebMobileLang
            :langs="langs"
            :current-lang="currentLang"
            @change:lang="onClickLangChanged"
          />
        </div>
        <WebMobileNavbar
          v-if="links"
          :links="links"
          active="https://www.holaluz.com/empresas/encuentra-tu-tarifa-electrica/"
        />
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
import WebMobileNavbar from './components/WebMobileNavbar/WebMobileNavbar'
import ButtonInput from '../../Form/ButtonInput/ButtonInput'

export default {

  name: 'WebHeader',

  components: {
    GridContainer,
    GridRow,
    GridColumn,
    TheBurger,
    WebNavbar,
    WebMobileNavbar,
    ButtonInput,
    WebMobileLang
  },

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

  data () {
    return {
      burgerState: false
    }
  },

  methods: {
    onClickLangChanged () {
      this.onLangChanged(...arguments)
    },

    toggleBurgerState () {
      this.burgerState = !this.burgerState
    }
  }

}
</script>
