import { storiesOf } from '@storybook/vue'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import GridColumn from '@margarita/components/GridColumn'

import notes from './StatusPill.md'
import StatusPill from './StatusPill'

const AVAILABLE_COLORS = ['green', 'orange', 'red', 'gray', 'dark']

storiesOf('StatusPill', module)
  .addDecorator(withKnobs)
  .add(
    'StatusPill',
    () => {
      const color = select('Color', AVAILABLE_COLORS, 'green')
      const pillText = text('Pill Text', 'Active')

      return {
        components: { StatusPill, GridColumn },

        template: `
        <grid-column>
          <status-pill
            :color="color"
            :text="pillText"
          />
        </grid-column>`,

        props: {
          color: {
            default: color,
          },
          pillText: {
            default: pillText,
          },
        },
      }
    },
    { notes }
  )
