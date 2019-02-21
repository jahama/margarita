import { storiesOf } from '@storybook/vue'
import { withKnobs, select, text, boolean, number } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import GridColumn from '../../Grid/GridColumn/GridColumn'
import GridRow from '../../Grid/GridRow/GridRow'
import ButtonInputNotes from '../../Form/_stories/notes/ButtonInput.md'
import ButtonInput from '../ButtonInput/ButtonInput'
import IconBase from '../../Components/Icons/IconBase'

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
    const disabled = boolean('Disabled', false)
    const iconSize = number('Icon height size in px', 18)
    const rounded = boolean('Rounded', false)
    const type = select('Types', BUTTON_TYPES, 'primary')
    const icon = select('Icons', ICONS_BUTTON, 'None')
    const tag = select('HTML tag', HTML_TAGS, 'button')
    const textButton = text('Text', 'Click me')
    const ariaLabel = text('AriaLabel', '')

    return ({
      components: { ButtonInput, GridColumn, GridRow, IconBase },

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
              :type="type"
              :tag="tag"
              :disabled="disabled"
              :ariaLabel="ariaLabel"
            >
              <template v-if="text">
                {{ text }}
              </template>
              <IconBase
                v-if="getIcon"
                :width="iconSize"
                :height="iconSize"
                :icon="icon"
              />
            </ButtonInput>
          </GridColumn>
        </GridRow>

        <h2>Examples:</h2>
        <GridRow>
          <GridColumn
            class="grid-col--3"
          >
            <ButtonInput
              tag="a"
              type="gradient"
              href="https://www.holaluz.com/"
            >
              <IconBase
                icon="DownloadContract"
              />
              Esto es un link
            </ButtonInput>
          </GridColumn>
          <GridColumn
            class="grid-col--1"
          >
            <ButtonInput
              @click="action"
              rounded
              type="secondary"
            >
              <IconBase
                :width="50"
                :height="50"
                icon="DownloadContract"
              />
            </ButtonInput>
          </GridColumn>
          <GridColumn
            class="grid-col--3"
          >
            <ButtonInput
              href="https://www.holaluz.com/"
            >
              Esto es un texto con icono
              <IconBase
                icon="DownloadContract"
              />
            </ButtonInput>
          </GridColumn>
          <GridColumn
            class="grid-col--3"
          >
            <ButtonInput
              type="no-background"
              href="https://www.holaluz.com/"
              tag="a"
            >
              Esto es un link
            </ButtonInput>
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
          ariaLabel: ariaLabel,
          text: textButton,
          type: type,
          rounded: rounded,
          iconSize: iconSize,
          icon: icon,
          tag: tag,
          disabled: disabled
        }
      },

      methods: {
        action: action('clicked')
      }
    })
  }))
