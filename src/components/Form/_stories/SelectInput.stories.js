import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, object, select, text } from '@storybook/addon-knobs/vue'

import GridColumn from '../../Grid/GridColumn/GridColumn'

import SelectInput from '../SelectInput/SelectInput'

const GRID_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

storiesOf('Basic Components', module)
  .addDecorator(withKnobs)

  .add('Select Input', () => {
    const label = text('Label', 'Label')
    const defaultOptions = [{ text: 'Option1', value: 'option1' },
      { text: 'Option2', value: 'option2' },
      { text: 'Option3', value: 'option3' },
      { text: 'Option4', value: 'option4' }]
    const options = object('Options', defaultOptions)
    const size = select('Size', GRID_ARRAY, 3)
    const offset = select('Offset', [0, ...GRID_ARRAY], 4)
    const errorMessage = text('Error msg', 'You have an error')
    const hasError = boolean('Has error', false)
    const disabled = boolean('Disable', false)

    return {
      components: { GridColumn, SelectInput },
      template: `
        <GridColumn :class="getClass">
          <SelectInput
            id="my-select-input"
            :errorMessage="errorMessage"
            :disabled="disabled"
            :hasError="hasError"
            :label="label"
            :options="options"
          />
        </GridColumn>`,
      computed: {
        getClass () {
          const classes = [`grid-col--${this.size}`]
          const offset = Number(this.offset)

          if (offset) classes.push(`grid-col--offset-${offset}`)
          return classes
        }
      },
      data () {
        return {
          disabled: disabled,
          errorMessage: errorMessage,
          hasError: hasError,
          label: label,
          options: options,
          offset: offset,
          size: size
        }
      }
    }
  })