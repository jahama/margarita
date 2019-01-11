import { storiesOf } from '@storybook/vue'
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import GridColumn from '../../Grid/GridColumn/GridColumn'
import IconButtonNotes from '../../Form/_stories/notes/IconButton.md'
import IconButton from '../IconButton/IconButton'

const BUTTON_TYPES = [ 'primary', 'secondary', 'no-background' ]
const ICONS_BUTTON = [ 'DownloadContract', 'DetailsContract', 'AddContract', 'Arrow', 'ArrowToEnd', 'Exit' ]
const HTML_TAGS = [ 'button', 'a' ]

storiesOf('Form Components', module)
  .addDecorator(withKnobs)

  .add('Icon Button', withMarkdownNotes(IconButtonNotes)(() => {
    const backgroundType = select('Background Types', BUTTON_TYPES, 'primary')
    const rounded = boolean('Rounded', false)
    const icon = select('Icons', ICONS_BUTTON, 'DownloadContract')
    const tag = select('HTML tag', HTML_TAGS, 'button')
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
            :tag="tag"
          />`,

      data () {
        return {
          backgroundType: backgroundType,
          rounded: rounded,
          icon: icon,
          size: size,
          tag: tag
        }
      },

      methods: {
        action: action('clicked')
      }
    })
  }))
