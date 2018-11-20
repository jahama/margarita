import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs/vue'

import CheckboxInput from '../CheckboxInput/CheckboxInput'

const GRID_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

storiesOf('Basic Components', module)
  .addDecorator(withKnobs)

  .add('CheckBox Input', () => {
    const label = text('Label', 'Click to check the checkbox')
    const size = select('Size', GRID_ARRAY, 3)
    const offset = select('Offset', [0, ...GRID_ARRAY], 4)
    const disabled = boolean('Disabled', false)

    return {
      components: { CheckboxInput },
      template: `
        <GridColumn :class="getClass">
          <CheckboxInput
            :label="label"
            :checked="checked"
            :disabled="disabled"
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
          checked: true,
          disabled: disabled,
          label: label,
          offset: offset,
          size: size
        }
      }
    }
  })
