import { shallowMount } from '@vue/test-utils'
import GridColumn from './GridColumn.vue'

describe('GridColumn', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(GridColumn)
    expect(wrapper.is(GridColumn)).toBe(true)
  })

  it('should use the specified tag', () => {
    const wrapper = shallowMount(GridColumn, {
      context: Object.assign({
        props: {
          tag: 'section',
        },
      }),
    })

    expect(wrapper.contains('section')).toBe(true)
  })

  it('should add the wanted class names', () => {
    const wrapper = shallowMount(GridColumn, {
      context: Object.assign({
        class: {
          'grid-col--12': true,
        },
      }),
    })

    expect(wrapper.classes()).toContain('grid-col')
    expect(wrapper.classes()).toContain('grid-col--12')
  })

  it('should render the default slot', () => {
    const wrapper = shallowMount(GridColumn, {
      slots: {
        default: '<span>Example</span>',
      },
    })

    expect(wrapper.find('span').text()).toBe('Example')
  })
})
