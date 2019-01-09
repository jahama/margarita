<style lang="scss" src="./SliderBar.scss" scoped></style>

<style lang="scss">
  .vue-slider-dot-handle {
    border: solid #e6007d 2px;
  }
</style>

<template>
  <VueSlider
    ref="slider"
    v-model="value"
    :data="dataRanges"
    :piecewise="true"
    :piecewise-label="true"
    :dot-size="14"
    :height="16"
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
    tooltip="never"
  >
    <template slot="label" slot-scope="{ label }">
      <div
        :class="{ 'slide-bar__label--active': label === value }"
        class="slide-bar__label"
      >
        {{ label }}
      </div>
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
      value: 'Bajo',
      dataRanges: [ 'Especial', 'Bajo', 'Medio', 'Alto' ]
    }
  }

}
</script>
