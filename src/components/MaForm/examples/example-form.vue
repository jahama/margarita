<template>
  <ma-form class="form" @submit="onSubmit">
    <ma-stack space="medium">
      <slot />
      <ma-button type="submit">Submit</ma-button>
      <ma-alert v-if="isSubmitted" tone="green">
        Form submitted successfully!
      </ma-alert>
    </ma-stack>
  </ma-form>
</template>

<script>
export default {
  data() {
    return {
      isSubmitted: false,
    }
  },
  methods: {
    onSubmit() {
      this.isSubmitted = true
      setTimeout(() => {
        this.isSubmitted = false
      }, 2000)
    },
  },
}
</script>

<style scoped>
.form {
  width: 300px;
}
</style>
