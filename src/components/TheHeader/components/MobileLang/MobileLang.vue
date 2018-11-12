<template>
  <ul class="mobile-lang">
    <li
      class="mobile-lang"
      v-for="lang in langs"
      :key="lang"
    >
      <a :href="lang" v-text="lang"></a>
    </li>
  </ul>
</template>

<script>
export default {

  name: 'MobileLang',

  props: {
    langs: {
      type: Array
    }
  }

}
</script>

<style lang="scss">
.mobile-lang {
  display: flex;

  li {
    list-style: none;
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: get-color("white");
  }
}
</style>


