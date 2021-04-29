import { render, waitFor } from '@margarita/margarita-test-utils'
import MaTabs from '.'
import MaTab from '../MaTab'

describe('Tabs', () => {
  test('adds spacing classes', async () => {
    const { getByText } = renderComponent()

    await waitFor(() => expect(getByText('Tab1')).toBeVisible())
    expect(getByText('Tab2')).not.toBeVisible()
    expect(getByText('Tab3')).not.toBeVisible()
  })
})

function renderComponent(options = {}) {
  const utils = render(MaTabs, {
    components: { MaTab },
    slots: {
      default: `
        <ma-tab>
          <template #header>Header Tab1</template>
          Tab1
        </ma-tab>
        <ma-tab>
          <template #header>Header Tab2</template>
          Tab2
        </ma-tab>
        <ma-tab>
          <template #header>Header Tab3</template>
          Tab3
        </ma-tab>
      `,
    },
    ...options,
  })

  return {
    ...utils,
  }
}
