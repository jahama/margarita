import { storiesOf } from '@storybook/vue'
import { withKnobs, select, text, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import GridColumn from '../../Grid/GridColumn/GridColumn'
import GridRow from '../../Grid/GridRow/GridRow'
import notes from '../../Form/_stories/notes/ButtonInput.md'
import ButtonInput from '../ButtonInput/ButtonInput'
import IconBase from '../../Components/Icons/IconBase'

const BUTTON_CATEGORIES = [ 'primary', 'secondary', 'gradient', 'no-background' ]
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
  'User',
]

const HTML_TAGS = [ 'button', 'a' ]

storiesOf('Form Components', module)
  .addDecorator(withKnobs)

  .add('Button Input', () => {
    const category = select('Categories', BUTTON_CATEGORIES, 'primary')
    const textButton = text('Text', 'Click me')
    const loading = boolean('Loading', false)
    const icon = select('Icons', ICONS_BUTTON, 'None')
    const iconSize = number('Icon height size in px', 18)
    const fluid = boolean('Fluid', false)
    const rounded = boolean('Rounded', false)
    const ariaLabel = text('Aria Label', '')
    const disabled = boolean('Disabled', false)
    const tag = select('HTML tag', HTML_TAGS, 'button')

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
              :category="category"
              :tag="tag"
              :fluid="fluid"
              :disabled="disabled"
              :loading="loading"
              :aria-label="ariaLabel"
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
            align-start
          >
            <ButtonInput
              category="gradient"
            >
            This is a button with text only
            </ButtonInput>
          </GridColumn>
          <GridColumn
            class="grid-col--1"
            align-start
          >
            <ButtonInput
              aria-label="Download PDF"
              rounded
              category="primary"
            >
              <IconBase
                icon="DownloadContract"
                width="35"
                height="35"
              />
            </ButtonInput>
          </GridColumn>
          <GridColumn
            class="grid-col--3"
            align-start
          >
            <ButtonInput>
              This is a button with text and icon
              <IconBase
                icon="Arrow"
              />
            </ButtonInput>
          </GridColumn>
          <GridColumn
            class="grid-col--3"
            align-start
          >
            <ButtonInput
              category="no-background"
              href="https://www.holaluz.com/"
              tag="a"
            >
              This is a link with text and icon
              <IconBase
                icon="Exit"
              />
            </ButtonInput>
          </GridColumn>
        </GridRow>
      </div>`,

      computed: {
        getIcon () {
          return this.icon === 'None' ? null : this.icon
        },
      },

      props: {
        ariaLabel: {
          default: ariaLabel,
        },
        disabled: {
          default: disabled,
        },
        fluid: {
          default: fluid,
        },
        icon: {
          default: icon,
        },
        iconSize: {
          default: iconSize,
        },
        loading: {
          default: loading,
        },
        rounded: {
          default: rounded,
        },
        tag: {
          default: tag,
        },
        text: {
          default: textButton,
        },
        category: {
          default: category,
        },
      },

      methods: {
        action: action('clicked'),
      },
    })
  }, { notes })
