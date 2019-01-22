import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, object, select, text } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'

import GridColumn from '../../Grid/GridColumn/GridColumn'

import SelectInput from '../SelectInput/SelectInput'

const GRID_ARRAY = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
const AVAILABLE_WEIGHTS = [ 'bold', 'semibold', 'medium', 'regular' ]
const DEFAULT_OPTIONS = [
  { label: 'Option1', text: 'Option1', value: 'option1' },
  { label: 'Option1', text: 'Option2', value: 'option2' },
  { label: 'Option1', text: 'Option3', value: 'option3' },
  { label: 'Option1', text: 'Option4', value: 'option4' }
]

storiesOf('Form Components', module)
  .addDecorator(withKnobs)

  .add('Select Input', () => {
    const selectedValue = select('Value', [ '', ...DEFAULT_OPTIONS.map(o => o.value) ], '')
    const label = text('Label', 'Label')
    const ariaLabel = text('ARIA Label', '')
    const disabled = boolean('Disable', false)
    const weight = select('Peso', [ '', ...AVAILABLE_WEIGHTS ], '')
    const hasError = boolean('Has error', false)
    const errorMessage = text('Error msg', 'You have an error')
    const fieldClass = text('Additional class', '')
    const options = object('Options', DEFAULT_OPTIONS)

    const size = select('Size', GRID_ARRAY, 3)
    const offset = select('Offset', [ 0, ...GRID_ARRAY ], 4)

    return {
      components: { GridColumn, SelectInput },

      template: `
        <GridColumn :class="getClass">
          <SelectInput
            id="my-select-input"
            :aria-label="ariaLabel"
            :errorMessage="errorMessage"
            :disabled="disabled"
            :hasError="hasError"
            :label="label"
            :options="options"
            :weight="weight"
            :fieldClass="fieldClass"
            v-model="selectedValue"
          />
        </GridColumn>`,

      computed: {
        getClass () {
          const classes = [ `grid-col--${this.size}` ]
          const offset = Number(this.offset)

          if (offset) classes.push(`grid-col--offset-${offset}`)
          return classes
        }
      },

      watch: {
        selectedValue: action('value')
      },

      data () {
        return {
          ariaLabel,
          disabled,
          errorMessage,
          hasError,
          label,
          options,
          offset,
          size,
          fieldClass,
          weight,
          selectedValue
        }
      }

    }
  })
