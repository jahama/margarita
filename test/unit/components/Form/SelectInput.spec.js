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

  it('shouldn\'t emit input event if has a default value', () => {
    const value = OPTIONS[1].value

    const wrapper = shallowMount(SelectInput, {
      propsData: {
        options: OPTIONS,
        value: value
      }
    })

    expect(wrapper.emitted().input).toBeUndefined()
    expect(wrapper.vm.lazyValue).toEqual(OPTIONS[1].value)
  })
})
