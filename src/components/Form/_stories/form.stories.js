import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import GridSystemNotes from '../../MContainer/notes/GridSystem.md'

import TextInput from '../TextInput/TextInput'
import SelectInput from '../SelectInput/SelectInput'
import MCol from '../../MCol/MCol.vue'

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
      components: { TextInput, MCol },
      template: `
      <MCol :class="getClass">
        <TextInput
          id="paco"
          :label="label"
          :hasError="hasError"
          :errorMessage="errorMessage"
        />
      </MCol>`,
      computed: {
        getClass () {
          const classes = [ `m-col--${this.size}` ]
          const offset = Number(this.offset)

          if (offset) classes.push(`m-col--offset-${offset}`)
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
    components: { MCol, SelectInput },
    data () {
      return {
        options: ['Anna', 'Marina', 'Mavi', 'Xabi'],
        errorMessage: 'You have an error'
      }
    },
    template: `
    <MCol class="m-col--4 m-col--offset-4">
      <SelectInput
              id="blabla"
              label="select field"
              :errorMessage="errorMessage"
              :hasError="true"
              :options="options" />
    </MCol>`
  }))
