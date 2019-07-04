import { shallowMount } from '@vue/test-utils'
import MaGridColumn from './MaGridColumn.vue'

describe('GridColumn', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(MaGridColumn)
    expect(wrapper.is(MaGridColumn)).toBe(true)
  })

  it('should use the specified tag', () => {
    const wrapper = shallowMount(MaGridColumn, {
      context: Object.assign({
        props: {
          tag: 'section',
        },
      }),
    })

    expect(wrapper.contains('section')).toBe(true)
  })

  it('should add the wanted class names', () => {
    const wrapper = shallowMount(MaGridColumn, {
      context: Object.assign({
        class: {
          'ma-grid-col--12': true,
        },
      }),
    })

    expect(wrapper.classes()).toContain('ma-grid-col')
    expect(wrapper.classes()).toContain('ma-grid-col--12')
  })

  it('should render the default slot', () => {
    const wrapper = shallowMount(MaGridColumn, {
      slots: {
        default: '<span>Example</span>',
      },
    })

    expect(wrapper.find('span').text()).toBe('Example')
  })
})
