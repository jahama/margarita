import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import GridColumn from '@margarita/components/GridColumn'

import RadioButton from './RadioButton'

const GRID_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const TRIGGERED_MSG = 'Triggered event:'

storiesOf('RadioInput', module)
  .addDecorator(withKnobs)

  .add('RadioInput', () => {
    const option = select(
      'Selected option',
      ['', 'id-de-prueba', 'id-de-prueba-2'],
      ''
    )
    const size = select('Size', GRID_ARRAY, 3)
    const offset = select('Offset', [0, ...GRID_ARRAY], 4)
    const disabled = boolean('Disabled', false)
    const defaultOption = text('Default option')

    return {
      components: { RadioButton, GridColumn },

      template: `
        <grid-column :class="getClass">
          <radio-button
            :disabled="disabled"
            :items="items"
            :value="defaultOption"
            @change="onChange"
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
        someOptionProperty: {
          default: option,
        },
        defaultOption: {
          default: defaultOption,
        },
        disabled: {
          default: disabled,
        },
        offset: {
          default: offset,
        },
        size: {
          default: size,
        },
      },

      data() {
        return {
          items: [
            {
              value: 'id-de-prueba',
              text: 'Texto de prueba para radio button 1',
            },

            {
              value: 'id-de-prueba-2',
              text: 'Texto de prueba para radio button 2',
            },
          ],
        }
      },

      methods: {
        onChange: action(`${TRIGGERED_MSG} change`),
      },

      watch: {
        someOptionProperty(newValue) {
          this.option = newValue
        },

        option: action(`${TRIGGERED_MSG} change`),
      },
    }
  })
