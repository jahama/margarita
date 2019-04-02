import { render, fireEvent, cleanup } from 'vue-testing-library'
import RangeInput from './RangeInput'

const RangeInputBuilder = customProps => render(RangeInput, {
  props: {
    value: 'value1',
    steps: [
      { value: 'value1', text: 'step value' },
      { value: 'value2', text: 'second value' },
    ],
    ...customProps,
  },
})

describe('RangeInput', () => {
  afterEach(cleanup)

  it('should render a range input element', () => {
    const wrapper = RangeInputBuilder()

    wrapper.getByText(/step value/i)
    wrapper.getByText(/second value/i)

    expect(wrapper.getByTestId('range-input__native-element').value).toBe('0')
  })

  it('should select the clicked element', () => {
    const wrapper = RangeInputBuilder()

    expect(wrapper.getByTestId('range-input__native-element').value).toBe('0')
    expect(wrapper.emitted()).toEqual({})

    fireEvent.click(wrapper.getByText(/second value/i))

    expect(wrapper.emitted().input[0]).toEqual([ 'value2' ])
  })

  it('should render a label if prop is passed', () => {
    const wrapper = RangeInputBuilder({
      label: 'Custom Label',
    })

    wrapper.getByLabelText(/custom label/i)
  })
})
