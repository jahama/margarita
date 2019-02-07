import { storiesOf } from '@storybook/vue'
import { withKnobs, select, text, boolean, number } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import GridColumn from '../../Grid/GridColumn/GridColumn'
import GridRow from '../../Grid/GridRow/GridRow'
import ButtonInputNotes from '../../Form/_stories/notes/ButtonInput.md'
import ButtonInput from '../ButtonInput/ButtonInput'

const BUTTON_TYPES = [ 'primary', 'secondary', 'gradient', 'no-background' ]
const ICONS_BUTTON = [
  'AddContract',
  'Arrow',
  'ArrowToEnd',
  'BulbOn',
  'DetailsContract',
  'DownloadContract',
  'Exit',
  'Gas',
  'Logo',
  'LongArrow',
  'None',
  'Phone',
  'Plug',
  'User'
]

const HTML_TAGS = [ 'button', 'a' ]

storiesOf('Form Components', module)
  .addDecorator(withKnobs)

  .add('Button Input', withMarkdownNotes(ButtonInputNotes)(() => {
    const iconSize = number('Icon height size in px', 18)
    const rounded = boolean('Rounded', false)
    const type = select('Types', BUTTON_TYPES, 'primary')
    const icon = select('Icons', ICONS_BUTTON, 'None')
    const tag = select('HTML tag', HTML_TAGS, 'button')
    const textButton = text('Text', 'Click me')

    return ({
      components: { ButtonInput, GridColumn, GridRow },

      template: `
      <div>
        <h2>Dynamic button:</h2>
        <GridRow>
          <GridColumn
            class="grid-col--3"
          >
            <ButtonInput
              @click="action"
              :text="text"
              :rounded="rounded"
              :icon="getIcon"
              :iconSize="iconSize"
              :type="type"
              :tag="tag"
            />
        </GridColumn>
        </GridRow>

        <h2>Examples:</h2>
        <GridRow>
          <GridColumn
            class="grid-col--3"
          >
            <ButtonInput
              text="Esto es un link"
              tag="a"
              type="gradient"
              href="https://www.holaluz.com/"
            />
          </GridColumn>
          <GridColumn
            class="grid-col--1"
          >
            <ButtonInput
              icon="DownloadContract"
              iconAlt="download contract icon"
              rounded
              :iconSize="50"
              type="secondary"
            />
          </GridColumn>
          <GridColumn
            class="grid-col--3"
          >
            <ButtonInput
              text="Esto es un texto con icono"
              icon="DownloadContract"
              iconAlt="download contract icon"
            />
          </GridColumn>
          <GridColumn
            class="grid-col--3"
          >
            <ButtonInput
              text="Esto es un link"
              type="no-background"
              href="https://www.holaluz.com/"
              tag="a"
            />
          </GridColumn>
        </GridRow>
      </div>`,

      computed: {
        getIcon () {
          return this.icon === 'None' ? null : this.icon
        }
      },

      data () {
        return {
          text: textButton,
          type: type,
          rounded: rounded,
          iconSize: iconSize,
          icon: icon,
          tag: tag
        }
      },

      methods: {
        action: action('clicked')
      }
    })
  }))
