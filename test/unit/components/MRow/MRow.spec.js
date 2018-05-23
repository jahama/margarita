import { shallowMount } from '@vue/test-utils'
import MRow from '@/components/MRow/MRow.vue'

describe('MRow', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(MRow)
    expect(wrapper.is(MRow)).toBe(true)
  })

  it('should use the specified tag', () => {
    const wrapper = shallowMount(MRow, {
      context: Object.assign({
        props: {
          tag: 'section'
        }
      })
    })

    expect(wrapper.contains('section')).toBe(true)
  })

  it('should add a class based in a prop', () => {
    const wrapper = shallowMount(MRow, {
      context: Object.assign({
        props: {
          noGutters: true
        }
      })
    })

    expect(wrapper.classes()).toContain('m-row--no-gutters')

    const wrapper1 = shallowMount(MRow, {
      context: Object.assign({
        props: {
          noGutters: false
        }
      })
    })

    expect(wrapper1.classes()).not.toContain('m-row--no-gutters')
  })

  it('should add the wanted class namess', () => {
    const wrapper = shallowMount(MRow, {
      context: Object.assign({
        class: {
          'test-class': true
        }
      })
    })

    expect(wrapper.classes()).toContain('m-row')
    expect(wrapper.classes()).toContain('test-class')
  })

  it('should render the default slot', () => {
    const wrapper = shallowMount(MRow, {
      slots: {
        default: '<span>Example</span>'
      }
    })

    expect(wrapper.find('span').text()).toBe('Example')
  })
})
