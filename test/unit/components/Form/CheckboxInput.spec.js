import { shallowMount } from '@vue/test-utils'
import CheckboxInput from '@margarita/components/Form/CheckboxInput/CheckboxInput.vue'

describe('SelectInput', () => {
  it('should be checkbox element with label', () => {
    const wrapper = shallowMount(CheckboxInput, {
      propsData: {
        label: 'Test Checkbox'
      }
    })

    expect(wrapper.find('label').text()).toBe('Test Checkbox')
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('should be disabled', () => {
    const wrapper = shallowMount(CheckboxInput, {
      propsData: {
        label: 'Test Checkbox',
        disabled: true
      }
    })

    expect(wrapper.find('input').is(':disabled')).toBe(true)
  })

  it('should be checked', () => {
    const wrapper = shallowMount(CheckboxInput, {
      propsData: {
        label: 'Test Checkbox',
        checked: true
      }
    })

    expect(wrapper.find('input').is(':checked')).toBe(true)
  })

  it('should have custom id', () => {
    const wrapper = shallowMount(CheckboxInput, {
      propsData: {
        label: 'Test Checkbox',
        id: 'test_checkbox'
      }
    })

    expect(wrapper.find('label').attributes().for).toBe('test_checkbox')
    expect(wrapper.find('input').attributes().id).toBe('test_checkbox')
  })

  it('should emit event when checked', () => {
    const wrapper = shallowMount(CheckboxInput, {
      propsData: {
        label: 'Test Checkbox'
      }
    })

    const checkbox = wrapper.find('input')
    checkbox.trigger('click')
    checkbox.trigger('change')
    expect(checkbox.is(':checked')).toBe(true)
    expect(wrapper.emitted().input).toBeTruthy()
  })
})
