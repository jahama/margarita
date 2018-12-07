import { storiesOf } from '@storybook/vue'
import { withKnobs, select } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import StatusPillNotes from './notes/StatusPill.md'
import GridColumn from '../../Grid/GridColumn/GridColumn'
import StatusPill from '../StatusPill/StatusPill'

const STATUS_TYPES = [
  'active',
  'awaiting-validation',
  'cancellation-in-process',
  'cancelled',
  'disconnection-in-process',
  'error',
  'in-process',
  'non-payment-disconnection',
  'not-started',
]

storiesOf('Data Table', module)
  .addDecorator(withKnobs)

  .add('Status Pill', withMarkdownNotes(StatusPillNotes)(() => {
    const status = select('Status', STATUS_TYPES, 'active')

    return ({
      components: { StatusPill, GridColumn },

      template: `
        <GridColumn>
          <StatusPill
            :status="status"
          />
        </GridColumn>`,

      data () {
        return {
          status: status,
        }
      }
    })
  }))
