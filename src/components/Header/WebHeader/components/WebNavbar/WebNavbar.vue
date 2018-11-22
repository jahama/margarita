<style lang="scss" src="./WebNavbar.scss" scoped></style>

<template>
  <ul class="navbar">
    <li
      class="navbar__link"
      v-for="link in links"
      :key="link.label"
    >
      <a
        class="navbar__anchor"
        :class="getActiveLabelClass(link)"
        :href="link.link"
        v-text="link.label
      "/>
      <ul
        class="navbar__dropdown"
        v-if="link.items"
      >
        <li
          class="dropdown__item"
          v-for="item in link.items"
          :key="item.label"
        >
          <a
            class="dropdown__anchor"
            :class="getActiveLinkClass(item.link)"
            :href="item.link"
            v-text="item.label"
          />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'WebNavbar',

  props: {
    links: {
      type: Array,
      required: true
    },
    active: {
      type: String
    }
  },

  methods: {
    getActiveLinkClass (link) {
      if (!this.active) return
      if (link === this.active) return 'active'
    },

    getActiveLabelClass (link) {
      if (!this.active) return

      if (this._hasActiveLink(link)) return 'active'
    },

    _hasActiveLink (link) {
      if (!link.items) return

      if (link.link === this.active) return 'active'
      return link.items.find((item) => item.link === this.active)
    }
  }
}
</script>
