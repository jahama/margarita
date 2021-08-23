<template>
  <div class="container">
    <ma-form class="form" @submit="onSubmit">
      <ma-stack space="medium">
        <slot />
        <ma-button type="submit">Submit</ma-button>
        <ma-alert v-if="isSubmitted" tone="green">
          Form submitted successfully!
        </ma-alert>
      </ma-stack>
    </ma-form>
  </div>
</template>

<script>
import MaStack from '@/components/MaStack/MaStack.vue'
export default {
  components: { MaStack },
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
.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  max-width: 500px;
  width: 100%;
}
</style>
