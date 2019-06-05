import { render, fireEvent, cleanup } from '@testing-library/vue'
import SelectInput from './SelectInput'

const OPTIONS = [
  { label: 'Option1', text: 'Option1', value: 'option1' },
  { label: 'Option2', text: 'Option2', value: 'option2' },
  { label: 'Option3', text: 'Option3', value: 'option3' },
]

const OPTIONS_WITH_PLACEHOLDER = [
  {
    label: 'Placeholder text',
    text: 'Placeholder text',
    value: '',
    disabled: true,
  },
  ...OPTIONS,
]

const SelectInputBuilder = customProps =>
  render(SelectInput, {
    props: {
      label: 'Test Select label',
      options: OPTIONS,
      ...customProps,
    },
  })

describe('SelectInput', () => {
  afterEach(cleanup)

  it('should have multiple options', () => {
    const { getByText } = SelectInputBuilder()

    getByText(/option1/i)
    getByText(/option2/i)
    getByText(/option3/i)
  })

  it('should have change its value when selected option changes', async () => {
    const { queryByDisplayValue, getByDisplayValue } = SelectInputBuilder()

    const select = getByDisplayValue(/option1/i)

    await fireEvent.change(select, { target: { value: 'option2' } })

    expect(queryByDisplayValue(/option1/i)).toBe(null)
    getByDisplayValue(/option2/i)
  })

  it('should have error with custom error message', () => {
    const { getByText } = SelectInputBuilder({
      hasError: true,
      errorMessage: 'Something went wrong',
    })

    getByText(/Something went wrong/i)
  })

  it('should have bold class', () => {
    const { getByDisplayValue } = SelectInputBuilder({
      weight: 'bold',
    })

    const select = getByDisplayValue(/option1/i)

    expect(select.classList.contains('select-input__field--bold')).toBeTruthy()
  })

  it('should have custom class', () => {
    const customClass = 'my-custom-class'
    const { getByDisplayValue } = SelectInputBuilder({
      fieldClass: customClass,
    })

    const select = getByDisplayValue(/option1/i)

    expect(select.classList.contains(customClass)).toBeTruthy()
  })

  it('should have aria-label attr and hidden label', () => {
    const { queryByDisplayValue, getByDisplayValue } = SelectInputBuilder({
      'aria-label': 'test',
    })

    const select = getByDisplayValue(/option1/i)

    const { name, value } = select.attributes[1]

    expect(name).toBe('aria-label')
    expect(value).toBe('test')

    // If we provide an aria-label, the <label> element should not be there
    expect(queryByDisplayValue(/Test Select label/i)).toBe(null)
  })

  it('should have a placeholder text', () => {
    const { getByDisplayValue } = SelectInputBuilder({
      options: OPTIONS_WITH_PLACEHOLDER,
    })

    getByDisplayValue(/placeholder text/i)
  })

  it(`shouldn't show placeholder text after change value`, async () => {
    const { getByDisplayValue } = SelectInputBuilder({
      options: OPTIONS_WITH_PLACEHOLDER,
    })

    const select = getByDisplayValue(/placeholder text/i)

    await fireEvent.change(select, { target: { value: 'option1' } })
    getByDisplayValue(/option1/i)
  })

  it('placeholder option should be disabled', () => {
    const { getByText } = SelectInputBuilder({
      options: OPTIONS_WITH_PLACEHOLDER,
    })

    const placeholder = getByText(/placeholder text/i)
    expect(placeholder.disabled).toBe(true)
  })
})
