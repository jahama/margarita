import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, object, select, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import GridColumn from '../../Grid/GridColumn/GridColumn'
import GridSystemNotes from '../../Grid/_stories/notes/GridSystem.md'

import CheckboxInput from '../CheckboxInput/CheckboxInput'

const GRID_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const TRIGGERED_MSG = 'Triggered event:'
const CHANGED_MSG = 'Changed property:'

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
        <grid-column :class="getClass">
          <checkbox-input
            :label="label"
            :checked="checked"
            :disabled="disabled"
          />
        </grid-column>`,
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
