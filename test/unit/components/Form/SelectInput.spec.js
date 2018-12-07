import { shallowMount } from '@vue/test-utils'
import SelectInput from '@/components/Form/SelectInput/SelectInput.vue'

const OPTIONS = [ {
  text: 'Option 1',
  value: 'option1'
}, {
  text: 'Option 2',
  value: 'option2'
} ]

describe('SelectInput', () => {
  it('should have a select with a class', () => {
    const wrapper = shallowMount(SelectInput)

    expect(wrapper.contains('select')).toBe(true)
    expect(wrapper.contains('.select-input')).toBe(true)
  })

  it('should emit input with if has not a default value', () => {
    const value = ''

    const wrapper = shallowMount(SelectInput, {
      propsData: {
        options: OPTIONS,
        value: value
      }
    })

    expect(wrapper.emitted().input[0]).toEqual([ OPTIONS[0].value ])
    expect(wrapper.vm.selectedValue).toEqual(OPTIONS[0].value)
  })

  it('should emit input with if has not a default value', () => {
    const value = OPTIONS[1].value

    const wrapper = shallowMount(SelectInput, {
      propsData: {
        options: OPTIONS,
        value: value
      }
    })

    expect(wrapper.emitted().input).toBeUndefined()
    expect(wrapper.vm.selectedValue).toEqual(OPTIONS[1].value)
  })
})
