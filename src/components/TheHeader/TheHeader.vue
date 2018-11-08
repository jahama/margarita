<style lang="scss" src="./TheHeader.scss" scoped></style>

<template>
  <header class="header">
    <grid-container fluid>
      <grid-row>
        <grid-column class="grid-col--6">
          <div class="header__logo">
            <the-burger @click="onClickBurger" />
            <a
              href="https://www.holaluz.com"
              class="header-logo__image"
            ></a>
          </div>
        </grid-column>
        <grid-column class="grid-col--6">
          <button-input
            tag="a"
            href="https://alta.holaluz.com/es/"
            text="Contratar"
            type="gradient"
          />
        </grid-column>
      </grid-row>
    </grid-container>
  </header>
</template>

<script>
import GridContainer from '../Grid/GridContainer/GridContainer'
import GridRow from '../Grid/GridRow/GridRow'
import GridColumn from '../Grid/GridColumn/GridColumn'

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
    GridContainer,
    GridRow,
    GridColumn,
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
