import { storiesOf } from '@storybook/vue'
import { withKnobs, select, object, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import notes from './notes/RangeInput.md'
import GridColumn from '../../Grid/GridColumn/GridColumn'
import RangeInput from '../RangeInput/RangeInput'

const defaultSteps = [
  { text: 'Especial', value: 'special' },
  { text: 'Bajo', value: 'low' },
  { text: 'Medio', value: 'medium' },
  { text: 'Alto', value: 'high' },
]

storiesOf('Form Components', module)
  .addDecorator(withKnobs)

  .add('Range Input', () => {
    const selectedValue = select('Value', defaultSteps.map(s => s.value), 'medium')
    const steps = object('Steps', defaultSteps)
    const label = text('Label', 'Label')

    return ({
      components: { RangeInput, GridColumn },

      template: `
        <GridColumn>
          <RangeInput
            :steps="steps"
            :label="label"
            v-model="value"
          />
        </GridColumn>`,

      props: {
        steps: {
          default: steps,
        },
        label: {
          default: label,
        },
        selectedValue: {
          default: selectedValue,
        },
      },

      data () {
        return {
          value: this.selectedValue,
        }
      },

      watch: {
        selectedValue (newValue) {
          this.value = newValue
        },
        value: action('value'),
      },
    })
  }, { notes })
