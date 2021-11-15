<template>
  <ma-text v-if="type === 'check'" tone="pink">
    <ma-icon icon="Checkmark" size="small" title="Checkmark Icon" />
  </ma-text>
  <ma-text v-else-if="type === 'bullet'" tone="pink">•</ma-text>
  <ma-text v-else>{{ index }}.</ma-text>
</template>

<script>
export default {
  name: 'MaListMarker',

  props: {
    type: { type: String, required: true },
    index: { type: Number, required: true },
  },
}
</script>
