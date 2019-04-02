import { render, fireEvent, cleanup } from 'vue-testing-library'
import ButtonInput from './ButtonInput'

describe('ButtonInput', () => {
  afterEach(cleanup)

  it('should render a button element by default', () => {
    const wrapper = render(ButtonInput, {
      slots: { default: 'Hello World' },
    })

    wrapper.getByText(/Hello World/i)

    expect(wrapper.getByTestId('button-input').tagName.toLowerCase())
      .toEqual('button')
    expect(wrapper.getByTestId('button-input').type).toEqual('submit')
  })

  it('should render a link element on passing the right prop', () => {
    const wrapper = render(ButtonInput, {
      props: { tag: 'a' },
    })

    expect(wrapper.getByTestId('button-input').tagName.toLowerCase())
      .toEqual('a')
  })

  it('should emit on click', () => {
    const wrapper = render(ButtonInput)

    fireEvent.click(wrapper.getByTestId('button-input'))

    expect(wrapper.emitted().click).toBeTruthy()
  })

  it('should be render a disabled button if disabled prop is passed', () => {
    const wrapper = render(ButtonInput, {
      props: { disabled: true },
    })

    expect(wrapper.getByTestId('button-input').disabled).toBeTruthy()
  })

  it('should render on loading state when loading prop is passed', () => {
    const wrapper = render(ButtonInput, {
      props: { loading: true },
    })

    expect(wrapper.getByTestId('button-input').disabled).toBeTruthy()
    wrapper.getByTestId('button-input-spinner')
  })
})
