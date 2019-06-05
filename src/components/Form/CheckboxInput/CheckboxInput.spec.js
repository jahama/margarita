import { render, fireEvent, cleanup } from '@testing-library/vue'
import CheckboxInput from './CheckboxInput'

afterEach(cleanup)

const CheckboxInputBuilder = customProps =>
  render(CheckboxInput, {
    props: {
      label: 'checkbox label',
      ...customProps,
    },
  })

describe('CheckboxInput', () => {
  it('should be checkbox element with label', () => {
    const { getByLabelText } = CheckboxInputBuilder()

    getByLabelText(/checkbox label/i)
  })

  it('should render a disabled checkbox on passing the right prop', () => {
    const { getByLabelText } = CheckboxInputBuilder({ disabled: true })

    expect(getByLabelText(/checkbox label/i).disabled).toBeTruthy()
  })

  it('should render a checked checkbox on passing the right prop', () => {
    const { getByLabelText } = CheckboxInputBuilder({ checked: true })

    expect(getByLabelText(/checkbox label/i).checked).toBeTruthy()
  })

  it('should render a custom id', () => {
    const { getByLabelText, getByText } = CheckboxInputBuilder({
      id: 'customId',
    })

    expect(getByText(/checkbox label/i).getAttribute('for')).toBe('customId')
    expect(getByLabelText(/checkbox label/i).id).toBe('customId')
  })

  it('should emit an event when checked', async () => {
    const { getByLabelText, emitted } = CheckboxInputBuilder()

    await fireEvent.click(getByLabelText(/checkbox label/i))

    expect(emitted().input[0]).toContain(true)

    await fireEvent.click(getByLabelText(/checkbox label/i))

    expect(emitted().input[1]).toContain(false)
  })
})
