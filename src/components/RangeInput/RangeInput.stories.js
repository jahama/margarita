import { storiesOf } from '@storybook/vue'
import { withKnobs, select, object, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import notes from './RangeInput.md'
import GridColumn from '@margarita/components/GridColumn'
import RangeInput from '@margarita/components/RangeInput'

const defaultSteps = [
  { text: 'Especial', value: 'special' },
  { text: 'Bajo', value: 'low' },
  { text: 'Medio', value: 'medium' },
  { text: 'Alto', value: 'high' },
]

storiesOf('RangeInput', module)
  .addDecorator(withKnobs)

  .add(
    'RangeInput',
    () => {
      const selectedValue = select(
        'Value',
        defaultSteps.map(s => s.value),
        'medium'
      )
      const steps = object('Steps', defaultSteps)
      const label = text('Label', 'Label')

      return {
        components: { RangeInput, GridColumn },

        template: `
        <grid-column>
          <range-input
            :steps="steps"
            :label="label"
            v-model="value"
          />
        </grid-column>`,

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

        data() {
          return {
            value: this.selectedValue,
          }
        },

        watch: {
          selectedValue(newValue) {
            this.value = newValue
          },
          value: action('value'),
        },
      }
    },
    { notes }
  )
