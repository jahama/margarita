<style lang="scss" src="./SliderBar.scss" scoped></style>

<template>
  <VueSlider ref="slider" v-model="value" />
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
