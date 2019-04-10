<style lang="scss" src="./ToolsHeader.scss" scoped></style>

<template>
  <div>
    <div class="tools-header">
      <header class="tools-header__toolbar">
        <div class="tools-header__section">
          <the-burger
            :is-close="burgerState"
            tools-header
            @click="toggleBurgerState"
          />
          <icon-base
            icon="Logo"
            view-box-width="70"
            :width="77"
            :height="20"
            :icon-color="getLogoColor"
            class="tools-header__logo"
          />
        </div>
        <div class="tools-header__section">
          <h3
            class="tools-header__page-title"
            v-text="pageTitle"
          />
        </div>
        <div class="tools-header__section">
          <user-actions
            :logged-user="loggedUser"
            :user-role="userRole"
            @logout="emitLogoutEvent"
          />
        </div>
      </header>
    </div>
    <transition name="horizontal-slide-animation-left">
      <tools-navbar
        v-if="burgerState"
        :logged-user="loggedUser"
        :active="active"
        :links="links"
        @logout="emitLogoutEvent"
      />
    </transition>
  </div>
</template>

<script>
import IconBase from '@margarita/components/Components/IconBase'
import TheBurger from '../common/TheBurger'
import ToolsNavbar from './components/ToolsNavbar'
import UserActions from './components/UserActions'

export default {
  name: 'ToolsHeader',

  components: {
    ToolsNavbar,
    TheBurger,
    UserActions,
    IconBase,
  },

  props: {
    links: {
      type: Array,
      default: () => [],
    },

    loggedUser: {
      default: '',
      type: String,
    },

    pageTitle: {
      default: '',
      type: String,
    },

    userRole: {
      default: '',
      type: String,
    },

    active: {
      type: String,
      default: '',
    },
  },

  data () {
    return {
      burgerState: false,
    }
  },

  methods: {
    toggleBurgerState () {
      this.burgerState = !this.burgerState
    },

    emitLogoutEvent () {
      this.$emit('logout')
    },
  },

  computed: {
    getLogoColor () {
      if (this.burgerState) return 'url(#Gradient)'

      return 'white'
    },
  },
}
</script>
