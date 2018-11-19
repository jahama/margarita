import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import GridColumn from '../../Grid/GridColumn/GridColumn'
import GridSystemNotes from '../../Grid/_stories/notes/GridSystem.md'

import RadioButton from '../RadioButton/RadioButton'

const GRID_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const TRIGGERED_MSG = 'Triggered event:'

storiesOf('Basic Components', module)
  .addDecorator(withKnobs)

  .add('Radio Button', withMarkdownNotes(GridSystemNotes)(() => {
    const option = select('Selected option', ['', 'id-de-prueba', 'id-de-prueba-2'], '')
    const size = select('Size', GRID_ARRAY, 3)
    const offset = select('Offset', [0, ...GRID_ARRAY], 4)
    const disabled = boolean('Disabled', false)
    const defaultOption = text('Default option')

    return ({
      components: { RadioButton, GridColumn },
      template: `
        <grid-column :class="getClass">
          <radio-button
            :disabled="disabled"
            :items="items"
            :value="defaultOption"
            @change="onChange"
          />
          <p>{{ computedProperty }}</p>
        </grid-column>`,
      computed: {
        computedProperty: {
          get () {
            if (!this.someOptionProperty) return
            return `{ P1: ${this.someOptionProperty} }`
          },
          set (newValue) {
            this.someOptionProperty = newValue
          }
        },
        getClass () {
          const classes = [`grid-col--${this.size}`]
          const offset = Number(this.offset)

          if (offset) classes.push(`grid-col--offset-${offset}`)
          return classes
        }
      },
      data () {
        return {
          someOptionProperty: option,
          defaultOption: defaultOption,
          disabled: disabled,
          items: [
            {
              value: 'id-de-prueba',
              text: 'Texto de prueba para radio button 1'
            },
            {
              value: 'id-de-prueba-2',
              text: 'Texto de prueba para radio button 2'
            }
          ],
          offset: offset,
          size: size
        }
      },
      methods: {
        onChange: action(`${TRIGGERED_MSG} change`)
      },
      watch: {
        someOptionProperty (newValue) {
          this.computedProperty = newValue
        },
        computedProperty: action(`${TRIGGERED_MSG} change`)
      }
    })
  }))
