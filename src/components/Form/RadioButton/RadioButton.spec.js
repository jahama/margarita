import { render, fireEvent, cleanup } from 'vue-testing-library'
import RadioButton from './RadioButton'

const RadioButtonBuilder = customProps => render(RadioButton, {
  props: {
    items: [
      { value: 'value1', text: 'text1' },
      { value: 'value2', text: 'text2' },
      { value: 'value3', text: 'text3' },
    ],
    ...customProps,
  },
})

describe('RadioButton', () => {
  afterEach(cleanup)

  it('should render a radio element', () => {
    const wrapper = RadioButtonBuilder()

    wrapper.getByLabelText(/text1/i)
    wrapper.getByLabelText(/text2/i)
    wrapper.getByLabelText(/text3/i)
    wrapper.getByDisplayValue(/value1/i)
    wrapper.getByDisplayValue(/value2/i)
    wrapper.getByDisplayValue(/value3/i)
  })

  it('should render a link element on passing the right prop', () => {
    const wrapper = RadioButtonBuilder()

    fireEvent.click(wrapper.getByLabelText(/text2/i))

    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0]).toEqual([ 'value2' ])
  })

  it('should render a disabled radio element', () => {
    const wrapper = RadioButtonBuilder({ disabled: true })

    expect(wrapper.getByDisplayValue(/value3/i).disabled).toBe(true)
  })
})
