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
  it('renders a checkbox element with its label', () => {
    const { getByLabelText } = CheckboxInputBuilder()

    getByLabelText(/checkbox label/i)
  })

  it('renders a disabled checkbox', async () => {
    const { getByLabelText, emitted } = CheckboxInputBuilder({ disabled: true })

    expect(getByLabelText(/checkbox label/i).disabled).toBeTruthy()

    await fireEvent.click(getByLabelText(/checkbox label/i))

    expect(emitted()).toEqual({})
  })

  it('renders a checked checkbox', () => {
    const { getByLabelText } = CheckboxInputBuilder({ checked: true })

    expect(getByLabelText(/checkbox label/i).checked).toBeTruthy()
  })

  it('renders a custom id', () => {
    const { getByLabelText } = CheckboxInputBuilder({
      id: 'customId',
    })

    expect(getByLabelText(/checkbox label/i).id).toBe('customId')
  })

  it('emits event when checked', async () => {
    const { getByLabelText, emitted } = CheckboxInputBuilder()

    await fireEvent.click(getByLabelText(/checkbox label/i))

    expect(emitted().input[0]).toContain(true)

    await fireEvent.click(getByLabelText(/checkbox label/i))

    expect(emitted().input[1]).toContain(false)
  })
})
