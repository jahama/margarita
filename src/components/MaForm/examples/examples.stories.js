import * as validators from '../_validators/validators'
import ExampleForm from './example-form.vue'

export default {
  title: 'Components/Form/examples',
}

export const ComplexFormExample = () => ({
  components: { ExampleForm },
  computed: {
    validators() {
      return validators
    },
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      repeatEmail: '',
      gender: '',
      country: '',
      // I don't like this
      reasonFriend: false,
      reasonAd: false,
      reasonOther: false,
      step: 'monthly',
    }
  },
  methods: {
    validateRepeat(value) {
      return this.email === value ? '' : 'error-mismatch'
    },
    atLeastOne() {
      return this.reasonAd || this.reasonFriend || this.reasonOther
        ? ''
        : 'error-choose-at-least-one'
    },
  },
  template: `
    <example-form>
    <ma-layout columns="6 6 - 6 6 - 12" gap="medium">
      <ma-form-field
        label="First Name"
        v-model="firstName"
        :validators="[validators.isRequired]"
      />
      <ma-form-field
        label="Last Name"
        v-model="lastName"
        :validators="[validators.isRequired]"
      />
      <ma-form-field
        label="Email"
        v-model="email"
        :validators="[validators.isRequired, validators.isEmail]"
      />
      <ma-form-field
        label="Repeat Email"
        v-model="repeatEmail"
        :validators="[validators.isRequired,  validators.isEmail, validateRepeat]"
      />
      <ma-form-field
        label="Gender"
        v-model="gender"
        type="select"
        :options="[{ label: 'Female', value: 'female'}, { label: 'Male', value: 'male' }, { label: 'Other', value: 'other' }]"
        :validators="[validators.isRequired]"
      />
      <ma-form-field
        label="Country"
        v-model="country"
        type="select"
        :options="[{ label: 'Spain', value: 'spain'}, { label: 'Russia', value: 'russia' }]"
        :validators="[validators.isRequired]"
      />
      <ma-text size="small">How did you know us?</ma-text>
      <ma-form-field
        label="From a friend"
        v-model="reasonFriend"
        type="checkbox"
        :validators="[atLeastOne]"
      />
      <ma-form-field
        label="From an ad"
        v-model="reasonAd"
        type="checkbox"
        :validators="[atLeastOne]"
      />
      <ma-form-field
        label="Other"
        v-model="reasonOther"
        type="checkbox"
        :validators="[atLeastOne]"
      />
      <ma-range
        label="How often do you use our App?" 
        v-model="step"
        :steps="[
          { text: 'Once a month', value: 'monthly' },
          { text: 'Every other week', value: 'biweekly' },
          { text: 'Every week', value: 'weekly' },
          { text: 'Every day', value: 'daily' },
        ]"
      />
      </ma-layout>
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
      <ma-layout columns="6 6" gap="medium">
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
