import { storiesOf } from '@storybook/vue'
import centered from '@storybook/addon-centered'

import TextInput from '../TextInput/TextInput'
import SelectInput from '../SelectInput/SelectInput'

storiesOf('Form Components', module)
  .addDecorator(centered)
  .add('Text Input', () => ({
    components: { TextInput },
    data () {
      return {
        errorMessage: 'You have an error'
      }
    },
    template: '<TextInput id="paco" label="jujuju" :hasError="true" :errorMessage="errorMessage"/>'
  }))
  .add('Select Input', () => ({
    components: { SelectInput },
    data () {
      return {
        options: ['Anna', 'Marina', 'Mavi', 'Xabi'],
        errorMessage: 'You have an error'
      }
    },
    template: `<SelectInput
                 id="blabla"
                 label="select field"
                 :errorMessage="errorMessage"
                 :hasError="true"
                 :options="options" />`
  }))
