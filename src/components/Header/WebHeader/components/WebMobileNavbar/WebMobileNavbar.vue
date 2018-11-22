<style lang="scss" src="./WebMobileNavbar.scss" scoped></style>

<template>
  <ul class="navbar">
    <li
      v-for="(link, index) in links"
      :key="link.label"
      class="navbar__item"
    >
      <input
        :id="getTabReference(index)"
        class="navbar__checkbox"
        type="checkbox"
        @click="onClickLabel"
      >
      <label
        v-if="link.items"
        :class="getActiveLabelClass(link)"
        :for="getTabReference(index)"
        class="navbar__label"
        v-text="link.label"
      />
      <a
        v-else
        :href="link.link"
        class="navbar__label"
        v-text="link.label"
      />
      <ul
        v-if="link.items"
        class="navbar__dropdown"
      >
        <li class="dropdown__item">
          <a
            :href="link.link"
            class="dropdown__anchor"
            v-text="link.label"
          />
        </li>
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
import WebNavbar from '../WebNavbar/WebNavbar'

export default {
  name: 'WebMobileNavbar',

  extends: WebNavbar,

  mounted () {
    const activeLabel = this.$el.querySelector('.navbar__label.active')

    if (activeLabel) {
      activeLabel.previousElementSibling.checked = true
    }
  },

  methods: {
    getTabReference (index) {
      return `tab${index + 1}`
    },

    onClickLabel (e) {
      const $target = e.target

      this.$el.querySelectorAll('.navbar__checkbox').forEach((item) => {
        if (item === $target) return
        item.checked = false
      })
    }
  }
}
</script>
