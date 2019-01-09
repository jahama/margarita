import { storiesOf } from '@storybook/vue'
import { withKnobs, select, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import GridColumn from '../../Grid/GridColumn/GridColumn'
import GridSystemNotes from '../../Grid/_stories/notes/GridSystem.md'
import ButtonInput from '../ButtonInput/ButtonInput'

const GRID_ARRAY = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
const BUTTON_TYPES = [ 'primary', 'secondary', 'gradient' ]
const ICONS_BUTTON = [ 'icon-telephone-white', 'None' ]

storiesOf('Form Components', module)
  .addDecorator(withKnobs)

  .add('Icon Button', withMarkdownNotes(GridSystemNotes)(() => {
    const size = select('Size', GRID_ARRAY, 3)
    const offset = select('Offset', [ 0, ...GRID_ARRAY ], 4)
    const type = select('Types', BUTTON_TYPES, 'primary')
    const icon = select('Icons', ICONS_BUTTON, 'None')
    const textButton = text('Label', 'Click me')

    return ({
      components: { ButtonInput, GridColumn },

      template: `
        <GridColumn :class="getClass">
          <ButtonInput
            @click="action"
            :icon="icon"
            :type="type"
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
          text: textButton,
          type: type,
          size: size,
          icon: icon,
          offset: offset
        }
      },

      methods: {
        action: action('clicked')
      }
    })
  }))
