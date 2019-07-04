import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import MaGridColumn from '@margarita/components/MaGridColumn'
import MaPaginationBar from '@margarita/components/MaPaginationBar'

storiesOf('PaginationBar', module)
  .addDecorator(withKnobs)
  .add('PaginationBar', () => {
    const from = text('From', '51')
    const totalItems = text('Total items', '25000')
    const to = text('To', '100')
    const isStart = boolean('Is first page', false)
    const isEnd = boolean('Is last page', false)

    return {
      components: { MaPaginationBar, MaGridColumn },

      template: `
        <ma-grid-column>
          <ma-pagination-bar
            :is-start="isStart"
            :is-end="isEnd"
            @pagination="changePage"
          >
            <span>
              Viendo del <strong>{{ from }}</strong> al <strong>{{ to }}</strong><br>
              de {{ totalItems }} contratos en total
            </span>
          </ma-pagination-bar>
        </ma-grid-column>`,

      props: {
        from: {
          default: from,
        },
        totalItems: {
          default: totalItems,
        },
        to: {
          default: to,
        },
        isStart: {
          default: isStart,
        },
        isEnd: {
          default: isEnd,
        },
      },

      methods: {
        changePage: action('clicked'),
      },
    }
  })
