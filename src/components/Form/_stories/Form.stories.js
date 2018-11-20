import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, object, select, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import GridSystemNotes from '../../Grid/_stories/notes/GridSystem.md'
import TextInputNotes from './notes/TextInput.md'

import GridColumn from '../../Grid/GridColumn/GridColumn'

import CheckboxInput from '../CheckboxInput/CheckboxInput'
import SelectInput from '../SelectInput/SelectInput'
import RadioButton from '../RadioButton/RadioButton'
import TextInput from '../TextInput/TextInput'
import ButtonInput from '../ButtonInput/ButtonInput'

const GRID_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const BUTTON_TYPES = ['primary', 'secondary', 'gradient']

const TRIGGERED_MSG = 'Triggered event:'
const CHANGED_MSG = 'Changed property:'

storiesOf('Basic Components', module)
  .addDecorator(withKnobs)
  .add('Text Input', withMarkdownNotes(TextInputNotes)(() => {
    const label = text('Label', 'Label')
    const value = text('Value', 'Value')
    const size = select('Size', GRID_ARRAY, 4)
    const offset = select('Offset', [0, ...GRID_ARRAY], 4)
    const errorMessage = text('Error msg', 'You have an error')
    const hasError = boolean('Has error', false)
    const disabled = boolean('Disable', false)
    const mask = (value) => {
      if (!value) return

      return value
        .trim()
        .replace(/ /g, '')
        .substr(0, 24)
        .toUpperCase()
        .match(/.{1,4}/g)
        .join(' ')
    }

    return ({
      components: { TextInput, GridColumn },
      template: `
        <GridColumn :class="getClass">
          <TextInput
            id="my-text-input"
            :errorMessage="errorMessage"
            :disabled="disabled"
            :hasError="hasError"
            :label="label"
            :mask="mask"
            @blur="onBlur"
            @input="onInput"
            v-model="value"
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
          mask: mask,
          offset: offset,
          size: size,
          value: value
        }
      },
      methods: {
        onInput: action(`${TRIGGERED_MSG} 'input'`),
        onBlur: action(`${TRIGGERED_MSG} blur`)
      },
      watch: {
        value: action(`${CHANGED_MSG} value`)
      }
    })
  }))
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
  .add('Radio Button', withMarkdownNotes(GridSystemNotes)(() => {
    const option = select('Selected option', ['', 'id-de-prueba', 'id-de-prueba-2'], '')
    const size = select('Size', GRID_ARRAY, 3)
    const offset = select('Offset', [0, ...GRID_ARRAY], 4)
    const disabled = boolean('Disabled', false)
    const defaultOption = text('Default option')

    return ({
      components: { RadioButton, GridColumn },
      template: `
        <GridColumn :class="getClass">
          <RadioButton
            :disabled="disabled"
            :items="items"
            :value="defaultOption"
            @change="onChange"
          />
          <p>{{ computedProperty }}</p>
        </GridColumn>`,
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
  .add('Button Input', withMarkdownNotes(GridSystemNotes)(() => {
    const size = select('Size', GRID_ARRAY, 3)
    const offset = select('Offset', [0, ...GRID_ARRAY], 4)
    const type = select('Types', BUTTON_TYPES, 'primary')
    const textButton = text('Label', 'Click me')

    return ({
      components: { ButtonInput, GridColumn },
      template: `
        <GridColumn :class="getClass">
          <ButtonInput
            :text="text"
            :type="type"
            @click="action"
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
          text: textButton,
          type: type,
          size: size,
          offset: offset
        }
      },
      methods: {
        action: action('clicked')
      }
    })
  }))
