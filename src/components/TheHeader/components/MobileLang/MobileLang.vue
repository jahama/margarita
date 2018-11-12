<style lang="scss" src="./MobileLang.scss"></style>

<template>
  <ul class="mobile-lang">
    <li
      class="mobile-lang__item"
      v-for="lang in langs"
      :key="lang"
    >
      <a
        class="mobile-lang__link"
        :class="getLinkClass(lang)"
        :href="lang"
        @click.prevent="onClickLink"
        v-text="lang"
      ></a>
    </li>
  </ul>
</template>

<script>
export default {

  name: 'MobileLang',

  props: {

    langs: {
      type: Array
    },

    currentLang: {
      type: String
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
