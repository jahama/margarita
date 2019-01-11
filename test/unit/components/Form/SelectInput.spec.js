import { shallowMount } from '@vue/test-utils'
import SelectInput from '@/components/Form/SelectInput/SelectInput.vue'

describe('SelectInput', () => {
  it('should have a select with a class', () => {
    const wrapper = shallowMount(SelectInput)

    expect(wrapper.contains('select')).toBe(true)
    expect(wrapper.contains('.select-input')).toBe(true)
  })
})
