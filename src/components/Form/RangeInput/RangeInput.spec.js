import { render, fireEvent, cleanup } from '@testing-library/vue'
import RangeInput from './RangeInput'

const RangeInputBuilder = customProps =>
  render(RangeInput, {
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
    const { getByTestId, getByText } = RangeInputBuilder()

    getByText(/step value/i)
    getByText(/second value/i)

    expect(getByTestId('range-input__native-element').value).toBe('0')
  })

  it('should select the clicked element', async () => {
    const { getByTestId, getByText, emitted } = RangeInputBuilder()

    expect(getByTestId('range-input__native-element').value).toBe('0')
    expect(emitted()).toEqual({})

    await fireEvent.click(getByText(/second value/i))

    expect(emitted().input[0]).toEqual(['value2'])
  })

  it('should render a label if prop is passed', () => {
    const { getByLabelText } = RangeInputBuilder({
      label: 'Custom Label',
    })

    getByLabelText(/custom label/i)
  })
})
