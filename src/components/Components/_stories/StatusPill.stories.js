import { storiesOf } from '@storybook/vue'
import { withKnobs, select, text } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import StatusPillNotes from './notes/StatusPill.md'
import GridColumn from '../../Grid/GridColumn/GridColumn'
import StatusPill from '../StatusPill/StatusPill'

const AVAILABLE_COLORS = [
  'green',
  'orange',
  'red'
]

storiesOf('Components', module)
  .addDecorator(withKnobs)

  .add('Status Pill', withMarkdownNotes(StatusPillNotes)(() => {
    const color = select('Color', AVAILABLE_COLORS, 'green')
    const pillText = text('Pill Text', 'Active')

    return ({
      components: { StatusPill, GridColumn },

      template: `
        <GridColumn>
          <StatusPill
            :color="color"
            :text="pillText"
          />
        </GridColumn>`,

      data () {
        return {
          color,
          pillText
        }
      }
    })
  }))
