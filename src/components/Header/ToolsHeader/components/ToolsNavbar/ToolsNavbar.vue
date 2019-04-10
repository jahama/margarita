<style lang="scss" src="./ToolsNavbar.scss" scoped></style>

<template>
  <ul class="tools-navbar">
    <li
      v-for="link in links"
      :key="link.label"
      :class="getActiveLinkClass(link)"
      class="tools-navbar__link"
    >
      <a
        :href="link.link"
        class="tools-navbar__anchor"
        v-text="link.label"
      />
    </li>
    <div class="tools-navbar__mobile">
      <p
        class="tools-navbar__mobile-user"
        v-text="loggedUser"
      />
      <button-input
        aria-label="exit icon"
        category="no-background"
        class="tools-navbar__mobile-icon"
        @click="emitClickEvent"
      >
        <icon-base
          icon="Exit"
          width="16"
          height="16"
        />
      </button-input>
    </div>
  </ul>
</template>

<script>
import ButtonInput from '../../../../Form/ButtonInput/ButtonInput'
import IconBase from '@margarita/components/Components/IconBase'

export default {
  name: 'ToolsNavbar',

  components: {
    IconBase,
    ButtonInput,
  },

  props: {
    loggedUser: {
      type: String,
      default: '',
    },

    links: {
      type: Array,
      default: () => [],
      required: true,
    },

    active: {
      type: String,
      default: '',
    },
  },

  methods: {
    getActiveLinkClass (link) {
      if (!this.active) return
      if (link.link === this.active) return 'active'
    },

    emitClickEvent () {
      this.$emit('logout')
    },
  },
}
</script>
