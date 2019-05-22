import { render, fireEvent, cleanup } from 'vue-testing-library'
import TextInput from './TextInput'

const TextInputBuilder = (customProps, customParams) =>
  render(TextInput, {
    props: {
      label: 'input label',
      ...customProps,
    },
    ...customParams,
  })

describe('TextInput', () => {
  afterEach(cleanup)

  it('should render an input element with a label', () => {
    const { getByLabelText } = TextInputBuilder()

    expect(getByLabelText(/input label/i).type).toEqual('text')
  })

  it('should render a button element with a label', () => {
    const { getByLabelText } = TextInputBuilder({ type: 'button ' })

    expect(getByLabelText(/input label/i).type.trim()).toEqual('button')
  })

  it('should have error CSS class', () => {
    const { getByText, getByLabelText } = TextInputBuilder({
      hasError: true,
      errorMessage: 'Something went wrong',
    })

    expect(
      getByLabelText(/input label/i).classList.contains(
        'text-input__field--error'
      )
    ).toBeTruthy()

    expect(getByText(/Something went wrong/i))
  })

  it('should be disabled', () => {
    const { getByLabelText } = TextInputBuilder({ disabled: true })

    expect(getByLabelText(/input label/i).disabled).toBeTruthy()
  })

  it('should have custom id', () => {
    const { getByLabelText, getByText } = TextInputBuilder({ id: 'customId' })

    expect(getByText(/input label/i).getAttribute('for')).toBe('customId')
    expect(getByLabelText(/input label/i).id).toBe('customId')
  })

  it('should have initial value', () => {
    const { getByDisplayValue } = TextInputBuilder({ value: 'initial value' })

    getByDisplayValue(/initial value/i)
  })

  it('should trigger input event with its value when typing', () => {
    const { getByDisplayValue, getByLabelText, emitted } = TextInputBuilder({
      value: 'initial value',
    })

    fireEvent.input(getByLabelText(/input label/i), {
      target: { value: '42' },
    })

    getByDisplayValue(/42/i)
    expect(emitted().input).toBeTruthy()
    expect(emitted().input[0]).toContain('42')
  })

  it('should trigger change event with its value when typing', async () => {
    const { getByLabelText, emitted } = TextInputBuilder()

    fireEvent.change(getByLabelText(/input label/i))

    expect(emitted().change).toBeTruthy()
  })

  it('should emit its value on blur', () => {
    const { getByLabelText, emitted } = TextInputBuilder()

    fireEvent.blur(getByLabelText(/input label/i))

    expect(emitted().blur).toBeTruthy()
  })

  it('should emit its value on Enter', () => {
    const { getByLabelText, emitted } = TextInputBuilder()

    fireEvent.keyUp(getByLabelText(/input label/i), {
      key: 'Enter',
      code: 13,
    })

    expect(emitted().enter).toBeTruthy()
  })

  it('should render the inputSibling slot if provided', () => {
    const SLOT_CONTENT = 'Test slot'
    const { getByText } = TextInputBuilder(null, {
      slots: {
        inputSibling: SLOT_CONTENT,
      },
    })

    getByText(SLOT_CONTENT)
  })

  it('should render the labelSibling slot if provided', () => {
    const SLOT_CONTENT = 'Test slot'
    const { getByText } = TextInputBuilder(null, {
      slots: {
        labelSibling: SLOT_CONTENT,
      },
    })

    getByText(SLOT_CONTENT)
  })
})
