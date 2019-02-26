<style scoped lang="scss" src="./ButtonInputSpinner.scss"></style>

<template>
  <div class="button-input-spinner">
    <div
      v-for="index in 12"
      :key="index"
      :class="`button-input-spinner__content button-input-spinner__content--${index}`"
    />
  </div>
</template>
