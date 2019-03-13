import { shallowMount } from '@vue/test-utils'
import ButtonInput from '@margarita/components/Form/ButtonInput/ButtonInput.vue'

describe('ButtonInput', () => {
  it('should be a button element', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {
        tag: 'button'
      }
    })

    expect(wrapper.is('button')).toBe(true)
  })

  it('should be a link element', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {
        tag: 'a'
      }
    })

    expect(wrapper.is('a')).toBe(true)
  })

  it('should have fluid CSS class applied', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {
        fluid: true
      }
    })

    expect(wrapper.classes()).toContain('button-input--fluid')
  })

  it('should NOT have fluid CSS class applied', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {}
    })

    expect(wrapper.classes()).not.toContain('button-input--fluid')
  })

  it('should have rounded CSS class applied', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {
        rounded: true
      }
    })

    expect(wrapper.classes()).toContain('button-input--rounded')
  })

  it('should NOT have rounded CSS class applied', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {}
    })

    expect(wrapper.classes()).not.toContain('button-input--rounded')
  })

  it('should have loading CSS class applied', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {
        loading: true
      }
    })

    expect(wrapper.classes()).toContain('button-input--loading')
  })

  it('should NOT have loading CSS class applied', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {}
    })

    expect(wrapper.classes()).not.toContain('button-input--loading')
  })

  it('should be disabled', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {
        disabled: true
      }
    })

    expect(wrapper.attributes().disabled).toBe('disabled')
  })

  it('should NOT be disabled', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {}
    })

    expect(wrapper.attributes().disabled).toBe(undefined)
  })

  it('should have primary CSS class', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {
        category: 'primary'
      }
    })

    expect(wrapper.classes()).toContain('button-input--primary')
    expect(wrapper.classes()).not.toContain('button-input--secondary')
    expect(wrapper.classes()).not.toContain('button-input--gradient')
    expect(wrapper.classes()).not.toContain('button-input--no-background')
  })

  it('should have secondary CSS class', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {
        category: 'secondary'
      }
    })

    expect(wrapper.classes()).not.toContain('button-input--primary')
    expect(wrapper.classes()).toContain('button-input--secondary')
    expect(wrapper.classes()).not.toContain('button-input--gradient')
    expect(wrapper.classes()).not.toContain('button-input--no-background')
  })

  it('should have gradient CSS class', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {
        category: 'gradient'
      }
    })

    expect(wrapper.classes()).not.toContain('button-input--primary')
    expect(wrapper.classes()).not.toContain('button-input--secondary')
    expect(wrapper.classes()).toContain('button-input--gradient')
    expect(wrapper.classes()).not.toContain('button-input--no-background')
  })

  it('should have no-background CSS class', () => {
    const wrapper = shallowMount(ButtonInput, {
      propsData: {
        category: 'no-background'
      }
    })

    expect(wrapper.classes()).not.toContain('button-input--primary')
    expect(wrapper.classes()).not.toContain('button-input--secondary')
    expect(wrapper.classes()).not.toContain('button-input--gradient')
    expect(wrapper.classes()).toContain('button-input--no-background')
  })
})
