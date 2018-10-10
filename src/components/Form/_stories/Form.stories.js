import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import GridSystemNotes from '../../Grid/_stories/notes/GridSystem.md'

import GridColumn from '../../Grid/GridColumn/GridColumn'

import CheckboxInput from '../CheckboxInput/CheckboxInput'
import SelectInput from '../SelectInput/SelectInput'
import RadioButton from '../RadioButton/RadioButton'
import TextInput from '../TextInput/TextInput'
import ButtonInput from '../ButtonInput/ButtonInput'

const GRID_ARRAY = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
const BUTTON_TYPES = ['primary', 'secondary', 'gradient']

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
        options: [{text: 'Anna', value: '1'},
          {text: 'Marina', value: '2'},
          {text: 'Mavi', value: '3'},
          {text: 'Xabi', value: '4'}],
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
        radioName: 'groupName',
        items: [
          {
            id: 'id-de-prueba',
            text: 'Texto de prueba para radio button 1'
          },
          {
            id: 'id-de-prueba-2',
            text: 'Texto de prueba para radio button 2'
          }
        ],
        disabled: false
      }
    },
    methods: {
      onChange (value) {
        console.log(this.name, value)
      }
    },
    template: `<div>
                <RadioButton
                  v-for="(item, index) in items"
                  :name="radioName"
                  :id="item.id"
                  :key="item.id"
                  :text="item.text"
                  :disabled="disabled"
                  @change="onChange" />
              </div>`
  }))
  .add('CheckBox Input', () => ({
    components: { CheckboxInput },
    data () {
      return {
        checked: true
      }
    },
    template: '<CheckboxInput id="paco" label="Hererererere" :checked="checked"/>'
  }))
  .add('Button Input', withMarkdownNotes(GridSystemNotes)(() => {
    const size = select('Size', GRID_ARRAY, 3)
    const offset = select('Offset', [ 0, ...GRID_ARRAY ], 0)
    const type = select('Types', BUTTON_TYPES, 'primary')
    const textButton = text('Label', 'Click me')

    return ({
      components: { ButtonInput, GridColumn },
      data () {
        return {
          text: textButton,
          type: type,
          size: size,
          offset: offset
        }
      },
      template: `<GridColumn :class="getClass">
                  <ButtonInput
                    :text="text"
                    :type="type"
                    @click="action"
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
      methods: {
        action: action('clicked')
      }
    })
  }))
