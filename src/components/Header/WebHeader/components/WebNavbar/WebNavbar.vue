<style lang="scss" src="./WebNavbar.scss"></style>

<template>
  <ul class="navbar">
    <li
      class="navbar__link"
      v-for="link in links"
      :key="link.label"
    >
      <a
        class="navbar__anchor"
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
    links: Array,
    required: true
  }
}
</script>
