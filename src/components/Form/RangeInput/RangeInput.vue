<style lang="scss" src="./RangeInput.scss" scoped></style>

<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="range-input__label"
      v-text="label"
    />
    <div class="range-input">
      <span
        v-for="(_, index) in new Array(bulletsAmount)"
        :key="index"
        :style="getBulletStyle(index)"
        class="range-input__bullet"
      />
      <span :style="progressStyle" class="range-input__progress" />
      <span :style="circleStyle" class="range-input__circle" />
      <input
        :id="id"
        v-model="selectedValue"
        :max="stepsAmount - 1"
        class="range-input__native-element"
        type="range"
        min="0"
        step="1"
      >
      <div
        v-for="(step, index) in steps"
        :key="step.value"
        :style="getLabelStyle(index)"
        :class="{ 'range-input__step--active': index === Number(selectedValue) }"
        class="range-input__step"
        @click="updateSelectedValue(index)"
      >
        {{ step.text }}
      </div>
    </div>
  </div>
</template>

<script>
const REQUIRED_STEP_KEYS = [ 'value', 'text' ]

export default {
  name: 'RangeInput',

  props: {
    value: {
      type: String,
      required: true
    },

    label: {
      type: String,
      default: ''
    },

    id: {
      type: String,
      default: () => `id_${new Date().getTime()}`
    },

    steps: {
      type: Array,
      required: true,
      validator: propValue => {
        return propValue.every(step => {
          return REQUIRED_STEP_KEYS.every(key => step.hasOwnProperty(key))
        })
      }
    }
  },

  data () {
    return {
      selectedValue: this.steps.findIndex(step => step.value === this.value)
    }
  },

  watch: {
    selectedValue (newValue) {
      this.$emit('input', this.steps[newValue].value)
    }
  },

  computed: {
    stepsAmount () {
      return this.steps.length
    },

    bulletsAmount () {
      return Math.max(this.stepsAmount - 2, 0)
    },

    offsetMultiplier () {
      return 100 / (this.stepsAmount - 1)
    },

    isFirstStep () {
      return Number(this.selectedValue) === 0
    },

    selectedStepOffset () {
      return Math.floor(this.selectedValue * this.offsetMultiplier)
    },

    circleStyle () {
      return this.isFirstStep
        ? { left: '16px' }
        : { left: `calc(${this.selectedStepOffset}% - 8px)` }
    },

    progressStyle () {
      return this.isFirstStep
        ? { width: '32px' }
        : { width: `calc(${this.selectedStepOffset}% + 4px)` }
    }
  },

  methods: {
    getBulletStyle (index) {
      const leftOffset = Math.floor((index + 1) * this.offsetMultiplier)

      return {
        left: `calc(${leftOffset}% - 1px)`
      }
    },

    getLabelStyle (index) {
      let translateOffset = '-50%'

      // First and last labels are justified to the slider
      if (index === 0) {
        translateOffset = '0%'
      }
      if (index === this.stepsAmount - 1) {
        translateOffset = 'calc(-100%)'
      }

      return {
        left: `calc(${Math.floor(index * this.offsetMultiplier)}%)`,
        transform: `translateX(${translateOffset})`
      }
    },

    updateSelectedValue (newValue) {
      this.selectedValue = newValue
    }
  }
}
</script>
