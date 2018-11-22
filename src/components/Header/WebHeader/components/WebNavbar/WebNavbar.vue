<style lang="scss" src="./WebNavbar.scss" scoped></style>

<template>
  <ul class="navbar">
    <li
      v-for="link in links"
      :key="link.label"
      class="navbar__link"
    >
      <a
        :class="getActiveLabelClass(link)"
        :href="link.link"
        class="navbar__anchor"
        v-text="link.label
        "/>
      <ul
        v-if="link.items"
        class="navbar__dropdown"
      >
        <li
          v-for="item in link.items"
          :key="item.label"
          class="dropdown__item"
        >
          <a
            :class="getActiveLinkClass(item.link)"
            :href="item.link"
            class="dropdown__anchor"
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
