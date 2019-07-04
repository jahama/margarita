<style lang="scss" src="./PaginationBar.scss" scoped></style>

<template>
  <div class="pagination-bar">
    <div
      :class="{ 'pagination-bar--invisible': isStart }"
      class="pagination-bar__left"
    >
      <ma-button
        aria-label="Go to the start icon"
        category="no-background"
        class="pagination-bar__icon pagination-bar__icon--start"
        @click="pagination('start')"
      >
        <ma-icon icon="ArrowToEnd" width="16" height="16" />
      </ma-button>
      <ma-button
        aria-label="Go back icon"
        class="pagination-bar__icon pagination-bar__icon--back"
        @click="pagination('back')"
      >
        <ma-icon icon="Arrow" width="16" height="16" />
      </ma-button>
    </div>
    <div class="pagination-bar__current">
      <slot />
    </div>
    <div
      :class="{ 'pagination-bar--invisible': isEnd }"
      class="pagination-bar__right"
    >
      <ma-button
        aria-label="Go forward icon"
        class="pagination-bar__icon pagination-bar__icon--forward"
        @click="pagination('forward')"
      >
        <ma-icon icon="Arrow" width="16" height="16" />
      </ma-button>
      <ma-button
        aria-label="Go to the end icon"
        category="no-background"
        class="pagination-bar__icon pagination-bar__icon--end"
        @click="pagination('end')"
      >
        <ma-icon icon="ArrowToEnd" width="16" height="16" />
      </ma-button>
    </div>
  </div>
</template>

<script>
import MaButton from '@margarita/components/MaButton'
import MaIcon from '@margarita/components/MaIcon'

export default {
  name: 'pagination-bar',

  components: {
    MaIcon,
    MaButton,
  },

  props: {
    totalItems: {
      type: Number,
      default: 0,
    },

    isEnd: {
      type: Boolean,
      default: false,
    },

    isStart: {
      type: Boolean,
      default: false,
    },

    from: {
      type: Number,
      default: 0,
    },

    paginationContent: {
      type: Object,
      default: () => {},
    },

    to: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    pagination(direction) {
      this.$emit('pagination', direction)
    },
  },
}
</script>
