import { render, fireEvent, cleanup } from 'vue-testing-library'
import CheckboxInput from '@margarita/components/Form/CheckboxInput/CheckboxInput.vue'

const CheckboxInputBuilder = customProps => render(CheckboxInput, {
  props: {
    label: 'checkbox label',
    ...customProps,
  },
})

describe('CheckboxInput', () => {
  afterEach(cleanup)

  it('should be checkbox element with label', () => {
    const wrapper = CheckboxInputBuilder()

    wrapper.getByLabelText(/checkbox label/i)
  })

  it('should render a disabled checkbox on passing the right prop', () => {
    const wrapper = CheckboxInputBuilder({ disabled: true })

    expect(wrapper.getByLabelText(/checkbox label/i).disabled).toBeTruthy()
  })

  it('should render a checked checkbox on passing the right prop', () => {
    const wrapper = CheckboxInputBuilder({ checked: true })

    expect(wrapper.getByLabelText(/checkbox label/i).checked).toBeTruthy()
  })

  it('should render a custom id', () => {
    const wrapper = CheckboxInputBuilder({ id: 'customId' })

    expect(wrapper.getByText(/checkbox label/i).getAttribute('for'))
      .toBe('customId')
    expect(wrapper.getByLabelText(/checkbox label/i).id).toBe('customId')
  })

  it('should emit an event when checked', () => {
    const wrapper = CheckboxInputBuilder()

    fireEvent.click(wrapper.getByLabelText(/checkbox label/i))

    expect(wrapper.emitted().input[0]).toContain(true)

    fireEvent.click(wrapper.getByLabelText(/checkbox label/i))

    expect(wrapper.emitted().input[1]).toContain(false)
  })
})
