import { render, fireEvent, cleanup } from 'vue-testing-library'
import TextInput from './TextInput'

const TextInputBuilder = (customProps, customParams) => render(TextInput, {
  props: {
    label: 'input label',
    ...customProps,
  },
  ...customParams,
})

describe('TextInput', () => {
  afterEach(cleanup)

  it('should render an input element with a label', () => {
    const wrapper = TextInputBuilder()

    expect(wrapper.getByLabelText(/input label/i).type).toEqual('text')
  })

  it('should render a button element with a label', () => {
    const wrapper = TextInputBuilder({ type: 'button ' })

    expect(wrapper.getByLabelText(/input label/i).type.trim()).toEqual('button')
  })

  it('should have error CSS class', () => {
    const wrapper = TextInputBuilder({
      hasError: true,
      errorMessage: 'Something went wrong',
    })

    expect(
      wrapper.getByLabelText(/input label/i).classList.contains('text-input__field--error')
    ).toBeTruthy()

    expect(wrapper.getByText(/Something went wrong/i))
  })

  it('should be disabled', () => {
    const wrapper = TextInputBuilder({ disabled: true })

    expect(wrapper.getByLabelText(/input label/i).disabled).toBeTruthy()
  })

  it('should have custom id', () => {
    const wrapper = TextInputBuilder({ id: 'customId' })

    expect(wrapper.getByText(/input label/i).getAttribute('for'))
      .toBe('customId')
    expect(wrapper.getByLabelText(/input label/i).id).toBe('customId')
  })

  it('should have initial value', () => {
    const wrapper = TextInputBuilder({ value: 'initial value' })

    wrapper.getByDisplayValue(/initial value/i)
  })

  it('should trigger input event with its value when typing', () => {
    const wrapper = TextInputBuilder({ value: 'initial value' })

    fireEvent.input(
      wrapper.getByLabelText(/input label/i),
      { target: { value: '42' } }
    )

    wrapper.getByDisplayValue(/42/i)
    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0]).toContain('42')
  })

  it('should trigger change event with its value when typing', async () => {
    const wrapper = TextInputBuilder()

    fireEvent.change(wrapper.getByLabelText(/input label/i))

    expect(wrapper.emitted().change).toBeTruthy()
  })

  it('should emit its value on blur', () => {
    const wrapper = TextInputBuilder()

    fireEvent.blur(wrapper.getByLabelText(/input label/i))

    expect(wrapper.emitted().blur).toBeTruthy()
  })

  it('should emit its value on Enter', () => {
    const wrapper = TextInputBuilder()

    fireEvent.keyUp(
      wrapper.getByLabelText(/input label/i),
      { key: 'Enter', code: 13 }
    )

    expect(wrapper.emitted().enter).toBeTruthy()
  })

  it('should render the inputSibling slot if provided', () => {
    const SLOT_CONTENT = 'Test slot'
    const wrapper = TextInputBuilder(null, {
      slots: {
        inputSibling: SLOT_CONTENT,
      },
    })

    wrapper.getByText(SLOT_CONTENT)
  })
})
