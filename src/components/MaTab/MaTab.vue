<template>
  <div class="tab">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MaTab',

  // We need to declare these props so they are available through
  // child.componentOptions.propsData in MaTabs.vue
  props: {
    title: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      default: null,
    },

    pill: {
      type: [String, Number],
      default: null,
    },
  },
}
</script>
