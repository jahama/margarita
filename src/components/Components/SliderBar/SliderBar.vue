<style lang="scss" src="./SliderBar.scss" scoped></style>

<template>
  <VueSlider
    ref="slider"
    v-model="value"
    :data="['Especial','Bajo','Medio','Alto']"
    :piecewise="true"
    :piecewise-label="true"
    :dot-size="12"
    :height="16"
    tooltip="never"
    :label-active-style="{
      'color': '#3498db'
    }"
    :bg-style="{
      'backgroundColor': '#dcdcdc'
    }"
    :process-style="{
      'backgroundImage': '-webkit-linear-gradient(left, #f89f22, #e6017c)'
    }"
    :piecewise-style="{
      'backgroundColor': '#fff',
      'height': '4px',
      'width': '4px',
    }"
  >
    <template slot="label" slot-scope="{ label, value }">
      <span :class="[{ 'active': label === value }]">{{ label }}</span>
    </template>
  </VueSlider>
</template>

<script>
import VueSlider from 'vue-slider-component'

export default {
  name: 'SliderBar',

  components: {
    VueSlider
  },

  data () {
    return {
      value: 10
    }
  }

}
</script>
