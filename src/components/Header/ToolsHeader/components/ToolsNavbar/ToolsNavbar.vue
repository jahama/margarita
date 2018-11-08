<style lang="scss" src="./ToolsNavbar.scss" scoped></style>

<template>
  <ul class="navbar">
    <li
      v-for="link in links"
      :key="link.label"
      class="navbar__link"
    >
      <a
        :href="link.link"
        class="navbar__anchor"
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
