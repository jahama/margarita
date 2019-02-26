<style scoped lang="scss" src="./SpinnerButton.scss"></style>

<template>
  <div class="spinner-button">
    <div
      v-for="index in 12"
      :key="index"
      :class="`spinner-button__content spinner-button__content--${index}`"
    />
  </div>
</template>
