import { storiesOf } from '@storybook/vue'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import notes from './notes/StatusPill.md'
import GridColumn from '../../Grid/GridColumn/GridColumn'
import StatusPill from '../StatusPill/StatusPill'

const AVAILABLE_COLORS = ['green', 'orange', 'red', 'gray', 'dark']

storiesOf('Components', module)
  .addDecorator(withKnobs)

  .add(
    'Status Pill',
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
