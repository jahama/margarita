import { shallowMount } from '@vue/test-utils'
import MaGridContainer from './MaGridContainer'

describe('GridContainer', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(MaGridContainer)
    expect(wrapper.is(MaGridContainer)).toBe(true)
  })

  it('should use the specified tag', () => {
    const wrapper = shallowMount(MaGridContainer, {
      context: Object.assign({
        props: {
          tag: 'section',
        },
      }),
    })

    expect(wrapper.contains('section')).toBe(true)
  })

  it('should add a class based in a prop', () => {
    const wrapper = shallowMount(MaGridContainer, {
      context: Object.assign({
        props: {
          fluid: true,
        },
      }),
    })

    expect(wrapper.classes()).toContain('ma-grid-container--fluid')

    const wrapper1 = shallowMount(MaGridContainer, {
      context: Object.assign({
        props: {
          fluid: false,
        },
      }),
    })

    expect(wrapper1.classes()).not.toContain('ma-grid-container--fluid')
  })

  it('should add the wanted class names', () => {
    const wrapper = shallowMount(MaGridContainer, {
      context: Object.assign({
        class: {
          'test-class': true,
        },
      }),
    })

    expect(wrapper.classes()).toContain('ma-grid-container')
    expect(wrapper.classes()).toContain('test-class')
  })

  it('should render the default slot', () => {
    const wrapper = shallowMount(MaGridContainer, {
      slots: {
        default: '<span>Example</span>',
      },
    })

    expect(wrapper.find('span').text()).toBe('Example')
  })
})
