import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import notes from './notes/StatusPill.md'
import GridColumn from '../../Grid/GridColumn/GridColumn'
import PaginationBar from '../PaginationBar/PaginationBar'

storiesOf('Components', module)
  .addDecorator(withKnobs)

  .add('Pagination Bar', () => {
    const from = text('From', '51')
    const totalItems = text('Total items', '25000')
    const to = text('To', '100')
    const isStart = boolean('Is first page', false)
    const isEnd = boolean('Is last page', false)

    return ({
      components: { PaginationBar, GridColumn },

      template: `
        <GridColumn>
          <PaginationBar
            :is-start="isStart"
            :is-end="isEnd"
            @pagination="changePage"
          >
            <span>
              Viendo del <strong>{{ from }}</strong> al <strong>{{ to }}</strong><br>
              de {{ totalItems }} contratos en total
            </span>
          </PaginationBar>
        </GridColumn>`,

      props: {
        from: {
          default: from
        },
        totalItems: {
          default: totalItems
        },
        to: {
          default: to
        },
        isStart: {
          default: isStart
        },
        isEnd: {
          default: isEnd
        }
      },

      methods: {
        changePage: action('clicked')
      }
    })
  }, { notes })
