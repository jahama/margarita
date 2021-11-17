/* eslint-disable no-console */
import { render } from '@margarita/margarita-test-utils'
import MaList from './MaList'
import { spacing } from '../../tokens'

describe('List', () => {
  test('renders item from list', () => {
    const { getByText, getAllByRole } = renderComponent()

    const firstItem = getByText('Item 1')
    const firstListItem = getAllByRole('listitem')[0]

    expect(firstListItem).toHaveClass('ma-list-item')
    expect(firstListItem).toContainElement(firstItem)
  })

  describe(`type component's property`, () => {
    test(`renders default list style`, () => {
      const { getByRole, getAllByText } = renderComponent()

      expect(getByRole('list').nodeName).toBe('UL')
      expect(getAllByText('•')).toHaveLength(2)
    })

    test(`renders the valid provided tag element`, () => {
      const { getByRole, getByText } = renderComponent({ type: 'ordered' })

      expect(getByRole('list').nodeName).toBe('OL')
      expect(getByText('1.')).toBeInTheDocument()
      expect(getByText('2.')).toBeInTheDocument()
    })

    test(`renders checked list style`, () => {
      const { getByRole, getAllByTitle } = renderComponent({ type: 'check' })

      expect(getByRole('list').nodeName).toBe('UL')
      expect(getAllByTitle('Checkmark Icon')).toHaveLength(2)
    })
  })

  test(`warns if no items have been defined`, () => {
    jest.spyOn(console, 'warn').mockImplementationOnce(() => {})
    renderComponent(null, {
      slots: {
        default: [],
      },
    })

    expect(console.warn).toHaveBeenCalledWith(
      '[List component] No list items found'
    )
  })

  test('renders space from prop', () => {
    const { getByRole } = renderComponent({ space: 'medium' })

    expect(getByRole('list')).toHaveStyle({
      '--stack-gap': spacing.medium,
    })
  })

  test('keeps additional data', () => {
    const { getByRole } = render({
      components: { MaList },
      template: `
      <ma-list class="test-class"><ma-text>Item 1</ma-text></ma-list>
      `,
    })
    expect(getByRole('list')).toHaveClass('test-class')
  })
})

function renderComponent(props = {}, params = {}) {
  return render(MaList, {
    props,
    slots: {
      default: ['<ma-text>Item 1</ma-text><ma-text>Item 2</ma-text>'],
    },
    ...params,
  })
}
