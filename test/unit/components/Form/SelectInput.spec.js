import { shallowMount } from '@vue/test-utils'
import SelectInput from '@margarita/components/Form/SelectInput/SelectInput.vue'

describe('SelectInput', () => {
  it('should have a select with a class', () => {
    const wrapper = shallowMount(SelectInput, {
      props: {
        options: [],
        label: 'Label'
      }
    })

    expect(wrapper.contains('select')).toBe(true)
    expect(wrapper.contains('.select-input')).toBe(true)
  })
})
