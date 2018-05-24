import { shallowMount } from '@vue/test-utils'
import MLogo from '@/components/MLogo/MLogo.vue'

describe('MLogo', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(MLogo)
    expect(wrapper.is(MLogo)).toBe(true)
  })

  it('should have the default class', () => {
    const wrapper = shallowMount(MLogo)

    expect(wrapper.classes()).toContain('m-logo')
    expect(wrapper.classes()).toContain('m-logo--color')
  })

  it('should render the default slot', () => {
    const wrapper = shallowMount(MLogo, {
      context: Object.assign({
        props: {
          color: false
        }
      })
    })

    expect(wrapper.classes()).toContain('m-logo')
    expect(wrapper.classes()).not.toContain('m-logo--color')
  })
})
