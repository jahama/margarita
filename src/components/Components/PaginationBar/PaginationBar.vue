<style lang="scss" src="./PaginationBar.scss" scoped></style>

<template>
  <div class="pagination-bar">
    <div
      :class="{ 'pagination-bar--invisible': isStart }"
      class="pagination-bar__left"
    >
      <ButtonInput
        icon="ArrowToEnd"
        icon-alt="Go to the start icon"
        :icon-size="16"
        type="no-background"
        class="pagination-bar__icon pagination-bar__icon--start"
        @click="pagination('start')"
      />
      <ButtonInput
        icon="Arrow"
        icon-alt="Go back icon"
        :icon-size="16"
        class="pagination-bar__icon pagination-bar__icon--back"
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
      <ButtonInput
        icon="Arrow"
        icon-alt="Go forward icon"
        :icon-size="16"
        class="pagination-bar__icon pagination-bar__icon--forward"
        @click="pagination('forward')"
      />
      <ButtonInput
        icon="ArrowToEnd"
        icon-alt="Go to the end icon"
        :icon-size="16"
        type="no-background"
        class="pagination-bar__icon pagination-bar__icon--end"
        @click="pagination('end')"
      />
    </div>
  </div>
</template>

<script>
import ButtonInput from '../../Form/ButtonInput/ButtonInput'

export default {
  name: 'PaginationBar',

  components: {
    ButtonInput
  },

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
