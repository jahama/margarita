/* eslint-disable no-console */
import { render, fireEvent } from '@margarita/margarita-test-utils'
import MaButton from './MaButton'

describe('Button', () => {
  test('renders a button element by default', () => {
    const { getByText, getByRole } = render(MaButton, {
      slots: { default: 'Hello World' },
    })

    expect(getByText(/Hello World/i)).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
  })

  test('renders a link element on using the prop tag and warns', () => {
    const originalWarn = console.warn
    console.warn = jest.fn()

    const href = 'http://link.com/'

    const { getByRole } = render(MaButton, {
      props: { tag: 'a', href },
    })

    expect(getByRole('link')).toHaveAttribute('href', href)

    expect(console.warn).toHaveBeenCalledTimes(1)
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining(
        `tag prop is deprecated and will be removed in a future version`
      )
    )

    console.warn = originalWarn
  })

  test('emits on click', async () => {
    const { emitted, getByRole } = render(MaButton)

    await fireEvent.click(getByRole('button'))

    expect(emitted()).toHaveProperty('click')
    expect(emitted().click).toHaveLength(1)
  })

  test('renders a disabled button if disabled prop is passed', () => {
    const { getByRole } = render(MaButton, {
      props: { disabled: true },
    })

    expect(getByRole('button')).toBeDisabled()
  })

  test('renders a loading state if loading prop is passed', () => {
    const { getByTitle, getByRole } = render(MaButton, {
      props: { loading: true },
    })

    expect(getByRole('button')).toBeDisabled()
    expect(getByTitle(/loading/i)).toBeInTheDocument()
  })
})
