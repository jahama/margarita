<style lang="scss" src="./ToolsNavbar.scss" scoped></style>

<template>
  <ul class="tools-navbar">
    <li
      v-for="link in links"
      :key="link.label"
      class="tools-navbar__link"
    >
      <a
        :href="link.link"
        class="tools-navbar__anchor"
        v-text="link.label"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'WebNavbar',

  props: {
    links: {
      type: Array,
      default: () => ([]),
      required: true
    }
  }
}
</script>
