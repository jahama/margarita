<style lang="scss" src="./WebMobileLang.scss"></style>

<template>
  <ul class="mobile-lang">
    <li
      v-for="lang in langs"
      :key="lang"
      class="mobile-lang__item"
    >
      <a
        :class="getLinkClass(lang)"
        :href="lang"
        class="mobile-lang__link"
        @click.prevent="onClickLink"
        v-text="lang"
      />
    </li>
  </ul>
</template>

<script>
export default {

  name: 'WebMobileLang',

  props: {

    langs: {
      type: Array,
      default: () => []
    },

    currentLang: {
      type: String,
      default: 'es'
    }

  },

  methods: {

    getLinkClass (lang) {
      if (lang === this.currentLang) return 'mobile-lang__link--active'
    },

    onClickLink (e) {
      // TODO: Think about how can we handle language changed
      this.$emit('change:lang', e.target.href)
    }

  }

}
</script>
