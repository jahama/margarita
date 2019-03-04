<style lang="scss" src="./PaginationBar.scss" scoped></style>

<template>
  <div class="pagination-bar">
    <div
      :class="{ 'pagination-bar--invisible': isStart }"
      class="pagination-bar__left"
    >
      <ButtonInput
        aria-label="Go to the start icon"
        type="no-background"
        class="pagination-bar__icon pagination-bar__icon--start"
        @click="pagination('start')"
      >
        <IconBase
          icon="ArrowToEnd"
          width="16"
          height="16"
        />
      </ButtonInput>
      <ButtonInput
        aria-label="Go back icon"
        class="pagination-bar__icon pagination-bar__icon--back"
        @click="pagination('back')"
      >
        <IconBase
          icon="Arrow"
          width="16"
          height="16"
        />
      </ButtonInput>
    </div>
    <div class="pagination-bar__current">
      <slot />
    </div>
    <div
      :class="{ 'pagination-bar--invisible': isEnd }"
      class="pagination-bar__right"
    >
      <ButtonInput
        aria-label="Go forward icon"
        class="pagination-bar__icon pagination-bar__icon--forward"
        @click="pagination('forward')"
      >
        <IconBase
          icon="Arrow"
          width="16"
          height="16"
        />
      </ButtonInput>
      <ButtonInput
        aria-label="Go to the end icon"
        type="no-background"
        class="pagination-bar__icon pagination-bar__icon--end"
        @click="pagination('end')"
      >
        <IconBase
          icon="ArrowToEnd"
          width="16"
          height="16"
        />
      </ButtonInput>
    </div>
  </div>
</template>

<script>
import ButtonInput from '../../Form/ButtonInput/ButtonInput'
import IconBase from '../../Components/Icons/IconBase'

export default {
  name: 'PaginationBar',

  components: {
    IconBase,
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
