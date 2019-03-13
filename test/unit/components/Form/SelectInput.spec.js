import { shallowMount } from '@vue/test-utils'
import SelectInput from '@margarita/components/Form/SelectInput/SelectInput.vue'

describe('SelectInput', () => {
  it('should be select element with label and option', () => {
    const wrapper = shallowMount(SelectInput, {
      propsData: {
        options: [
          { label: 'Option1', text: 'Option1', value: 'option1' },
        ],
        label: 'Test Select',
      },
    })

    expect(wrapper.emitted().mount).toBeTruthy()

    expect(wrapper.find('label').text()).toBe('Test Select')
    expect(wrapper.find('select').text()).toBe('Option1')

    const select = wrapper.find('select')
    expect(select.is('select')).toBe(true)

    const option = select.findAll('option').at(0)

    expect(option.attributes().label).toBe('Option1')
    expect(option.text()).toBe('Option1')
    expect(option.attributes().value).toBe('option1')

    expect(option.is(':selected')).toBe(true)
  })

  it('should have multiple options', () => {
    const wrapper = shallowMount(SelectInput, {
      propsData: {
        options: [
          { label: 'Option1', text: 'Option1', value: 'option1' },
          { label: 'Option2', text: 'Option2', value: 'option2' },
          { label: 'Option3', text: 'Option3', value: 'option3' },
        ],
        label: 'Test Select',
      },
    })

    const options = wrapper.find('select').findAll('option')
    expect(options.at(0).exists()).toBe(true)
    expect(options.at(1).exists()).toBe(true)
    expect(options.at(2).exists()).toBe(true)
  })

  it('should have change its value when selected option changes', () => {
    const wrapper = shallowMount(SelectInput, {
      propsData: {
        options: [
          { label: 'Option1', text: 'Option1', value: 'option1' },
          { label: 'Option2', text: 'Option2', value: 'option2' },
          { label: 'Option3', text: 'Option3', value: 'option3' },
        ],
        label: 'Test Select',
      },
    })

    const options = wrapper.find('select').findAll('option')

    options.at(1).element.selected = true
    wrapper.find('select').trigger('change')

    expect(options.at(1).is(':selected')).toBe(true)
    expect(wrapper.emitted().change).toBeTruthy()
  })

  it('should have error with custom error message', () => {
    const wrapper = shallowMount(SelectInput, {
      propsData: {
        options: [
          { label: 'Option1', text: 'Option1', value: 'option1' },
        ],
        label: 'Test Select',
        errorMessage: 'Something went wrong',
        hasError: true,
      },
    })

    expect(wrapper.find('select').classes()).toContain('select-input__field--error')
    expect(wrapper.findAll('div').at(1).exists()).toBe(true)

    const errorDiv = wrapper.findAll('div').at(1)
    expect(errorDiv.classes()).toContain('select-input__error-message')
    expect(errorDiv.text()).toBe('Something went wrong')
  })

  it('should have bold class', () => {
    const wrapper = shallowMount(SelectInput, {
      propsData: {
        options: [
          { label: 'Option1', text: 'Option1', value: 'option1' },
        ],
        label: 'Test Select',
        weight: 'bold',
      },
    })

    expect(wrapper.find('select').classes()).toContain('select-input__field--bold')
  })

  it('should have custom class', () => {
    const wrapper = shallowMount(SelectInput, {
      propsData: {
        options: [
          { label: 'Option1', text: 'Option1', value: 'option1' },
        ],
        label: 'Test Select',
        fieldClass: 'select-input__test',
      },
    })

    expect(wrapper.find('select').classes()).toContain('select-input__test')
  })

  it('should have aria-label attr and hidden label', () => {
    const wrapper = shallowMount(SelectInput, {
      propsData: {
        options: [
          { label: 'Option1', text: 'Option1', value: 'option1' },
        ],
        label: 'Test Select',
      },
      attrs: {
        'aria-label': 'Test',
      },
    })

    expect(wrapper.find('label').classes()).toContain('select-input__label--hidden')
  })
})
