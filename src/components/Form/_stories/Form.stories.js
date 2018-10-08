import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import GridSystemNotes from '../../Grid/_stories/notes/GridSystem.md'

import TextInput from '../TextInput/TextInput'
import SelectInput from '../SelectInput/SelectInput'
import RadioButton from '../RadioButton/RadioButton'
import GridColumn from '../../Grid/GridColumn/GridColumn.vue'

const GRID_ARRAY = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

storiesOf('Basic Components', module)
  .addDecorator(withKnobs)
  .add('Text Input', withMarkdownNotes(GridSystemNotes)(() => {
    const size = select('Size', GRID_ARRAY, 4)
    const offset = select('Offset', [ 0, ...GRID_ARRAY ], 4)
    const label = text('Label', 'Label')
    const errorMessage = text('Error msg', 'You have an error')
    const hasError = boolean('Has error', false)

    return ({
      components: { TextInput, GridColumn },
      template: `
      <GridColumn :class="getClass">
        <TextInput
          id="paco"
          :label="label"
          :hasError="hasError"
          :errorMessage="errorMessage"
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
      data () {
        return {
          size: size,
          offset: offset,
          hasError: hasError,
          errorMessage: errorMessage,
          label: label
        }
      }
    })
  }))
  .add('Select Input', () => ({
    components: { GridColumn, SelectInput },
    data () {
      return {
        options: ['Anna', 'Marina', 'Mavi', 'Xabi'],
        errorMessage: 'You have an error'
      }
    },
    template: `
    <GridColumn class="grid-col--4 grid-col--offset-4">
      <SelectInput
              id="blabla"
              label="select field"
              :errorMessage="errorMessage"
              :hasError="true"
              :options="options" />
    </GridColumn>`
  }))
  .add('Radio Button', () => ({
    components: { RadioButton },
    data () {
      return {
        items: [
          {
            id: 'id-de-prueba',
            text: 'Texto de prueba para radio button 1',
            name: 'name'
          },
          {
            id: 'id-de-prueba-2',
            text: 'Texto de prueba para radio button 2',
            name: 'name'
          }
        ],
        disabled: false
      }
    },
    template: `<div>
                <RadioButton
                  v-for="(item, index) in items"
                  :name="item.name"
                  :id="item.id"
                  :text="item.text"
                  :disabled="disabled" />
              </div>`
  }))
