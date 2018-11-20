<template>
  <ul class="navbar">
    <li class="navbar__link" v-for="link in links" :key="link.label">
      <a :href="link.link" v-text="link.label"></a>
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

<style lang="scss">
@import "../../../../../scss/margarita";

.navbar {
  display: none;

  @include mq($from: lg) {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  }

  &__link {
    display: flex;
    list-style: none;
    height: 2rem;
    line-height: 1.3;

    a {
      text-decoration: none;
      color: get-color("gray");
      height: 100%;

      &:hover {
        color: get-color("dark-hot-pink");
      }

      &.active {
        @include font-weight(medium);

        position: relative;
        color: get-color("tundora");

        &:after {
          background-image: linear-gradient(
            to right,
            get-color("crimson") 0%,
            get-color("school-bus-yellow") 100%
          );
          background-repeat: no-repeat;
          display: block;
          position: absolute;
          bottom: 0;
          z-index: 11;
          width: 100%;
          height: .125rem;
          content: "";
        }
      }
    }
  }

}
</style>
