import { shallowMount } from '@vue/test-utils'
import MCol from '@/components/MCol/MCol.vue'

describe('MCol', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(MCol)
    expect(wrapper.is(MCol)).toBe(true)
  })

  it('should use the specified tag', () => {
    const wrapper = shallowMount(MCol, {
      context: Object.assign({
        props: {
          tag: 'section'
        }
      })
    })

    expect(wrapper.contains('section')).toBe(true)
  })

  it('should add the wanted class names', () => {
    const wrapper = shallowMount(MCol, {
      context: Object.assign({
        class: {
          'm-col--12': true
        }
      })
    })

    expect(wrapper.classes()).toContain('m-col')
    expect(wrapper.classes()).toContain('m-col--12')
  })

  it('should render the default slot', () => {
    const wrapper = shallowMount(MCol, {
      slots: {
        default: '<span>Example</span>'
      }
    })

    expect(wrapper.find('span').text()).toBe('Example')
  })
})
