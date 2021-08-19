<template>
  <a :class="`ma-link--${category} ma-link`" :href="href" :rel="computedRel">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'MaLink',

  props: {
    /**
     * Sets the component displaying style
     */
    category: {
      type: String,
      default: 'primary',
      validator: (v) =>
        [
          'primary',
          'secondary',
          'white',
          'gradient',
          'no-background',
          'no-background-white',
        ].includes(v),
    },

    href: {
      type: String,
      required: true,
    },

    rel: {
      type: String,
      default: null,
    },
  },

  computed: {
    computedRel() {
      return this.$attrs['target'] === '_blank' && this.isAbsoluteUrl(this.href)
        ? `${this.rel || ''} noopener noreferrer`
        : this.rel
    },
  },

  methods: {
    isAbsoluteUrl(s) {
      // https://regex101.com/r/nR2yL6/3
      const regex = new RegExp('(?:^[a-z][a-z0-9+.-]*:|//)', 'i')

      return regex.test(s)
    },
  },
}
</script>

<style scoped src="./MaLink.css"></style>
