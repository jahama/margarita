import { render } from '@margarita/margarita-test-utils'
import MaStepper from './MaStepper'

const slot = '<section>Content 1</section><section>Content 2</section>'

describe('Stepper', () => {
  test('renders content from slot', () => {
    const { getByText } = renderComponent({
      size: 'small',
    })

    expect(getByText('Content 1')).toBeInTheDocument()
  })

  test('size prop renders proper class', () => {
    const { getByText } = renderComponent({
      size: 'small',
    })

    expect(getByText('Content 1').parentNode).toHaveClass(
      'ma-stepper-number-small'
    )
  })

  test('tone prop renders proper class', () => {
    const { getByText } = renderComponent({
      tone: 'white',
    })

    expect(getByText('Content 1').parentNode).toHaveClass('ma-stepper-white')
  })
})

function renderComponent(props = {}) {
  return render(MaStepper, {
    props,
    slots: { default: slot },
  })
}
