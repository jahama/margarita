import MaForm from './MaForm'
import * as validators from './_validators/validators'

export default {
  title: 'Components/Form',
  component: MaForm,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  computed: {
    validators() {
      return validators
    },
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
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
  template: `<ma-form @submit="onSubmit" style="width: 300px">
    <ma-stack space="medium">
      <ma-form-field
        label="Full name"
        v-model="name"
        :validators="[validators.isRequired]"
      />
      <ma-form-field
        label="Email address"
        v-model="email"
        :validators="[validators.isRequired, validators.isEmail]"
      />
      <ma-form-field
        label="Phone number"
        v-model="phone"
        :validators="[validators.isRequired, validators.isPhoneNumber]"
      />
      <ma-button type="submit">Submit</ma-button>
      <ma-alert v-if="isSubmitted" tone="green">Form submitted successfully!</ma-alert>
    </ma-stack>
  </ma-form>`,
})

export const Form = Template.bind({})
