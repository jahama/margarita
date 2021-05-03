import { render, waitFor } from '@margarita/margarita-test-utils'
import userEvent from '@testing-library/user-event'
import MaTabs from '.'
import MaTab from '../MaTab'

describe('Tabs', () => {
  test('toggles through tabs', async () => {
    const { queryByText, getByText } = renderComponent()

    await waitFor(() => expect(getByText('Content Tab1')).toBeVisible())
    expect(queryByText('Content Tab2')).not.toBeInTheDocument()
    expect(queryByText('Content Tab3')).not.toBeInTheDocument()

    userEvent.click(getByText('Header Tab2'))

    await waitFor(() => expect(getByText('Content Tab2')).toBeVisible())
    expect(queryByText('Content Tab1')).not.toBeInTheDocument()

    userEvent.click(getByText('Header Tab1'))

    await waitFor(() => expect(getByText('Content Tab1')).toBeVisible())
    expect(queryByText('Content Tab2')).not.toBeInTheDocument()
  })
})

function renderComponent(options = {}) {
  const utils = render(MaTabs, {
    components: { MaTab },
    slots: {
      default: `
        <ma-tab title="Header Tab1">
          Content Tab1
        </ma-tab>
        <ma-tab title="Header Tab2">
          Content Tab2
        </ma-tab>
        <ma-tab title="Header Tab3">
          Content Tab3
        </ma-tab>
      `,
    },
    ...options,
  })

  return {
    ...utils,
  }
}
