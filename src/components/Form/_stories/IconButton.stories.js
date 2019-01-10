import { storiesOf } from '@storybook/vue'
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import GridColumn from '../../Grid/GridColumn/GridColumn'
import GridSystemNotes from '../../Grid/_stories/notes/GridSystem.md'
import IconButton from '../IconButton/IconButton'

const BUTTON_TYPES = [ 'primary', 'secondary' ]
const ICONS_BUTTON = [ 'download-contract', 'details-contract', 'add-contract' ]

storiesOf('Form Components', module)
  .addDecorator(withKnobs)

  .add('Icon Button', withMarkdownNotes(GridSystemNotes)(() => {
    const backgroundType = select('Background Types', BUTTON_TYPES, 'primary')
    const rounded = boolean('Rounded', false)
    const icon = select('Icons', ICONS_BUTTON, 'download-contract')
    const size = number('Height size in px', 50)

    return ({
      components: { IconButton, GridColumn },

      template: `
          <IconButton
            @click="action"
            :icon="icon"
            :type="backgroundType"
            :rounded="rounded"
            :size="size"
          />`,

      data () {
        return {
          backgroundType: backgroundType,
          rounded: rounded,
          icon: icon,
          size: size
        }
      },

      methods: {
        action: action('clicked')
      }
    })
  }))
