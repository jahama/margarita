import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import MaGridColumn from '@margarita/components/MaGridColumn'
import MaPagination from '@margarita/components/MaPagination'

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .add('Pagination', () => {
    const from = text('From', '51')
    const totalItems = text('Total items', '25000')
    const to = text('To', '100')
    const isStart = boolean('Is first page', false)
    const isEnd = boolean('Is last page', false)

    return {
      components: { MaPagination, MaGridColumn },

      template: `
        <ma-grid-column>
          <ma-pagination
            :is-start="isStart"
            :is-end="isEnd"
            @pagination="changePage"
          >
            <span>
              Viendo del <strong>{{ from }}</strong> al <strong>{{ to }}</strong><br>
              de {{ totalItems }} contratos en total
            </span>
          </ma-pagination>
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
