<style scoped lang="scss" src="./StatusPill.scss"></style>

<template>
  <div>
    <div
      class="status-pill"
      :class="getClasses"
      v-text="statusText"
    />
  </div>
</template>

<script>
const AVAILABLE_TYPES = {
    'active': 'Alta',
    'awaiting-validation': 'Espera de validación',
    'cancellation-in-process': 'En proceso de baja',
    'cancelled': 'Cancelado',
    'disconnection-in-process': 'En proceso de corte',
    'error': 'Error',
    'in-process': 'En proceso',
    'non-payment-disconnection': 'Corte por impago',
    'not-started': 'No iniciado'
}

export default {
  name: 'StatusPill',

  props: {
    status: {
      type: String,
      default: 'active',
      validator: function (value) {
        return Object.keys(AVAILABLE_TYPES).indexOf(value) !== -1
      }
    }
  },

  computed: {
    getClasses () {
      const classes = []

      classes.push(`status-pill--${this.status}`)

      return classes
    },

    statusText () {
      return AVAILABLE_TYPES[this.status]
    }
  }
}
</script>
