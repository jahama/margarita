import * as validators from '../_validators/validators'
import ExampleForm from './example-form.vue'

export default {
  title: 'Components/Form/examples',
}

export const RepeatPasswordValidation = () => ({
  components: { ExampleForm },
  computed: {
    validators() {
      return validators
    },
  },
  data() {
    return {
      password: '',
      repeatPassword: '',
    }
  },
  methods: {
    validateRepeat(value) {
      return this.password === value ? '' : 'error-mismatch'
    },
  },
  template: `
    <example-form>
      <ma-form-field
        label="Password"
        v-model="password"
        :validators="[validators.isRequired]"
      />
      <ma-form-field
        label="Repeat password"
        v-model="repeatPassword"
        :validators="[validators.isRequired, validateRepeat]"
      />
    </example-form>
  `,
})

export const FormGroupExample = () => ({
  components: { ExampleForm },
  data() {
    return {
      powers: [0, 0, 0, 0, 0, 0],
    }
  },
  methods: {
    powerValidator(minValue) {
      return (v) => {
        if (v < 15000) return 'Value should be greater than 15000'
        if (v <= minValue) return `Value should be greater than ${minValue}`
        return ''
      }
    },
  },
  template: `
    <example-form>
      <ma-layout columns="6 6" gap="small">
        <ma-form-field
          v-for="(power, i) in powers"
          :label="'Power ' + i"
          v-model="powers[i]"
          type="number"
          :validators="[powerValidator(i ? powers[i-1] : 0)]"
        />
      </ma-layout>
    </example-form>
  `,
})
