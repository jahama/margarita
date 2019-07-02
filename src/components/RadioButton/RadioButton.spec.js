import { render, fireEvent, cleanup } from '@testing-library/vue'
import RadioButton from './RadioButton'

afterEach(cleanup)

const CHECKED_VALUE = '1'
const SLOT_TEXT = 'text slot'

const RadioButtonBuilder = customProps => {
  const utils = render(RadioButton, {
    props: {
      checked: CHECKED_VALUE,
      ...customProps,
    },
    slots: {
      default: SLOT_TEXT,
    },
  })

  return {
    ...utils,
    input: utils.getByLabelText(SLOT_TEXT),
  }
}

describe('RadioButton', () => {
  it('should render an unchecked radio element by default', () => {
    const { input } = RadioButtonBuilder()

    expect(input.checked).toBe(false)
  })

  it('should render an checked radio element if checked key matches own label', () => {
    const { input } = RadioButtonBuilder({
      label: CHECKED_VALUE,
    })

    expect(input.checked).toBe(true)
  })

  it('should emit change event on click', async () => {
    const label = 'checkboxLabel'
    const { input, emitted } = RadioButtonBuilder({
      label,
    })

    await fireEvent.click(input)

    expect(emitted().change).toBeTruthy()
    expect(emitted().change[0]).toEqual([label])
    expect(input.checked).toBe(true)
  })

  it('should not emit events if input is disabled', async () => {
    const { input, emitted } = RadioButtonBuilder({
      disabled: true,
    })

    expect(input.disabled).toBe(true)

    await fireEvent.update(input)

    expect(emitted().change).toBeUndefined()
    expect(input.checked).toBe(false)
  })

  it('should toggle value between related checkboxes', async () => {
    const { getByLabelText } = render({
      components: { RadioButton },
      template: `
        <div>
          <radio-button v-model="selected" label="id1">radio1</radio-button>
          <radio-button v-model="selected" label="id2">radio2</radio-button>
        </div>
      `,
      data: () => ({ selected: 'id1' }),
    })

    const radio1 = getByLabelText('radio1')
    const radio2 = getByLabelText('radio2')

    expect(radio1.checked).toBe(true)
    expect(radio2.checked).toBe(false)

    await fireEvent.click(radio2)

    expect(radio1.checked).toBe(false)
    expect(radio2.checked).toBe(true)
  })
})
