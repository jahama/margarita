import { render } from '@margarita/margarita-test-utils'
import { spacing } from '../../tokens'
import MaStepper from './MaStepper'

const slot = '<section>Content 1</section><section>Content 2</section>'

describe('Stepper', () => {
  test('renders content from slot', () => {
    const { content } = renderComponent({
      size: 'small',
    })

    expect(content).toBeInTheDocument()
  })

  test('size prop renders proper class', () => {
    const { parentNode } = renderComponent({
      size: 'small',
    })

    expect(parentNode).toHaveClass('ma-stepper-number-small')
  })

  test('tone prop renders proper class', () => {
    const { parentNode } = renderComponent({
      tone: 'white',
    })

    expect(parentNode).toHaveClass('ma-stepper-white')
  })

  test('adds spacing classes', () => {
    const { parentNode } = renderComponent({ space: 'large' })

    expect(parentNode).toHaveStyle({
      '--stack-gap': spacing.large,
    })
  })

  test('adds spacing classes from array', () => {
    const { parentNode } = renderComponent({ space: ['small', 'large'] })

    expect(parentNode).toHaveStyle({
      '--stack-gap': spacing.small,
    })
  })
})

function renderComponent(props = {}) {
  const utils = render(MaStepper, {
    props,
    slots: { default: slot },
  })

  const content = utils.getByText('Content 1')
  const parentNode = utils.getByText('Content 1').parentNode

  return {
    content,
    parentNode,
  }
}
