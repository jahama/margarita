<style lang="scss" src="./UserActions.scss"></style>

<template>
  <div class="user-actions">
    <div
      class="user-actions__logged-user"
      v-text="`${loggedUser}  -  `"
    />
    <div
      class="user-actions__user-role"
      v-text="userRole"
    />
    <ButtonInput
      icon="Exit"
      icon-alt="exit icon"
      type="no-background"
      class="user-actions__icon"
      :icon-size="16"
      @click="emitClickEvent"
    />
  </div>
</template>

<script>
import ButtonInput from '../../../../Form/ButtonInput/ButtonInput'

export default {
  name: 'UserActions',

  components: {
    ButtonInput
  },

  props: {
    loggedUser: {
      type: String,
      default: ''
    },

    userRole: {
      type: String,
      default: ''
    }
  },

  methods: {
    emitClickEvent () {
      this.$emit('logout')
    }
  }
}
</script>
