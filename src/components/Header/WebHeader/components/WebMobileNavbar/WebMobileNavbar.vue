<style lang="scss" src="./WebMobileNavbar.scss" scoped></style>

<template>
  <ul class="navbar">
    <li
      class="navbar__item"
      v-for="(link, index) in links"
      :key="link.label"
    >
      <input
        class="navbar__checkbox"
        type="checkbox"
        @click="onClickLabel"
        :id="getTabReference(index)"
      >
      <label
        class="navbar__label"
        :class="getActiveLabelClass(link)"
        v-text="link.label"
        :for="getTabReference(index)"
        v-if="link.items"
      />
      <a class="navbar__label" v-else :href="link.link" v-text="link.label"></a>
      <ul
        class="navbar__dropdown"
        v-if="link.items"
      >
        <li class="dropdown__item">
          <a
            class="dropdown__anchor"
            :href="link.link"
            v-text="link.label"
          />
        </li>
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
