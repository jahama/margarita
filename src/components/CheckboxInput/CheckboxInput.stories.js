import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'

import GridColumn from '@margarita/components/GridColumn'
import CheckboxInput from '../CheckboxInput/CheckboxInput'

const GRID_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

storiesOf('Form Components', module)
  .addDecorator(withKnobs)

  .add('CheckBox Input', () => {
    const checked = boolean('Checked', false)
    const label = text('Label', 'Click to check the checkbox')
    const size = select('Size', GRID_ARRAY, 3)
    const offset = select('Offset', [0, ...GRID_ARRAY], 4)
    const disabled = boolean('Disabled', false)

    return {
      components: { CheckboxInput, GridColumn },

      template: `
        <grid-column :class="getClass">
          <checkbox-input
            :label="label"
            :checked="checked"
            :disabled="disabled"
          />
        </grid-column>`,

      computed: {
        getClass() {
          return {
            [`grid-col--${this.size}`]: this.size,
            [`grid-col--offset-${this.offset}`]: this.offset,
          }
        },
      },

      props: {
        checked: {
          default: checked,
        },
        disabled: {
          default: disabled,
        },
        label: {
          default: label,
        },
        offset: {
          default: offset,
        },
        size: {
          default: size,
        },
      },
    }
  })
