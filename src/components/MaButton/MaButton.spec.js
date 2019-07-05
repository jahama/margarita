import { render, fireEvent, cleanup } from '@testing-library/vue'
import MaButton from './MaButton'

afterEach(cleanup)

describe('Button', () => {
  it('should render a button element by default', () => {
    const { getByText, getByTestId } = render(MaButton, {
      slots: { default: 'Hello World' },
    })

    getByText(/Hello World/i)

    expect(getByTestId('button').tagName.toLowerCase()).toEqual('button')
    expect(getByTestId('button').type).toEqual('submit')
  })

  it('should render a link element on passing the right prop', () => {
    const { getByTestId } = render(MaButton, {
      props: { tag: 'a' },
    })

    expect(getByTestId('button').tagName.toLowerCase()).toEqual('a')
  })

  it('should emit on click', async () => {
    const { emitted, getByTestId } = render(MaButton)

    await fireEvent.click(getByTestId('button'))

    expect(emitted().click).toBeTruthy()
  })

  it('should be render a disabled button if disabled prop is passed', () => {
    const { getByTestId } = render(MaButton, {
      props: { disabled: true },
    })

    expect(getByTestId('button').disabled).toBeTruthy()
  })

  it('should render on loading state when loading prop is passed', () => {
    const { getByTestId } = render(MaButton, {
      props: { loading: true },
    })

    expect(getByTestId('button').disabled).toBeTruthy()
    getByTestId('button-spinner')
  })
})
