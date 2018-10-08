import { storiesOf } from '@storybook/vue'
import centered from '@storybook/addon-centered'

import TextInput from '../TextInput/TextInput'
import SelectInput from '../SelectInput/SelectInput'
import RadioButton from '../RadioButton/RadioButton'

storiesOf('Basic Components', module)
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
  .add('Radio Button', () => ({
    components: { RadioButton },
    data () {
      return {
        items: [
          {
            id: 'id-de-prueba',
            text: 'Texto de prueba para radio button 1',
            name: 'name'
          },
          {
            id: 'id-de-prueba-2',
            text: 'Texto de prueba para radio button 2',
            name: 'name'
          }
        ],
        disabled: false
      }
    },
    template: `<div>
                <RadioButton
                  v-for="(item, index) in items"
                  :name="item.name"
                  :id="item.id"
                  :text="item.text"
                  :disabled="disabled" />
              </div>`
  }))
