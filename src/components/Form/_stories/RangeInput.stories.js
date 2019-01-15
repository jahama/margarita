import { storiesOf } from '@storybook/vue'
import { withKnobs, select, object, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import RangeInputNotes from './notes/RangeInput.md'
import GridColumn from '../../Grid/GridColumn/GridColumn'
import RangeInput from '../RangeInput/RangeInput'

const defaultSteps = [
  { text: 'Especial', value: 'special' },
  { text: 'Bajo', value: 'low' },
  { text: 'Medio', value: 'medium' },
  { text: 'Alto', value: 'high' }
]

storiesOf('Form Components', module)
  .addDecorator(withKnobs)

  .add('Range Input', withMarkdownNotes(RangeInputNotes)(() => {
    const selectedValue = select('Value', defaultSteps.map(s => s.value), 'medium')
    const steps = object('Steps', defaultSteps)
    const label = text('Label', 'Label')

    return ({
      components: { RangeInput, GridColumn },

      template: `
        <div>
          <div>
            <GridColumn>
              <RangeInput
                v-model="selectedValue"
                :steps="steps"
                :label="label"
              />
            </GridColumn>
          </div>
        </div>`,

      data () {
        return {
          steps,
          label,
          selectedValue
        }
      },

      watch: {
        selectedValue: action('value')
      }
    })
  }))
