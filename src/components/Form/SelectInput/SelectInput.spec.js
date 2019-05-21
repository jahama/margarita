import { render, fireEvent } from 'vue-testing-library'
import SelectInput from './SelectInput'

const OPTIONS_WITH_PLACEHOLDER = [
  {
    label: 'Placeholder text',
    text: 'Placeholder text',
    value: '',
    disabled: true,
  },
  { label: 'Option1', text: 'Option1', value: 'option1' },
  { label: 'Option2', text: 'Option2', value: 'option2' },
  { label: 'Option3', text: 'Option3', value: 'option3' },
]

const SelectInputBuilder = customProps =>
  render(SelectInput, {
    props: {
      label: 'Test Select label',
      options: [
        { label: 'Option1', text: 'Option1', value: 'option1' },
        { label: 'Option2', text: 'Option2', value: 'option2' },
        { label: 'Option3', text: 'Option3', value: 'option3' },
      ],
      ...customProps,
    },
  })

describe('SelectInput', () => {
  it('should have multiple options', () => {
    const wrapper = SelectInputBuilder()

    wrapper.getByText(/option1/i)
    wrapper.getByText(/option2/i)
    wrapper.getByText(/option3/i)
  })

  it('should have change its value when selected option changes', () => {
    const wrapper = SelectInputBuilder()

    const select = wrapper.getByDisplayValue(/option1/i)

    fireEvent.change(select, { target: { value: 'option2' } })

    expect(wrapper.queryByDisplayValue(/option1/i)).toBe(null)
    wrapper.getByDisplayValue(/option2/i)
  })

  it('should have error with custom error message', () => {
    const wrapper = SelectInputBuilder({
      hasError: true,
      errorMessage: 'Something went wrong',
    })

    wrapper.getByText(/Something went wrong/i)
  })

  it('should have bold class', () => {
    const wrapper = SelectInputBuilder({
      weight: 'bold',
    })

    const select = wrapper.getByDisplayValue(/option1/i)

    expect(select.classList.contains('select-input__field--bold')).toBeTruthy()
  })

  it('should have custom class', () => {
    const customClass = 'my-custom-class'
    const wrapper = SelectInputBuilder({ fieldClass: customClass })

    const select = wrapper.getByDisplayValue(/option1/i)

    expect(select.classList.contains(customClass)).toBeTruthy()
  })

  it('should have aria-label attr and hidden label', () => {
    const wrapper = SelectInputBuilder({
      'aria-label': 'test',
    })

    const select = wrapper.getByDisplayValue(/option1/i)

    const { name, value } = select.attributes[1]

    expect(name).toBe('aria-label')
    expect(value).toBe('test')

    // If we provide an aria-label, the <label> element should not be there
    expect(wrapper.queryByDisplayValue(/Test Select label/i)).toBe(null)
  })

  it('should have a placeholder text', () => {
    const wrapper = SelectInputBuilder({
      options: OPTIONS_WITH_PLACEHOLDER,
    })

    wrapper.getByDisplayValue(/placeholder text/i)
  })

  it(`shouldn't show placeholder text after change value`, () => {
    const wrapper = SelectInputBuilder({
      options: OPTIONS_WITH_PLACEHOLDER,
    })

    const select = wrapper.getByDisplayValue(/placeholder text/i)

    fireEvent.change(select, { target: { value: 'option1' } })
    wrapper.getByDisplayValue(/option1/i)
  })

  it('placeholder option should be disabled', () => {
    const wrapper = SelectInputBuilder({
      options: OPTIONS_WITH_PLACEHOLDER,
    })

    const placeholder = wrapper.getByText(/placeholder text/i)
    expect(placeholder.disabled).toBe(true)
  })
})
