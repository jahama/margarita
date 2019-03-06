import { shallowMount } from '@vue/test-utils'
import GridRow from '@margarita/components/Grid/GridRow/GridRow.vue'

describe('GridRow', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(GridRow)
    expect(wrapper.is(GridRow)).toBe(true)
  })

  it('should use the specified tag', () => {
    const wrapper = shallowMount(GridRow, {
      context: Object.assign({
        props: {
          tag: 'section'
        }
      })
    })

    expect(wrapper.contains('section')).toBe(true)
  })

  it('should add a class based in a prop', () => {
    const wrapper = shallowMount(GridRow, {
      context: Object.assign({
        props: {
          noGutters: true
        }
      })
    })

    expect(wrapper.classes()).toContain('grid-row--no-gutters')

    const wrapper1 = shallowMount(GridRow, {
      context: Object.assign({
        props: {
          noGutters: false
        }
      })
    })

    expect(wrapper1.classes()).not.toContain('grid-row--no-gutters')
  })

  it('should add the wanted class namess', () => {
    const wrapper = shallowMount(GridRow, {
      context: Object.assign({
        class: {
          'test-class': true
        }
      })
    })

    expect(wrapper.classes()).toContain('grid-row')
    expect(wrapper.classes()).toContain('test-class')
  })

  it('should render the default slot', () => {
    const wrapper = shallowMount(GridRow, {
      slots: {
        default: '<span>Example</span>'
      }
    })

    expect(wrapper.find('span').text()).toBe('Example')
  })
})
