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
    <button-input
      aria-label="exit icon"
      category="no-background"
      class="user-actions__icon"
      @click="emitClickEvent"
    >
      <icon-base
        icon="Exit"
        width="16"
        height="16"
      />
    </button-input>
  </div>
</template>

<script>
import ButtonInput from '../../../../Form/ButtonInput/ButtonInput'
import IconBase from '@margarita/components/Components/IconBase'

export default {
  name: 'UserActions',

  components: {
    IconBase,
    ButtonInput,
  },

  props: {
    loggedUser: {
      type: String,
      default: '',
    },

    userRole: {
      type: String,
      default: '',
    },
  },

  methods: {
    emitClickEvent () {
      this.$emit('logout')
    },
  },
}
</script>
