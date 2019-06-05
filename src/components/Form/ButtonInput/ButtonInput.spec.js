import { render, fireEvent, cleanup } from '@testing-library/vue'
import ButtonInput from './ButtonInput'

afterEach(cleanup)

describe('ButtonInput', () => {
  it('should render a button element by default', () => {
    const { getByText, getByTestId } = render(ButtonInput, {
      slots: { default: 'Hello World' },
    })

    getByText(/Hello World/i)

    expect(getByTestId('button-input').tagName.toLowerCase()).toEqual('button')
    expect(getByTestId('button-input').type).toEqual('submit')
  })

  it('should render a link element on passing the right prop', () => {
    const { getByTestId } = render(ButtonInput, {
      props: { tag: 'a' },
    })

    expect(getByTestId('button-input').tagName.toLowerCase()).toEqual('a')
  })

  it('should emit on click', async () => {
    const { emitted, getByTestId } = render(ButtonInput)

    await fireEvent.click(getByTestId('button-input'))

    expect(emitted().click).toBeTruthy()
  })

  it('should be render a disabled button if disabled prop is passed', () => {
    const { getByTestId } = render(ButtonInput, {
      props: { disabled: true },
    })

    expect(getByTestId('button-input').disabled).toBeTruthy()
  })

  it('should render on loading state when loading prop is passed', () => {
    const { getByTestId } = render(ButtonInput, {
      props: { loading: true },
    })

    expect(getByTestId('button-input').disabled).toBeTruthy()
    getByTestId('button-input-spinner')
  })
})
