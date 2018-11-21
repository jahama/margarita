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
    <div
      class="user-actions__icon"
      @click="emitClickEvent"
    />
  </div>
</template>

<script>
export default {
  name: 'UserActions',

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
