import { shallowMount } from '@vue/test-utils'
import MContainer from '@/components/MContainer/MContainer.vue'

describe('MContainer', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(MContainer)
    expect(wrapper.is(MContainer)).toBe(true)
  })

  it('should use the specified tag', () => {
    const wrapper = shallowMount(MContainer, {
      context: Object.assign({
        props: {
          tag: 'section'
        }
      })
    })

    expect(wrapper.contains('section')).toBe(true)
  })

  it('should add a class based in a prop', () => {
    const wrapper = shallowMount(MContainer, {
      context: Object.assign({
        props: {
          fluid: true
        }
      })
    })

    expect(wrapper.classes()).toContain('m-container--fluid')

    const wrapper1 = shallowMount(MContainer, {
      context: Object.assign({
        props: {
          fluid: false
        }
      })
    })

    expect(wrapper1.classes()).not.toContain('m-container--fluid')
  })

  it('should add the wanted class names', () => {
    const wrapper = shallowMount(MContainer, {
      context: Object.assign({
        class: {
          'test-class': true
        }
      })
    })

    expect(wrapper.classes()).toContain('m-container')
    expect(wrapper.classes()).toContain('test-class')
  })

  it('should render the default slot', () => {
    const wrapper = shallowMount(MContainer, {
      slots: {
        default: '<span>Example</span>'
      }
    })

    expect(wrapper.find('span').text()).toBe('Example')
  })
})
