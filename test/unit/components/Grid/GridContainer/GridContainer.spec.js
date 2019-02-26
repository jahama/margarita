import { shallowMount } from '@vue/test-utils'
import GridContainer from '@margarita/components/Grid/GridContainer/GridContainer.vue'

describe('GridContainer', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(GridContainer)
    expect(wrapper.is(GridContainer)).toBe(true)
  })

  it('should use the specified tag', () => {
    const wrapper = shallowMount(GridContainer, {
      context: Object.assign({
        props: {
          tag: 'section'
        }
      })
    })

    expect(wrapper.contains('section')).toBe(true)
  })

  it('should add a class based in a prop', () => {
    const wrapper = shallowMount(GridContainer, {
      context: Object.assign({
        props: {
          fluid: true
        }
      })
    })

    expect(wrapper.classes()).toContain('grid-container--fluid')

    const wrapper1 = shallowMount(GridContainer, {
      context: Object.assign({
        props: {
          fluid: false
        }
      })
    })

    expect(wrapper1.classes()).not.toContain('grid-container--fluid')
  })

  it('should add the wanted class names', () => {
    const wrapper = shallowMount(GridContainer, {
      context: Object.assign({
        class: {
          'test-class': true
        }
      })
    })

    expect(wrapper.classes()).toContain('grid-container')
    expect(wrapper.classes()).toContain('test-class')
  })

  it('should render the default slot', () => {
    const wrapper = shallowMount(GridContainer, {
      slots: {
        default: '<span>Example</span>'
      }
    })

    expect(wrapper.find('span').text()).toBe('Example')
  })
})
