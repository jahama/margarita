import { storiesOf } from '@storybook/vue'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import GridColumn from '@margarita/components/GridColumn'

import notes from './Pill.md'
import Pill from './Pill'

const AVAILABLE_COLORS = ['green', 'orange', 'red', 'gray', 'dark']

storiesOf('Pill', module)
  .addDecorator(withKnobs)
  .add(
    'Pill',
    () => {
      const color = select('Color', AVAILABLE_COLORS, 'green')
      const pillText = text('Pill Text', 'Active')

      return {
        components: { Pill, GridColumn },

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
