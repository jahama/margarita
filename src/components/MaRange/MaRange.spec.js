import { render, fireEvent, cleanup } from '@testing-library/vue'
import MaRange from './MaRange'

afterEach(cleanup)

const RangeBuilder = customProps =>
  render(MaRange, {
    props: {
      value: 'value1',
      steps: [
        { value: 'value1', text: 'step value' },
        { value: 'value2', text: 'second value' },
      ],
      ...customProps,
    },
  })

describe('Range', () => {
  it('should render a range input element', () => {
    const { getByTestId, getByText } = RangeBuilder()

    getByText(/step value/i)
    getByText(/second value/i)

    expect(getByTestId('ma-range__native-element').value).toBe('0')
  })

  it('should select the clicked element', async () => {
    const { getByTestId, getByText, emitted } = RangeBuilder()

    expect(getByTestId('ma-range__native-element').value).toBe('0')
    expect(emitted()).toEqual({})

    await fireEvent.click(getByText(/second value/i))

    expect(emitted().input[0]).toEqual(['value2'])
  })

  it('should render a label if prop is passed', () => {
    const { getByLabelText } = RangeBuilder({
      label: 'Custom Label',
    })

    getByLabelText(/custom label/i)
  })
})
