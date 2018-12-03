<style lang="scss" src="./ToolsHeader.scss" scoped></style>

<template>
<div>
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
  </div>
  <transition name="horizontal-slide-animation">
    <ToolsNavbar
      v-if="burgerState"
      :active="active"
      :links="links"
    />
  </transition>
</div>
</template>

<script>
import ToolsNavbar from './components/ToolsNavbar/ToolsNavbar.vue'
import TheBurger from '../common/TheBurger/TheBurger.vue'
import UserActions from './components/UserActions/UserActions.vue'

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
    },

    active: {
      type: String,
      default: ''
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
