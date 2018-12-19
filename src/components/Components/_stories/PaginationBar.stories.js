import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import StatusPillNotes from './notes/StatusPill.md'
import GridColumn from '../../Grid/GridColumn/GridColumn'
import PaginationBar from '../PaginationBar/PaginationBar'

storiesOf('Components', module)
  .addDecorator(withKnobs)

  .add('Pagination Bar', withMarkdownNotes(StatusPillNotes)(() => {
    let currentContracts = {
      from: text('From', '51'),
      totalItems: text('Total items', '25000'),
      to: text('To', '100'),
      isStart: boolean('Is first page', false),
      isEnd: boolean('Is last page', false)
    }

    return ({
      components: { PaginationBar, GridColumn },

      template: `
        <GridColumn>
          <PaginationBar
            :is-start="currentContracts.isStart"
            :is-end="currentContracts.isEnd"
            @pagination="changePage"
          >
            <span>
              Viendo del <strong>{{ currentContracts.from }}</strong> al <strong>{{ currentContracts.to }}</strong><br>
              de {{ currentContracts.totalItems }} contratos en total
            </span>
          </PaginationBar>
        </GridColumn>`,

      data () {
        return {
          currentContracts
        }
      },

      methods: {
        changePage: action('clicked')
      }
    })
  }))
