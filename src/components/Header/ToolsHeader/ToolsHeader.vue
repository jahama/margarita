<style lang="scss" src="./ToolsHeader.scss" scoped></style>

<template>
  <div class="tools-header">
    <header class="tools-header__toolbar">
      <div class="tools-header__section">
        <TheBurger
          :is-close="burgerState"
          tools-header
          @click="toggleBurgerState"
        />
      </div>
      <div class="tools-header__section">
        <h3
          class="tools-header__page-title"
          v-text="pageTitle"
        />
      </div>
      <div class="tools-header__section">
        <UserActions
          :logged-user="loggedUser"
          :user-role="userRole"
          @logout="emitLogoutEvent"
        />
      </div>
    </header>
    <ToolsNavbar
      v-if="burgerState"
      :links="links"
    />
  </div>
</template>

<script>
import ToolsNavbar from './components/ToolsNavbar/ToolsNavbar'
import TheBurger from '../common/TheBurger/TheBurger'
import UserActions from './components/UserActions/UserActions'

export default {
  name: 'ToolsHeader',

  components: {
    ToolsNavbar,
    TheBurger,
    UserActions
  },

  props: {
    links: {
      type: Array,
      default: () => []
    },

    loggedUser: {
      default: '',
      type: String
    },

    pageTitle: {
      default: '',
      type: String
    },

    userRole: {
      default: '',
      type: String
    }
  },

  data () {
    return {
      burgerState: false
    }
  },

  methods: {
    toggleBurgerState () {
      this.burgerState = !this.burgerState
    },

    emitLogoutEvent () {
      this.$emit('logout')
    }
  }
}
</script>
