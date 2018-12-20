<style lang="scss" src="./PaginationBar.scss" scoped></style>

<template>
  <div class="pagination-bar">
    <div
      :class="{ 'pagination-bar--invisible': isStart }"
      class="pagination-bar__left"
    >
      <div
        class="pagination-bar__start"
        @click="pagination('start')"
      />
      <div
        class="pagination-bar__back"
        @click="pagination('back')"
      />
    </div>
    <div class="pagination-bar__current">
      <slot />
    </div>
    <div
      :class="{ 'pagination-bar--invisible': isEnd }"
      class="pagination-bar__right"
    >
      <div
        class="pagination-bar__forward"
        @click="pagination('forward')"
      />
      <div
        class="pagination-bar__end"
        @click="pagination('end')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationBar',

  props: {
    totalItems: {
      type: Number,
      default: 0
    },

    isEnd: {
      type: Boolean,
      default: false
    },

    isStart: {
      type: Boolean,
      default: false
    },

    from: {
      type: Number,
      default: 0
    },

    paginationContent: {
      type: Object,
      default: () => {}
    },

    to: {
      type: Number,
      default: 0
    }
  },

  methods: {
    pagination (direction) {
      this.$emit('pagination', direction)
    }
  }
}
</script>
