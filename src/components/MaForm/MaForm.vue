<template>
  <form ref="formElement" @submit.prevent="onSubmit">
    <slot />
  </form>
</template>

<script>
export default {
  computed: {
    inputFieldsWithError() {
      const maTextTag = 'ma-form-field'
      return this.$children.filter(
        (c) => c.$options._componentTag === maTextTag && c.hasError
      )
    },
  },
  methods: {
    onSubmit() {
      if (this.inputFieldsWithError.length) {
        this.inputFieldsWithError.forEach((i) => {
          i.hasBeenBlurred = true
        })
        this.inputFieldsWithError[0].$el.scrollIntoView({ behavior: 'smooth' })
      } else {
        this.$emit('submit')
      }
    },
  },
}
</script>

<style></style>
