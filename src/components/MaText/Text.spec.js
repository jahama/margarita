import { render, fireEvent, cleanup } from '@testing-library/vue'
import Text from './Text'

afterEach(cleanup)

const TextBuilder = (customProps, customParams) =>
  render(Text, {
    props: {
      label: 'input label',
      ...customProps,
    },
    ...customParams,
  })

describe('Text', () => {
  it('should render an input element with a label', () => {
    const { getByLabelText } = TextBuilder()

    expect(getByLabelText(/input label/i).type).toEqual('text')
  })

  it('should render a button element with a label', () => {
    const { getByLabelText } = TextBuilder({ type: 'button ' })

    expect(getByLabelText(/input label/i).type.trim()).toEqual('button')
  })

  it('should have error CSS class', () => {
    const { getByText, getByLabelText } = TextBuilder({
      hasError: true,
      errorMessage: 'Something went wrong',
    })

    expect(
      getByLabelText(/input label/i).classList.contains('text__field--error')
    ).toBeTruthy()

    expect(getByText(/Something went wrong/i))
  })

  it('should be disabled', () => {
    const { getByLabelText } = TextBuilder({ disabled: true })

    expect(getByLabelText(/input label/i).disabled).toBeTruthy()
  })

  it('should have custom id', () => {
    const { getByLabelText, getByText } = TextBuilder({ id: 'customId' })

    expect(getByText(/input label/i).getAttribute('for')).toBe('customId')
    expect(getByLabelText(/input label/i).id).toBe('customId')
  })

  it('should have initial value', () => {
    const { getByDisplayValue } = TextBuilder({ value: 'initial value' })

    getByDisplayValue(/initial value/i)
  })

  it('should trigger input event with its value when typing', async () => {
    const { getByDisplayValue, getByLabelText, emitted } = TextBuilder({
      value: 'initial value',
    })

    await fireEvent.input(getByLabelText(/input label/i), {
      target: { value: '42' },
    })

    getByDisplayValue(/42/i)
    expect(emitted().input).toBeTruthy()
    expect(emitted().input[0]).toContain('42')
  })

  it('should trigger change event with its value when typing', async () => {
    const { getByLabelText, emitted } = TextBuilder()

    await fireEvent.change(getByLabelText(/input label/i))

    expect(emitted().change).toBeTruthy()
  })

  it('should emit its value on blur', async () => {
    const { getByLabelText, emitted } = TextBuilder()

    await fireEvent.blur(getByLabelText(/input label/i))

    expect(emitted().blur).toBeTruthy()
  })

  it('should emit its value on Enter', async () => {
    const { getByLabelText, emitted } = TextBuilder()

    await fireEvent.keyUp(getByLabelText(/input label/i), {
      key: 'Enter',
      code: 13,
    })

    expect(emitted().enter).toBeTruthy()
  })

  it('should render the inputSibling slot if provided', () => {
    const SLOT_CONTENT = 'Test slot'
    const { getByText } = TextBuilder(null, {
      slots: {
        inputSibling: SLOT_CONTENT,
      },
    })

    getByText(SLOT_CONTENT)
  })

  it('should render the labelSibling slot if provided', () => {
    const SLOT_CONTENT = 'Test slot'
    const { getByText } = TextBuilder(null, {
      slots: {
        labelSibling: SLOT_CONTENT,
      },
    })

    getByText(SLOT_CONTENT)
  })
})
