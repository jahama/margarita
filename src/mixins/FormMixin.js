export default {
  data () {
    return {
      lazyValue: this.value
    }
  },

  watch: {
    value (newValue) {
      this.lazyValue = newValue
    }
  },

  methods: {
    updateModel () {
      this.$emit('input', this.lazyValue)
    }
  }
}
